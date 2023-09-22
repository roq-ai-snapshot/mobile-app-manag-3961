import axios from 'axios';
import queryString from 'query-string';
import { AppSettingsInterface, AppSettingsGetQueryInterface } from 'interfaces/app-settings';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAppSettings = async (
  query?: AppSettingsGetQueryInterface,
): Promise<PaginatedInterface<AppSettingsInterface>> => {
  const response = await axios.get('/api/app-settings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAppSettings = async (appSettings: AppSettingsInterface) => {
  const response = await axios.post('/api/app-settings', appSettings);
  return response.data;
};

export const updateAppSettingsById = async (id: string, appSettings: AppSettingsInterface) => {
  const response = await axios.put(`/api/app-settings/${id}`, appSettings);
  return response.data;
};

export const getAppSettingsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/app-settings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAppSettingsById = async (id: string) => {
  const response = await axios.delete(`/api/app-settings/${id}`);
  return response.data;
};
