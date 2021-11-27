import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Flex } from '@chakra-ui/layout';
import Link from 'next/link';

export const NewEventForm = () => {
  return (
    <Box>
      <Flex justifyContent="center" flexDirection="column">
        <Box>
          <FormControl id="beskrivelse" isRequired>
            <FormLabel>Beskrivelse av hendelse</FormLabel>
            <Input type="beskrivelse" />
          </FormControl>
          <FormControl id="poeng" isRequired>
            <FormLabel>Antall poeng</FormLabel>
            <Input type="poeng" />
          </FormControl>
          <Link href="/">
            <a>
              <Button mt={4} colorScheme="teal" type="submit">
                Registrer
              </Button>
            </a>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
