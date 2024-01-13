type MessagesModel = {
  messageError: string;
  translatedMessage: string;
};

const messagesProvider: MessagesModel[] = [
  {
    messageError: 'MENSAGEM EM INGLES',
    translatedMessage: 'MENSAGEM TRADUZIDA',
  },
];

export const translateMessage = (message: string) => {
  const messageResponse = messagesProvider.filter(
    (msg) => msg.messageError === message,
  )[0];
  return messageResponse?.translatedMessage;
};
