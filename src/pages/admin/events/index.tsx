import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';  // Import Layout
import { fetchEvents } from '../../../utils/api';
import { Event } from '../../../../../api/src/models/models';
import EventCard from '../components/EventCard';

const EventListPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (err) {
        setError('Failed to fetch events');
      }
    };
    loadEvents();
  }, []);

  return (
    <Layout>  {/* Wrap page content with Layout */}
      <h1>Events</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {events.map((event) => (
          <EventCard key={event.name} event={event} />
        ))}
      </div>
    </Layout>
  );
};

export default EventListPage;



