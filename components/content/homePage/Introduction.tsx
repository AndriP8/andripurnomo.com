import { Box, Heading, Text } from '@chakra-ui/react';

const Introduction = () => {
  return (
    <Box color="black">
      <Heading as="h1" fontSize={32} fontWeight="normal" lineHeight={2}>
        Hi, Im Andri Purnomo
      </Heading>
      <Text>
        Someone who is very interested in frontend development since late 2020.
        I am currently working as Frontend Engineer, my main tech stack is React
        and Typescript, but I also learned other things like Chakra UI, Mantine
        as a UI library, Xstate as a Finite state machine, and Advanced React
        pattern. Now I am curious about how to maintain an extensive website
        because for that I am interested learn about performance
      </Text>
    </Box>
  );
};

export default Introduction;
