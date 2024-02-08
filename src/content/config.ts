import { z, defineCollection, reference } from 'astro:content'

const postCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    blurb: z.string(),
    date: z.date(),
    category: reference('categories'),
    author: reference('authors'),
    tags: z.array(z.string()),
    image: z.object({
      src: image(),
      alt: z.string()
    })
  })
})

const authorCollection = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    id: z.string(),
    name: z.string(),
    bio: z.string(),
    image: z.object({
      src: image(),
      alt: z.string()
    })
  })
})

const categoryCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    text: z.string(),
    description: z.string()
  })
})

export const collections = {
  'posts': postCollection,
  'authors': authorCollection,
  'categories': categoryCollection
}
