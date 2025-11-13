import { useEffect, useState } from 'react';
import { useAuth } from '../auth/context';
import type { Ticket } from '../../types/global';
import { TicketContext } from './context';

export const KEY = 'ticketflow_tickets_v1';

interface Props {
  children: React.ReactNode;
}

export const TicketProvider: React.FC<Props> = ({ children }) => {
  const { user } = useAuth();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [saving, setSaving] = useState(false);

  // Load on mount
  useEffect(() => {
    reload();
  }, []);

  const persist = (next: Ticket[]) => {
    localStorage.setItem(KEY, JSON.stringify(next));
    setTickets(next);
  };

  const reload = () => {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      try {
        setTickets(JSON.parse(raw));
      } catch {
        setTickets([]);
      }
    } else {
      setTickets([]);
    }
  };

  const ensureAuth = () => {
    if (!user) throw new Error('Not authenticated');
  };

  const simulateDelay = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

  const addTicket = async (
    payload: Omit<Ticket, 'id' | 'createdAt' | 'updatedAt' | 'createdByEmail'>
  ): Promise<Ticket | null> => {
    try {
      ensureAuth();
    } catch {
      return null;
    }

    setSaving(true);
    await simulateDelay();

    const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    const now = new Date().toISOString();
    const newTicket: Ticket = {
      key: id,
      id,
      title: payload.title,
      description: payload.description,
      priority: payload.priority ?? 'low',
      status: payload.status ?? 'open',
      createdAt: now,
      updatedAt: now,
      createdByEmail: user!.email,
    };

    const updated = [newTicket, ...tickets];
    persist(updated);
    setSaving(false);
    return newTicket;
  };

  const updateTicket = async (
    id: string,
    payload: Partial<Ticket>
  ): Promise<Ticket | null> => {
    try {
      ensureAuth();
    } catch {
      return null;
    }

    setSaving(true);
    await simulateDelay();

    const updated = tickets.map((t) =>
      t.id === id
        ? { ...t, ...payload, updatedAt: new Date().toISOString() }
        : t
    );
    persist(updated);

    setSaving(false);
    return updated.find((t) => t.id === id) ?? null;
  };

  const deleteTicket = async (id: string): Promise<boolean> => {
    try {
      ensureAuth();
    } catch {
      return false;
    }

    setSaving(true);
    await simulateDelay();

    const updated = tickets.filter((t) => t.id !== id);
    persist(updated);

    setSaving(false);
    return true;
  };

  return (
    <TicketContext.Provider
      value={{ tickets, addTicket, updateTicket, deleteTicket, reload, saving }}
    >
      {children}
    </TicketContext.Provider>
  );
};
