import { Box } from '@chakra-ui/layout';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useUsers } from '../hooks/useUsers';

export default function Leaderboard() {
  const { users } = useUsers();
  return (
    <Box width="100%">
      <Table>
        <Thead>
          <Tr>
            <Th>Navn</Th>
            <Th>Poeng</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((u, i) => {
            return (
              <Tr key={i}>
                <Td>{u.userName}</Td>
                <Td>{u.points}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
