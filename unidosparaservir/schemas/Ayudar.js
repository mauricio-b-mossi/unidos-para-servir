export default {
  name: "visitas",
  title: "Visitas",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "body",
      title: "Texto",
      type: "blockContent",
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
