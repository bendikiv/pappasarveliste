import Head from 'next/head';
import { GetStaticProps } from 'next';
import PageLayout from '../components/pageLayout';
import { Hendelse, HendelseComponent } from '../components/Hendelse';
import { useEvents } from '../hooks/useEvents';

interface HomeProps {
  userName: string;
}

export default function Home({ userName }: HomeProps) {
  const { events } = useEvents();
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
