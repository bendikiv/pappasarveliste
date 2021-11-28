import { useState } from 'react';
import { users as initUsers } from '../data/users';

export const useUsers = () => {
  const [users, setUsers] = useState(initUsers);

  return { users };
};
