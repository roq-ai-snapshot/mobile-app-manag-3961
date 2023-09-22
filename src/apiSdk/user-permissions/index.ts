import axios from 'axios';
import queryString from 'query-string';
import { UserPermissionsInterface, UserPermissionsGetQueryInterface } from 'interfaces/user-permissions';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserPermissions = async (
  query?: UserPermissionsGetQueryInterface,
): Promise<PaginatedInterface<UserPermissionsInterface>> => {
  const response = await axios.get('/api/user-permissions', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createUserPermissions = async (userPermissions: UserPermissionsInterface) => {
  const response = await axios.post('/api/user-permissions', userPermissions);
  return response.data;
};

export const updateUserPermissionsById = async (id: string, userPermissions: UserPermissionsInterface) => {
  const response = await axios.put(`/api/user-permissions/${id}`, userPermissions);
  return response.data;
};

export const getUserPermissionsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/user-permissions/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteUserPermissionsById = async (id: string) => {
  const response = await axios.delete(`/api/user-permissions/${id}`);
  return response.data;
};
