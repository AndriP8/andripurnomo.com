import { Box, Card, Flex, SimpleGrid, Text, Title } from '@mantine/core';
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
    <Box>
      <Title order={2} weight={'normal'} mb={10}>
        Latest Project
      </Title>
      <SimpleGrid cols={2} spacing={24}>
        {projects.map((project) => (
          <Card
            key={project.id}
            p={15}
            bg="gray"
            radius={8}
            sx={{ borderColor: 'black', border: '1px solid' }}
          >
            <Flex direction={'column'} gap={10}>
              <Title order={3} weight={'bold'}>
                {project.title}
              </Title>
              <Text>{project.description}</Text>
              <Flex gap={10}>
                <Text
                  component={Link}
                  href={project.sourceCode}
                  color="black"
                  weight={'bold'}
                  target="_blank"
                  rel="noopener"
                  underline
                >
                  Source Code
                </Text>
                <Text
                  component={Link}
                  href={project.sourceDemo}
                  color="black"
                  weight={'bold'}
                  target="_blank"
                  rel="noopener"
                  underline
                >
                  Live demo
                </Text>
              </Flex>
              <Box>
                <Text>Tech stack:</Text>
                <Flex gap={10} mt={10}>
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
