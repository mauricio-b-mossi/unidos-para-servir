export default {
  name: "fondos",
  title: "Donativos e impactos",
  type: "document",
  fields: [
    {
      name: "amount",
      title: "Monto",
      type: "number",
    },
    {
      name: "tipo",
        title: "Tipo de monto",
      description: "Si es dinero marcar el boton de dinero, si se trata de un numero marcan numero.",
      type: "string",
      options: {
        list: [
          { title: "Dinero", value: "true" },
          { title: "Numero", value: "false" },
        ],
        layout: "radio",
      },
    },
    {
      name: "description",
      title: "Descripción",
      type: "text",
      validation: (Rule) => Rule.required().min(5).max(200),
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
      title: "amount",
      media: "image",
    },
  },
};
