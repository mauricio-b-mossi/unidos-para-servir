export default {
  name: "nuestrosPatrocinadores",
  title: "Nuestros Patrocinadores",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Descripción ",
      type: "text",
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
