export default {
  name: "ayudar",
  title: "Ayudar",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "dona",
      title: "+ Dona Aqui",
      type: "text",
    },
    {
      title: "+ Dona Aqui Link",
      description: "Insertar Link de GoFundme",
      name: "linkdona",
      type: "url",
    },
    {
      name: "parte",
      title: "+ Se Parte",
      type: "text",
    },
    {
      title: "+ Se Parte Link",
      description: "Insertar Link de Google Form",
      name: "linkparte",
      type: "url",
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
