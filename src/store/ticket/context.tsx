import { createContext, useContext } from 'react';
import type { TicketContextType } from '../../types/global';

export const TicketContext = createContext<TicketContextType | undefined>(
  undefined
);

export const useTickets = (): TicketContextType => {
  const ctx = useContext(TicketContext);
  if (!ctx) throw new Error('useTickets must be used within TicketProvider');
  return ctx;
};
