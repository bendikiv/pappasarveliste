import { Heading } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/react';

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <Flex justifyContent="center" m="0 0 10px 0">
      <Heading as="h1" size="2xl">
        {title}
      </Heading>
    </Flex>
  );
}
