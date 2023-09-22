import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  team_id: yup.string().nullable().required(),
});
