import { Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import { userName } from '../pages/_app';
import Menu from './Navigation/Menu';
import { NewEventButton } from './NewEvent/NewEventButton';
import Title from './Title';

export default function PageLayout({ children, loggedIn }) {
  return (
    <Flex w="100%" justifyContent="center" p="0 0 100px 0" maxWidth="1000px">
      <Flex width="80%" flexDirection="column" justifyContent="center">
        <Title title="Pappas Arveliste" />
        <Menu loggedIn={loggedIn} />
        {children}
        {loggedIn && <NewEventButton />}
      </Flex>
    </Flex>
  );
}
