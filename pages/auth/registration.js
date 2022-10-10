import React, { useCallback, useContext, useEffect, useState } from "react";
import router from "next/router";
import { Controller, useForm } from "react-hook-form";
import AuthenticateService from "../../services/authenticate";
import RegistrationDialog from "../../components/client/login/registrationDialog";
import { Context } from "../contexts/userContext";
export default function Login(props) {
  const { login, isLogged, userData } = useContext(Context);
  const [dialogOpen, setDialogOpen] = useState(true);
  const [inputUserData, setInputUserData] = useState();

  const methods = useForm();

  const handleInputUpdate = useCallback(
    (data) => {
      debugger;
      setInputUserData({ ...inputUserData, data });
      console.log("inputUserData", inputUserData);
    },
    [inputUserData]
  );

  const onSubmit = useCallback((data) => {
    async function submitForm() {
      try {
        debugger;
        const response = await AuthenticateService.clientRegister(
          inputUserData
        );
        debugger;
        login && login(response.access_token, { ...inputUserData });
        console.log("response", response);
        return;
        return;
        if (response.type == "client") {
          router.push("/");
        }
        setDialogOpen(false);
      } catch (err) {
        console.log(err);
      }
    }
    submitForm();
  }, [inputUserData]);

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <>
      <RegistrationDialog
        fullScreen={false}
        open={dialogOpen}
        onSubmit={onSubmit}
        onClose={handleGoBack}
        onInputUpdate={handleInputUpdate}
        inputData={inputUserData}
      />
    </>
  );
}
