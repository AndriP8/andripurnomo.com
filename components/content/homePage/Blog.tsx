import { Box, Card, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  const blogs = [
    {
      id: '1',
      title: 'React Query is over fetching',
      banner:
        'https://images.unsplash.com/photo-1693333494237-f16ec989d14d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      createdAt: '9 Jul, 2023',
      timeToRead: 10,
    },
    {
      id: '2',
      title: 'React Query is over fetching',
      banner:
        'https://images.unsplash.com/photo-1693333494237-f16ec989d14d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      createdAt: '9 Jul, 2023',
      timeToRead: 10,
    },
    {
      id: '3',
      title: 'React Query is over fetching',
      banner:
        'https://images.unsplash.com/photo-1693333494237-f16ec989d14d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      createdAt: '9 Jul, 2023',
      timeToRead: 10,
    },
  ];
  return (
    <Box color="black">
      <Heading as="h2" fontWeight="light" marginBottom={5}>
        Latest Blogs
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {blogs.map((blog) => (
          <Link key={blog.id} href={'#'} className="wrapper-blog-link">
            <Card backgroundColor="gray.200" boxShadow="none" padding={2}>
              <Image
                src={blog.banner}
                alt=""
                sizes="100vw"
                style={{
                  width: '100%',
                  height: '450px',
                  objectFit: 'cover',
                  borderRadius: 6,
                }}
                width={500}
                height={300}
              />
              <SimpleGrid spacing={1} marginBlock={3}>
                <Text fontSize={18} fontWeight="semibold" color="#9BABB8">
                  {blog.createdAt} - {blog.timeToRead} min read
                </Text>
                <Text
                  fontSize={24}
                  fontWeight="semibold"
                  color="black"
                  className="title-blog"
                >
                  {blog.title}
                </Text>
              </SimpleGrid>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Blog;
