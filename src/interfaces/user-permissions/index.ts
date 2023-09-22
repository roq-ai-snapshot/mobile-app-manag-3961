import { GetQueryInterface } from 'interfaces';

export interface UserPermissionsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface UserPermissionsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
