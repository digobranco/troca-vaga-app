export interface Student {
    id: string;
    name: string;
    email: string;
    phone: string;
    status: 'active' | 'inactive' | 'pending';
    plan: string;
    createdAt: string;
  }
  