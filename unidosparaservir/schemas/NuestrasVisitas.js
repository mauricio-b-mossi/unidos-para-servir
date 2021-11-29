export default {
  name: "nuestrasVisitas",
  title: "Nuestras Visitas",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Descripción",
      type: "text",
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
