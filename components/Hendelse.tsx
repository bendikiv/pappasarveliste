import { Box, Flex } from '@chakra-ui/layout';

interface HendelseProps {
  hendelse: Hendelse;
}

export const HendelseComponent = ({ hendelse }: HendelseProps) => {
  const poengPrefix = hendelse.poeng > 0 ? `+` : ``;
  return (
    <Flex
      backgroundColor="#A0D2DB" //gul #F4F1BB grønn #E6EBE0
      // border="1px solid #000"
      p="10px"
      borderRadius="10px"
      m="10px 0"
      justifyContent="center"
    >
      <Flex width="100%" flexDirection="row">
        <Box width="50%">
          <Box fontWeight="700">{hendelse.navn}</Box>
          <Box fontSize="12px">{hendelse.dato}</Box>
        </Box>
        <Box width="50%">
          <Box>{hendelse.beskrivelse}</Box>
          <Box>
            {poengPrefix}
            {hendelse.poeng}
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export interface Hendelse {
  navn: string;
  beskrivelse: string;
  poeng: number;
  dato: string;
}
