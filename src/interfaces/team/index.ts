import { ProjectInterface } from 'interfaces/project';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface TeamInterface {
  id?: string;
  name: string;
  user_id: string;
  company_id: string;
  status?: string;
  created_at?: any;
  updated_at?: any;
  project?: ProjectInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    project?: number;
  };
}

export interface TeamGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  user_id?: string;
  company_id?: string;
  status?: string;
}
