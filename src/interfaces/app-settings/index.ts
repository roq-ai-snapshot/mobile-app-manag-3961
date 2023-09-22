import { GetQueryInterface } from 'interfaces';

export interface AppSettingsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AppSettingsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
