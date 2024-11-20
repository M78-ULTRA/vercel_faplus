import React from 'react';
import styles from './EventCard.module.css';
import { Event } from '../../../../models/models';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className={styles.card}>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>Category: {event.category}</p>
      <p>Price: ${event.price.toFixed(2)}</p>
      <p>Stock: {event.stock}</p>
      {event.image && <img src={event.image} alt={event.name} className={styles.image} />}
    </div>
  );
};

export default EventCard;



