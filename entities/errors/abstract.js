export default class ErrorAbstract extends Error{
  constructor(msg, code){
    super(msg, code);
  }

  static code = "0000";
  static message = "";

  static throwError(append="", log=true){
    const ErrorClass = this;
    const error = new ErrorClass(`${ErrorClass.message}\n${append}`);
    log && console.log(error);
    throw error;
  }

}
