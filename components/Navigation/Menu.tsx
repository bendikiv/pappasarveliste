import { Flex, UnorderedList } from '@chakra-ui/layout';
import MenuItem from './MenuItem';

interface MenuProps {
  loggedIn: boolean;
}

export default function Menu({ loggedIn }: MenuProps) {
  return (
    <Flex justifyContent="center" m="0px 0 20px 0">
      <nav>
        <UnorderedList styleType="none" p="0" w="100%">
          <Flex flexDirection="row">
            {loggedIn && (
              <>
                <MenuItem name="Forside" to="/" />
                <MenuItem name="Leaderboard" to="leaderboard" />
                <MenuItem name="Logg ut" to="/logginn" />
              </>
            )}
            {!loggedIn && <MenuItem name="Logg inn" to="/" />}
          </Flex>
        </UnorderedList>
      </nav>
    </Flex>
  );
}
