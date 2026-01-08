import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'speakingTopic',
  title: 'Speaking Topic',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Topic Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., "45 minutes" or "2 hours"',
    }),
    defineField({
      name: 'audience',
      title: 'Target Audience',
      type: 'string',
      description: 'e.g., "Healthcare Professionals" or "Family Caregivers"',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'duration',
    },
  },
})

