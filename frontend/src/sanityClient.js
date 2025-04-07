import { createClient } from '@sanity/client';

export default createClient({
  projectId: 'i9bjrgrl', // ← sett din her
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});



