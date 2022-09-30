import { useState } from "react";
import { useForm } from "react-hook-form";
import LoginDialog from "../components/client/login/LoginDialog";
import BasePage from "../components/pageComponents/basePage";
import useAuthenticate from "../hooks/useAuthenticate";
import "../styles/Home.module.css";
import { UserContext } from "./contexts/userContext";

function MyApp({ Component, pageProps }) {
  const [dialogOpen, setDialogOpen] = useState(true);
  const methods = useForm();
  // const values = useAuthenticate();
  const onSubmit = async (data) => {
    try {
      const response = await AuthenticateService.login(data);
      console.log("response", response);
      onLogin && (await onLogin(response.access_token, { ...response }));
      if (response.type == "client") {
        router.push("/");
      }
      setDialogOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <UserContext.Provider value={"Hey"}>
      <BasePage>
        <Component {...pageProps} />
        <LoginDialog
          fullScreen={false}
          open={dialogOpen}
          onSubmit={onSubmit}
          onClose={handleGoBack}
        />
      </BasePage>
    </UserContext.Provider>
  );
}

export default MyApp;
