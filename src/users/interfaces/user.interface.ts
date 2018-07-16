export interface User {
  id: number;
  email: string;
  password: string;
  roleId: number;
  organizationId: number | null;
}