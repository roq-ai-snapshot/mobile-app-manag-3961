interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Administrator', 'Developer', 'Team Member', 'End User'],
  tenantName: 'Company',
  applicationName: 'mobile app management administration',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage feedback', 'Read app updates', 'View company information', 'Read project status'],
  ownerAbilities: [
    'Manage company departments',
    'Manage user roles and permissions',
    'Manage application settings and updates',
    'Manage teams, projects, and tasks',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/8ddb7c27-18ce-480f-b1d9-d0cfccb055a0',
};
