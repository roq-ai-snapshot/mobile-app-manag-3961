import { GetQueryInterface } from 'interfaces';

export interface CompanyDepartmentsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CompanyDepartmentsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
