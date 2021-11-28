import { Hendelse } from '../components/Hendelse';

export const calculatePointsForUser = (
  userName: string,
  events: Hendelse[]
) => {
  let sum = 0;
  events.forEach((e) => {
    if (userName === e.navn) sum += e.poeng;
  });
  return sum;
};
