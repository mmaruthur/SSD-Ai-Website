import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'southern-skies-dermatology',
  title: 'Southern Skies Dermatology CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio', // This means your CMS will be at: http://localhost:3000/studio

  plugins: [
    structureTool(), // This gives you the content editing interface
    visionTool(), // This lets you test queries
  ],

  schema: {
    types: schemaTypes, // Your content types will be defined here
  },
});
