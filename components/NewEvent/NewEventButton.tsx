import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import Link from 'next/link';

export const NewEventButton = () => {
  return (
    <Link href="/ny-hendelse">
      <a>
        <Flex justifyContent="center">
          <Button
            w="90%"
            size="lg"
            position="fixed"
            bottom="1rem"
            colorScheme="blue"
            maxWidth="1000px"
          >
            {'Registrer ny hendelse'}
          </Button>
        </Flex>
      </a>
    </Link>
  );
};
