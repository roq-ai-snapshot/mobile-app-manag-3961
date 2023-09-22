const mapping: Record<string, string> = {
  apps: 'app',
  'app-feedbacks': 'app_feedback',
  'app-settings': 'app_settings',
  'app-updates': 'app_updates',
  companies: 'company',
  'company-departments': 'company_departments',
  projects: 'project',
  tasks: 'task',
  teams: 'team',
  users: 'user',
  'user-permissions': 'user_permissions',
  'user-roles': 'user_roles',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
