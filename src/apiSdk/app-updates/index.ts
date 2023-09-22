import axios from 'axios';
import queryString from 'query-string';
import { AppUpdatesInterface, AppUpdatesGetQueryInterface } from 'interfaces/app-updates';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAppUpdates = async (
  query?: AppUpdatesGetQueryInterface,
): Promise<PaginatedInterface<AppUpdatesInterface>> => {
  const response = await axios.get('/api/app-updates', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAppUpdates = async (appUpdates: AppUpdatesInterface) => {
  const response = await axios.post('/api/app-updates', appUpdates);
  return response.data;
};

export const updateAppUpdatesById = async (id: string, appUpdates: AppUpdatesInterface) => {
  const response = await axios.put(`/api/app-updates/${id}`, appUpdates);
  return response.data;
};

export const getAppUpdatesById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/app-updates/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAppUpdatesById = async (id: string) => {
  const response = await axios.delete(`/api/app-updates/${id}`);
  return response.data;
};
