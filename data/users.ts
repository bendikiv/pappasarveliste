import { Hendelse } from '../components/Hendelse';

interface DomainUser {
  userName: string;
  points: number;
}

interface User {
  userName: string;
  points: number;
  events: Hendelse[];
}

export const users: User[] = [
  {
    userName: 'Bendik',
    points: 10,
    events: [],
  },
  {
    userName: 'Thea',
    points: 12,
    events: [],
  },
  {
    userName: 'Herman',
    points: 15,
    events: [],
  },
  {
    userName: 'Johanne',
    points: 10,
    events: [],
  },
  {
    userName: 'Katrine',
    points: 99,
    events: [],
  },
];
