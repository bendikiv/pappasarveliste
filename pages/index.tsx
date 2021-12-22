import Head from 'next/head';
import { GetStaticProps } from 'next';
import PageLayout from '../components/pageLayout';
import { Hendelse, HendelseComponent } from '../components/Hendelse';
import { useEvents } from '../hooks/useEvents';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../firebase/clientApp';

interface HomeProps {
  userName: string;
}

export default function Home({ userName }: HomeProps) {
  const { events } = useEvents();

  const [events2, eventsLoading, eventsError] = useCollection(
    firebase.firestore().collection('users'),
    {}
  );

  if (!eventsLoading && events2) {
    events2.docs.map((doc) => console.log(doc.data()));
  }
  return (
    <>
      <Head>
        <title>Pappas Arveliste</title>
      </Head>
      <PageLayout loggedIn={true}>
        {events.map((h: Hendelse, i: number) => (
          <HendelseComponent key={i} hendelse={h} />
        ))}
      </PageLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = null; //getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
