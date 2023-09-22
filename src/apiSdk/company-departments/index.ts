import axios from 'axios';
import queryString from 'query-string';
import { CompanyDepartmentsInterface, CompanyDepartmentsGetQueryInterface } from 'interfaces/company-departments';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCompanyDepartments = async (
  query?: CompanyDepartmentsGetQueryInterface,
): Promise<PaginatedInterface<CompanyDepartmentsInterface>> => {
  const response = await axios.get('/api/company-departments', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCompanyDepartments = async (companyDepartments: CompanyDepartmentsInterface) => {
  const response = await axios.post('/api/company-departments', companyDepartments);
  return response.data;
};

export const updateCompanyDepartmentsById = async (id: string, companyDepartments: CompanyDepartmentsInterface) => {
  const response = await axios.put(`/api/company-departments/${id}`, companyDepartments);
  return response.data;
};

export const getCompanyDepartmentsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/company-departments/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCompanyDepartmentsById = async (id: string) => {
  const response = await axios.delete(`/api/company-departments/${id}`);
  return response.data;
};
