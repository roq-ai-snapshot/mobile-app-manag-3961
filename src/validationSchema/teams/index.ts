import * as yup from 'yup';

export const teamValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
