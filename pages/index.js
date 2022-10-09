import React, { useContext, useEffect, useState } from "react";
import { Context } from "./contexts/userContext";

export default function Home() {
  const {userData} = useContext(Context);

  return (
    <>
      <h1>Dashbaord Geral</h1>
    </>
  );
}
