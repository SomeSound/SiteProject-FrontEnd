import {
  NetworkException,
  InternalServerErrorException,
  NotFoundException,
} from '..';

describe('NetworkException', () => {
  it('should create a NetworkException instance with default message', () => {
    const error = new NetworkException();
    expect(error.message).toBe('Serviço indisponível');
    expect(error.name).toBe('NetworkException');
  });

  it('should create a NetworkException instance with custom message', () => {
    const errorMessage = 'Serviço indisponível temporariamente';
    const error = new NetworkException(errorMessage);
    expect(error.message).toBe(errorMessage);
    expect(error.name).toBe('NetworkException');
  });
});

describe('InternalServerErrorException', () => {
  it('should create an InternalServerErrorException instance with default message', () => {
    const error = new InternalServerErrorException();
    expect(error.message).toBe('Erro interno do servidor');
    expect(error.name).toBe('InternalServerErrorException');
  });

  it('should create an InternalServerErrorException instance with custom message', () => {
    const errorMessage = 'Ocorreu um erro interno no servidor';
    const error = new InternalServerErrorException(errorMessage);
    expect(error.message).toBe(errorMessage);
    expect(error.name).toBe('InternalServerErrorException');
  });
});

describe('NotFoundException', () => {
  it('should create a NotFoundException instance with default message', () => {
    const error = new NotFoundException();
    expect(error.message).toBe('Recurso não encontrado');
    expect(error.name).toBe('NotFoundException');
  });

  it('should create a NotFoundException instance with custom message', () => {
    const errorMessage = 'O recurso solicitado não foi encontrado';
    const error = new NotFoundException(errorMessage);
    expect(error.message).toBe(errorMessage);
    expect(error.name).toBe('NotFoundException');
  });
});
