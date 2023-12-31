import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware, notificationHandlerMiddleware } from 'server/middlewares';
import { appFeedbackValidationSchema } from 'validationSchema/app-feedbacks';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  const allowed = await prisma.app_feedback
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  if (!allowed) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  switch (req.method) {
    case 'GET':
      return getAppFeedbackById();
    case 'PUT':
      return updateAppFeedbackById();
    case 'DELETE':
      return deleteAppFeedbackById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getAppFeedbackById() {
    const data = await prisma.app_feedback.findFirst(convertQueryToPrismaUtil(req.query, 'app_feedback'));
    return res.status(200).json(data);
  }

  async function updateAppFeedbackById() {
    await appFeedbackValidationSchema.validate(req.body);
    const data = await prisma.app_feedback.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
  async function deleteAppFeedbackById() {
    await notificationHandlerMiddleware(req, req.query.id as string);
    const data = await prisma.app_feedback.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
