import PageLayout from '../components/pageLayout';
import Head from 'next/head';
import { NewEventForm } from '../components/NewEvent/NewEventForm';
import { Heading } from '@chakra-ui/layout';

export default function NewEventPage() {
  return (
    <>
      <Head>
        <title>Pappas Arveliste</title>
      </Head>
      <PageLayout loggedIn={true}>
        <Heading size="md" m="10px 0">
          Registrer ny hendelse
        </Heading>
        <NewEventForm />
      </PageLayout>
    </>
  );
}
