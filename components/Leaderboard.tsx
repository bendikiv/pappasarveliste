import { Box, Flex } from '@chakra-ui/layout';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

export default function Leaderboard() {
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
          <Tr>
            <Td>Bendik</Td>
            <Td>10</Td>
          </Tr>
          <Tr>
            <Td>Thea</Td>
            <Td>12</Td>
          </Tr>
          <Tr>
            <Td>Herman</Td>
            <Td>5</Td>
          </Tr>
          <Tr>
            <Td>Katrine</Td>
            <Td>99</Td>
          </Tr>
          <Tr>
            <Td>Johanne</Td>
            <Td>23</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}
