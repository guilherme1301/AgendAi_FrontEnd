class Enviroment {

  static get() {
    var HOST = null;
    if (typeof window !== "undefined") {
      // Client-side-only code
      HOST = !!window && window?.location.hostname || null
    }
    if(!!HOST && HOST.includes('localhost') ) {
      return "https://agendai-api.herokuapp.com";
    }else{
      return process.env.REACT_APP_API_URL
    }

    throw new Error("HOST inválido!");
  }

}


export default Enviroment;
