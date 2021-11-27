import { Button } from '@chakra-ui/button';
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Head from 'next/head';
import PageLayout from '../components/pageLayout';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Pappas Arveliste</title>
      </Head>
      <PageLayout loggedIn={false}>
        <Flex justifyContent="center" flexDirection="column" m="50px 0">
          <Box>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button mt={4} colorScheme="teal" type="submit">
              Logg inn
            </Button>
          </Box>
        </Flex>
      </PageLayout>
    </>
  );
};

export default LoginPage;
