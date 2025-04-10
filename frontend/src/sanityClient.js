import { createClient } from '@sanity/client';

export default createClient({
  projectId: 'i9bjrgrl',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});



