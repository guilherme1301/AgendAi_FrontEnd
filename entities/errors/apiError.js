import AbstractError from './abstract';

export default class NotAllowedError extends AbstractError{
  static code = "API0002";
  static message = "API Erro!";
}
