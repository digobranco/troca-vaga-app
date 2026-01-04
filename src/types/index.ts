export interface Tenant {
    id: string;
    name: string;
    slug: string; // url amigável (ex: pilates-studio-x)
    avatarUrl?: string;
    description?: string;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    role: 'super_admin' | 'company_admin' | 'professor' | 'student';
    avatarUrl?: string;
  }
  