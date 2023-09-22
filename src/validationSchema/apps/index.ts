import * as yup from 'yup';

export const appValidationSchema = yup.object().shape({
  name: yup.string().required(),
  version: yup.string().required(),
  release_date: yup.date().required(),
  platform: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
