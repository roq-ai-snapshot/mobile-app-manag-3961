import { GetQueryInterface } from 'interfaces';

export interface UserRolesInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface UserRolesGetQueryInterface extends GetQueryInterface {
  id?: string;
}
