export class NetworkException extends Error {
  response: any;

  constructor(message?: string, response?: any) {
    super(message || 'Serviço indisponível');
    this.name = 'NetworkException';
    this.response = response;
  }
}

export class InternalServerErrorException extends Error {
  response: any;

  constructor(message?: string, response?: any) {
    super(message || 'Erro interno do servidor');
    this.name = 'InternalServerErrorException';
    this.response = response;
  }
}

export class NotFoundException extends Error {
  response: any;

  constructor(message?: string, response?: any) {
    super(message || 'Recurso não encontrado');
    this.name = 'NotFoundException';
    this.response = response;
  }
}

export class ConflictException extends Error {
  response: any;

  constructor(message?: string, response?: any) {
    super(
      message ||
        'A ação solicitada não pôde ser concluída devido a um conflito com o estado atual dos dados. Por favor, verifique as informações inseridas e tente novamente.',
    );
    this.name = 'ConflictException';
    this.response = response;
  }
}
