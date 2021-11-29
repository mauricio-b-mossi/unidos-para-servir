export default {
  name: "misionYvision",
  title: "Misión Y Visión",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "quote",
      title: "Quote",
      type: "string",
    },
    {
      name: "body",
      title: "Texto",
      type: "text",
    },
    {
      name: "mainImage",
      title: "Imagen",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
};
