import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Flex } from '@chakra-ui/layout';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useEvents } from '../../hooks/useEvents';
import { userName } from '../../pages/_app';
import { Hendelse } from '../Hendelse';

export const NewEventForm = () => {
  const { events, addNewEvent } = useEvents();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const today = new Date().toLocaleDateString();
    const newEvent: Hendelse = {
      navn: userName,
      beskrivelse: data.beskrivelse,
      poeng: data.poeng,
      dato: today,
    };
    addNewEvent(newEvent);
  };

  console.log(watch('beskrivelse')); // watch input value by passing the name of it

  return (
    <Box>
      <Flex justifyContent="center" flexDirection="column">
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="beskrivelse" isRequired>
              <FormLabel>Beskrivelse av hendelse</FormLabel>
              <Input {...register('beskrivelse', { required: true })} />
            </FormControl>
            <FormControl id="poeng" isRequired>
              <FormLabel>Antall poeng</FormLabel>
              <Input {...register('poeng', { required: true })} />
            </FormControl>
            <Button mt={4} colorScheme="teal" type="submit">
              Registrer
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};
