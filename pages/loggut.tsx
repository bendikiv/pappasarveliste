import Head from 'next/head';
import { Text } from '@chakra-ui/layout';
import PageLayout from '../components/pageLayout';

export default function LoggUt() {
  return (
    <>
      <Head>
        <title>Pappas Arveliste</title>
      </Head>
      <PageLayout loggedIn={false}>
        <Text>Du er logget ut</Text>
      </PageLayout>
    </>
  );
}
