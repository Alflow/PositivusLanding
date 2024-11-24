export const formSection = {
  header: {
    title: "¡Contáctanos!",
    description:
      "Saber tus necesidades y propuestas es el punto de partida para hacer cosas increíbles.",
  },
  imageUrl: '/images/contactUs/paperPlaneImg.svg',
  options: [
    {
      id: "say-hi",
      label: "Say Hi",
      type: "radio",
      name: "purpose",
      value: "say-hi",
      defaultChecked: true,
    },
    {
      id: "get-quote",
      label: "Get a Quote",
      type: "radio",
      name: "purpose",
      value: "get-quote",
    },
  ],
  fields: [
    {
      id: "name",
      label: "Name",
      type: "text",
      name: "name",
      placeholder: "Name",
      required: true,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Email",
      required: true,
    },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      name: "message",
      placeholder: "Message",
      required: true,
    },
  ],
  button: {
    text: "Send Message",
    type: "submit" as const,
  },
};
