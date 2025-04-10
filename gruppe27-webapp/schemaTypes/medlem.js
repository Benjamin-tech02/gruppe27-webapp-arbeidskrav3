export default {
    name: 'medlem',
    title: 'Medlem',
    type: 'document',
    fields: [
      { name: 'navn', title: 'Navn', type: 'string' },
      { name: 'epost', title: 'E-post', type: 'string' },
      { name: 'bilde', title: 'Bilde', type: 'image' },
      { name: 'bio', title: 'Biografi', type: 'text' },
      {
        name: 'interesser',
        title: 'Interesser',
        type: 'array',
        of: [{ type: 'string' }]
      },
      {
        name: 'arbeidslogg',
        title: 'Arbeidslogg',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'dato', title: 'Dato', type: 'datetime' },
              { name: 'beskrivelse', title: 'Beskrivelse', type: 'string' },
              { name: 'timer', title: 'Timer', type: 'number' },
            ]
          }
        ]
      }
    ]
  };
  