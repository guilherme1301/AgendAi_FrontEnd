class Enviroment {

  static get() {
    const HOST = window.location.hostname;
    if( HOST.includes('localhost') ) {
      return "http://localhost:3000";
    }else{
      return process.env.REACT_APP_API_URL
    }

    throw new Error("HOST inválido!");
  }

}


export default Enviroment;
