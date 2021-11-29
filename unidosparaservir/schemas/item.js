export default {
  name: "item",
  title: "Items",
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
      validation: (Rule) => Rule.required().min(5).max(75),
    },
    {
      name: "order",
      title: "Order",
      description: "Number in which member appears in the website",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
