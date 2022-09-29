import React, { useEffect, useState } from "react";
import SearchServiceComponent from "../../components/pageComponents/buscarServico";
import ServicesService from "../../services/models/services";
// import axios from "axios"

export default function searchService({data}) {
  const [serviceList, setServiceList] = useState(data)

  return (
    <div>
        <SearchServiceComponent serviceList={serviceList}/>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await ServicesService.list();
  debugger
  // const {data} = await axios.get("https://agendai-api.herokuapp.com/service")
  
  return { props:{data}, revalidate: 60 }
}