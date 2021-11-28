import { Flex } from '@chakra-ui/layout';
import Menu from './Navigation/Menu';
import { NewEventButton } from './NewEvent/NewEventButton';
import Title from './Title';

interface PageLayoutProps {
  loggedIn: boolean;
  children: React.ReactNode;
}

export default function PageLayout({ children, loggedIn }: PageLayoutProps) {
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
