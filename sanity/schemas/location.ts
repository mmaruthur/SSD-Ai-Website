import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Location Name',
      type: 'string',
      description: 'E.g., "Scottsdale Office"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Street Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      initialValue: 'AZ',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'zipCode',
      title: 'Zip Code',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fax',
      title: 'Fax Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'hours',
      title: 'Hours of Operation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', type: 'string', title: 'Day' },
            { name: 'hours', type: 'string', title: 'Hours' },
          ],
        },
      ],
      description: 'E.g., Monday: 8:00 AM - 5:00 PM',
    }),
    defineField({
      name: 'coordinates',
      title: 'Map Coordinates',
      type: 'object',
      fields: [
        { name: 'lat', type: 'number', title: 'Latitude' },
        { name: 'lng', type: 'number', title: 'Longitude' },
      ],
      description: 'For Google Maps integration',
    }),
    defineField({
      name: 'image',
      title: 'Location Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Photo of the office exterior or interior',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Brief description of this location',
    }),
    defineField({
      name: 'parking',
      title: 'Parking Information',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'accessibility',
      title: 'Accessibility Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'E.g., Wheelchair accessible, Elevator available',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Show on website?',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'city',
      media: 'image',
    },
  },
});
