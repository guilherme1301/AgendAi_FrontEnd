import AbstractError from './abstract';

export default class NotAllowedError extends AbstractError{
  static code = "API0001";
  static message = "API Respondeu um erro!";
}
