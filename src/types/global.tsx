// src/context/types.ts
export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  token: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
}

export type TicketStatus = 'open' | 'closed' | 'in_progress';
export type TicketPriority = 'low' | 'medium' | 'high';

export interface Ticket {
  key: string;
  id: string;
  title: string;
  description?: string;
  status: React.ReactNode;
  priority?: React.ReactNode;
  createdAt?: string;
  updatedAt?: string;
  createdByEmail?: string;
}
export interface TicketContextType {
  tickets: Ticket[];
  addTicket: (
    payload: Omit<Ticket, 'id' | 'createdAt' | 'updatedAt' | 'createdByEmail'>
  ) => Promise<Ticket | null>;
  updateTicket: (
    id: string,
    payload: Partial<Ticket>
  ) => Promise<Ticket | null>;
  deleteTicket: (id: string) => Promise<boolean>;
  reload: () => void;
  saving: boolean;
}
