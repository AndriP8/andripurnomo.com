import { collection, config, fields } from '@keystatic/core';
import { ComponentBlocks } from '@ui/components';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'AndriP8',
      name: 'andripurnomo.vercel.app',
    },
  },
  collections: {
    blogs: collection({
      label: 'Blogs',
      slugField: 'title',
      path: 'content/blogs/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            validation: {
              length: {
                min: 5,
              },
            },
          },
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          layouts: [
            [1, 1],
            [1, 1, 1],
            [1, 2, 1],
          ],
          componentBlocks: ComponentBlocks,
        }),
        cover: fields.object({
          resource: fields.image({
            label: 'Cover resource',
            validation: { isRequired: true },
            directory: 'public/images/blogs',
          }),
          owner: fields.text({
            label: 'Cover owner',
            validation: {
              length: {
                min: 1,
              },
            },
          }),
          ownerLink: fields.text({
            label: 'Cover owner link',
            validation: {
              length: {
                min: 10,
              },
            },
          }),
          alt: fields.text({
            label: 'Alternative text Image',
            validation: {
              length: {
                min: 5,
              },
            },
          }),
        }),
        timeToRead: fields.integer({
          label: 'Time to read',
          defaultValue: 1,
          validation: {
            isRequired: true,
            min: 1,
            max: 15,
          },
        }),
        createdAt: fields.date({
          label: 'Published Date',
          validation: {
            isRequired: true,
          },
        }),
        updatedAt: fields.date({ label: 'Updated Date' }),
      },
    }),
  },
});
