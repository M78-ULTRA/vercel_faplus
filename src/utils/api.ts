import { Event, Coupons } from '../../../api/src/models/models';

// Fetch all events
export const fetchEvents = async (): Promise<Event[]> => {
  const res = await fetch('/api/events');
  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }
  return res.json();
};

// Fetch event by ID
export const fetchEventById = async (id: string): Promise<Event | null> => {
  const res = await fetch(`/api/events/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch event');
  }
  return res.json();
};

// Create a new event
export const createEvent = async (data: Event): Promise<Event> => {
  const res = await fetch('/api/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error('Failed to create event');
  }
  return res.json();
};

// Fetch all coupons
export const fetchCoupons = async (): Promise<Coupons[]> => {
  const res = await fetch('/api/coupons');
  if (!res.ok) {
    throw new Error('Failed to fetch coupons');
  }
  return res.json();
};

// Create a new coupon
export const createCoupon = async (data: Coupons): Promise<Coupons> => {
  const res = await fetch('/api/coupons', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error('Failed to create coupon');
  }
  return res.json();
};



  