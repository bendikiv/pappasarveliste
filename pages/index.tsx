import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';
import PageLayout from '../components/pageLayout';
import { Hendelse, HendelseComponent } from '../components/Hendelse';

interface HomeProps {
  userName: string;
}

const hendelser: Hendelse[] = [
  {
    navn: 'Bendik',
    beskrivelse: 'Ligner i utseende',
    poeng: 1,
    dato: '1. januar 2021',
  },
  {
    navn: 'Herman',
    beskrivelse: 'Tok med på tur',
    poeng: 2,
    dato: '1. januar 2021',
  },
  {
    navn: 'Thea',
    beskrivelse: 'Flink på jobb',
    poeng: 1,
    dato: '1. januar 2021',
  },
  {
    navn: 'Katrine',
    beskrivelse: 'Er amazing',
    poeng: 99,
    dato: 'Hele tiden',
  },
  {
    navn: 'Johanne',
    beskrivelse: 'Yndlingsbarn',
    poeng: 10,
    dato: '1. januar 2021',
  },
  {
    navn: 'Bendik',
    beskrivelse: 'Gjorde noe dumt',
    poeng: -1,
    dato: '1. januar 2021',
  },
  {
    navn: 'Thea',
    beskrivelse: 'Flink på jobb',
    poeng: 1,
    dato: '1. januar 2021',
  },
  {
    navn: 'Katrine',
    beskrivelse: 'Er amazing',
    poeng: 99,
    dato: 'Hele tiden',
  },
  {
    navn: 'Johanne',
    beskrivelse: 'Yndlingsbarn',
    poeng: 10,
    dato: '1. januar 2021',
  },
  {
    navn: 'Bendik',
    beskrivelse: 'Gjorde noe dumt',
    poeng: -1,
    dato: '1. januar 2021',
  },
];

export default function Home({ userName }: HomeProps) {
  return (
    <>
      <Head>
        <title>Pappas Arveliste</title>
      </Head>
      <PageLayout loggedIn={true}>
        {hendelser.map((h: Hendelse) => (
          <HendelseComponent key={h.beskrivelse} hendelse={h} />
        ))}
      </PageLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
