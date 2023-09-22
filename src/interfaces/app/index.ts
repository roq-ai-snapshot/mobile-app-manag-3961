import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface AppInterface {
  id?: string;
  name: string;
  version: string;
  release_date: any;
  user_id: string;
  company_id: string;
  platform?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface AppGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  version?: string;
  user_id?: string;
  company_id?: string;
  platform?: string;
}
