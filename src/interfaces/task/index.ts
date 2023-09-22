import { UserInterface } from 'interfaces/user';
import { ProjectInterface } from 'interfaces/project';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  description?: string;
  user_id: string;
  project_id: string;
  start_date: any;
  end_date?: any;
  status?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  project?: ProjectInterface;
  _count?: {};
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  user_id?: string;
  project_id?: string;
  status?: string;
}
