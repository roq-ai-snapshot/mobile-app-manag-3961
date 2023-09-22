import { TaskInterface } from 'interfaces/task';
import { UserInterface } from 'interfaces/user';
import { TeamInterface } from 'interfaces/team';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  user_id: string;
  team_id: string;
  start_date: any;
  end_date?: any;
  status?: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  user?: UserInterface;
  team?: TeamInterface;
  _count?: {
    task?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  user_id?: string;
  team_id?: string;
  status?: string;
}
