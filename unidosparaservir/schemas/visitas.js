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
      name: "description",
      title: "Descripcion Breve",
      type: "text",
      validation: (Rule) => Rule.required().min(5).max(75),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Imagen",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      title: "Fecha",
      type: "date",
    },
    {
      name: "body",
      title: "Texto",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
};
