import {
  Box,
  Card,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import TechStackIcon from 'icons/TechStakIcon';
import Link from 'next/link';

type TechStackType = 'Typescript' | 'ReactJS';

type ProjectType = {
  id: string;
  title: string;
  description: string;
  sourceCode: string;
  sourceDemo: string;
  techStacks: TechStackType[];
};

const Project = () => {
  const isMediaSm = useMediaQuery('(min-width: 48em)');
  // already infer, consider to delete the type
  const projects: ProjectType[] = [
    {
      id: '1',
      title: ' Duplicate React Query',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      sourceCode: 'https://github.com/AndriP8/rewrite-formik',
      sourceDemo: 'https://andripurnomo.vercel.app/',
      techStacks: ['Typescript', 'ReactJS'],
    },
    {
      id: '2',
      title: ' Duplicate React Query',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      sourceCode: 'https://github.com/AndriP8/rewrite-formik',
      sourceDemo: 'https://andripurnomo.vercel.app/',
      techStacks: ['Typescript'],
    },
  ];
  return (
    <Box color="black">
      <Heading as="h2" fontWeight="light" marginBottom={3}>
        Latest Project
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {projects.map((project) => (
          <Card
            key={project.id}
            padding={15}
            backgroundColor="gray.200"
            borderRadius={8}
            border="1px solid black"
            color="inherit"
          >
            <Flex direction="column" gap={3}>
              <Heading as="h3" fontWeight="semibold" fontSize={24}>
                {project.title}
              </Heading>
              <Text>{project.description}</Text>
              <Flex gap={3}>
                <Text
                  as={Link}
                  href={project.sourceCode}
                  color="black"
                  fontWeight="bold"
                  target="_blank"
                  rel="noopener"
                  textDecor="underline"
                >
                  Source Code
                </Text>
                <Text
                  as={Link}
                  href={project.sourceDemo}
                  color="black"
                  fontWeight="bold"
                  target="_blank"
                  rel="noopener"
                  textDecor="underline"
                >
                  Live demo
                </Text>
              </Flex>
              <Box>
                <Text>Tech stack:</Text>
                <Flex gap={3} marginTop={3}>
                  {project.techStacks.map((stack) => (
                    <TechStackIcon key={stack} stack={stack} />
                  ))}
                </Flex>
              </Box>
            </Flex>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Project;
