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
      label: "Saludar",
      type: "radio",
      name: "purpose",
      value: "say-hi",
      defaultChecked: true,
    },
    {
      id: "get-quote",
      label: "Pedir un presupuesto",
      type: "radio",
      name: "purpose",
      value: "get-quote",
    },
  ],
  fields: [
    {
      id: "name",
      label: "Nombre",
      type: "text",
      name: "name",
      placeholder: "Nombre",
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
      label: "Mensaje",
      type: "textarea",
      name: "message",
      placeholder: "Mensaje",
      required: true,
    },
  ],
  button: {
    text: "Enviar",
    type: "submit" as const,
  },
};
