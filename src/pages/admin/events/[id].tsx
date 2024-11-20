import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchEventById } from '../../../utils/api';
import { Event } from '../../../../../api/src/models/models';

const EventDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState<Event | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const loadEvent = async () => {
        try {
          const data = await fetchEventById(String(id));
          setEvent(data);
        } catch {
          setError('Failed to fetch event details');
        }
      };
      loadEvent();
    }
  }, [id]);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!event) return <p>Loading...</p>;

  return (
    <div>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <p>Category: {event.category}</p>
      <p>Price: ${event.price.toFixed(2)}</p>
      <p>Stock: {event.stock}</p>
    </div>
  );
};

export default EventDetailsPage;
