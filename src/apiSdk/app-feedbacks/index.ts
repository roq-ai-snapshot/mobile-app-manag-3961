import axios from 'axios';
import queryString from 'query-string';
import { AppFeedbackInterface, AppFeedbackGetQueryInterface } from 'interfaces/app-feedback';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAppFeedbacks = async (
  query?: AppFeedbackGetQueryInterface,
): Promise<PaginatedInterface<AppFeedbackInterface>> => {
  const response = await axios.get('/api/app-feedbacks', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAppFeedback = async (appFeedback: AppFeedbackInterface) => {
  const response = await axios.post('/api/app-feedbacks', appFeedback);
  return response.data;
};

export const updateAppFeedbackById = async (id: string, appFeedback: AppFeedbackInterface) => {
  const response = await axios.put(`/api/app-feedbacks/${id}`, appFeedback);
  return response.data;
};

export const getAppFeedbackById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/app-feedbacks/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAppFeedbackById = async (id: string) => {
  const response = await axios.delete(`/api/app-feedbacks/${id}`);
  return response.data;
};
