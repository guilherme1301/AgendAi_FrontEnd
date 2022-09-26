import { ThemeProvider } from "@emotion/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BasePage from "../components/pageComponents/basePage";
import "../styles/Home.module.css";
import { SnackbarProvider } from "notistack";
import Theme from "../utils/theme";
import useAuthenticate from "../hooks/useAuthenticate";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const { login, getUser} = useAuthenticate();
  const [userData, setUserData ] = useState();

  const getUserData = async () => { 
    const user = await getUser()
    setUserData(user);
  }
  useEffect(()=>{getUserData()}, [])

  useEffect(() => {
    if (router.route == "/login") setShowLogin(true);
    else setShowLogin(false);
  }, [Component, pageProps]);

  return (
    // <ThemeProvider theme={Theme}>
        <SnackbarProvider maxSnack={5}>
          {(!!showLogin && <Component {...pageProps} onLogin={login} userData={userData} />) || (
            <BasePage>
              <Component {...pageProps} userData={userData}/>
            </BasePage>
          )}
        </SnackbarProvider>
    // </ThemeProvider>
  );
}

export default MyApp;
