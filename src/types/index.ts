export type Role = 'Employee' | 'Manager' | 'Admin';

export interface User {
  id: string;
  username: string;
  role: Role;
}

export interface Software {
  id: string;
  name: string;
  description: string;
  accessLevels: ('Read' | 'Write' | 'Admin')[];
}

export interface AccessRequest {
  id: string;
  userId: string;
  softwareId: string;
  accessType: 'Read' | 'Write' | 'Admin';
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  createdAt: string;
  username?: string;
  softwareName?: string;
}