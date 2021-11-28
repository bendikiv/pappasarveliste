import { useState } from 'react';
import { Hendelse } from '../components/Hendelse';
import { AddHendelse, getHendelser } from '../data/events';

export const useEvents = () => {
  const [events, setEvents] = useState<Hendelse[]>(getHendelser());

  const addNewEvent = (event: Hendelse) => {
    AddHendelse(event);
    setEvents(getHendelser());
  };

  return { events, addNewEvent };
};
