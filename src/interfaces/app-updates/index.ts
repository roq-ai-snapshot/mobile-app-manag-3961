import { GetQueryInterface } from 'interfaces';

export interface AppUpdatesInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AppUpdatesGetQueryInterface extends GetQueryInterface {
  id?: string;
}
