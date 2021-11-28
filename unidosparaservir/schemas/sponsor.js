export default {
  name: "patrocinadores",
  title: "Patrocinador",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      title: "Link",
      name: "link",
      type: "url",
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
      title: "name",
      media: "image",
    },
  },
};
