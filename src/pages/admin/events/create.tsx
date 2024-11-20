import React from 'react';
import { createEvent } from '../../../utils/api';
import { Event } from '../../../../../api/src/models/models';
import EventForm from '../components/EventForm';

const CreateEventPage: React.FC = () => {
  const handleCreateEvent = async (event: Event) => {
    try {
      await createEvent(event);
      alert('Event created successfully!');
    } catch (error) {
      alert('Failed to create event');
    }
  };

  return (
    <div>
      <h1>Create Event</h1>
      <EventForm onSubmit={handleCreateEvent} />
    </div>
  );
};

export default CreateEventPage;
