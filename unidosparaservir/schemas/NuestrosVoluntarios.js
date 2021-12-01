export default {
  name: "nuestrosVoluntarios",
  title: "Nuestros Voluntarios",
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
    {
      title: "Voluntarios",
      name: "voluntarios",
      type: "array",
      of: [{ type: "string" }],
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
