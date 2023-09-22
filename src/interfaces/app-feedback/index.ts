import { GetQueryInterface } from 'interfaces';

export interface AppFeedbackInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AppFeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
}
