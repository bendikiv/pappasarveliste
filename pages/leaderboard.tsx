import { Flex } from '@chakra-ui/layout';
import Leaderboard from '../components/Leaderboard';
import PageLayout from '../components/pageLayout';
import { useEvents } from '../hooks/useEvents';
import { useUsers } from '../hooks/useUsers';

export default function LeaderboardPage() {
  return (
    <PageLayout loggedIn={true}>
      <Flex justifyContent="center" width="100%">
        <Leaderboard />
      </Flex>
    </PageLayout>
  );
}
