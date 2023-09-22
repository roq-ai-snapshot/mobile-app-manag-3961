import axios from 'axios';
import queryString from 'query-string';
import { UserRolesInterface, UserRolesGetQueryInterface } from 'interfaces/user-roles';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserRoles = async (
  query?: UserRolesGetQueryInterface,
): Promise<PaginatedInterface<UserRolesInterface>> => {
  const response = await axios.get('/api/user-roles', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createUserRoles = async (userRoles: UserRolesInterface) => {
  const response = await axios.post('/api/user-roles', userRoles);
  return response.data;
};

export const updateUserRolesById = async (id: string, userRoles: UserRolesInterface) => {
  const response = await axios.put(`/api/user-roles/${id}`, userRoles);
  return response.data;
};

export const getUserRolesById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/user-roles/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteUserRolesById = async (id: string) => {
  const response = await axios.delete(`/api/user-roles/${id}`);
  return response.data;
};
