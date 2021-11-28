export default {
  name: "quienesSomos",
  title: "¿Quienes somos?",
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
      title: "Mapa",
      description: "Insertar Link de Google Maps Embed.",
      name: "link",
      type: "url",
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
