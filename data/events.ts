import { Hendelse } from '../components/Hendelse';

const initHendelser: Hendelse[] = [
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
    navn: 'Katrine',
    beskrivelse: 'Får pappa i form',
    poeng: 20,
    dato: 'Ofte',
  },
  {
    navn: 'Johanne',
    beskrivelse: 'Tok med til Bergen',
    poeng: 5,
    dato: '10. november 2021',
  },
];

let hendelser: Hendelse[] = initHendelser;

export const AddHendelse = (hendelse: Hendelse) => {
  hendelser = [...hendelser, hendelse];
};

export const getHendelser = () => hendelser;
