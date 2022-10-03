import React, { useEffect, useState } from "react";
import SearchServiceComponent from "../../components/pageComponents/buscarServico";
// import ServicesService from "../../services/models/services";
// import axios from "axios"

export default function searchService({data}) {
  const [serviceList, setServiceList] = useState(
    [
      {
        name: 'Teste1',
        description: 'teste1',
        duration: 'teste1',
        place: 'teste1',
      },
      {
        name: 'Teste1',
        description: 'teste1',
        duration: 'teste1',
        place: 'teste1',
      },
      {
        name: 'Teste1',
        description: 'teste1',
        duration: 'teste1',
        place: 'teste1',
      },
      {
        name: 'Teste1',
        description: 'teste1',
        duration: 'teste1',
        place: 'teste1',
      },

    ]
  )

  return (
      <SearchServiceComponent serviceList={serviceList}/>
  );
}

/* export const getStaticProps = async () => {
  const data = await ServicesService.list();
  // const {data} = await axios.get("https://agendai-api.herokuapp.com/service")
  
  return { props:{data}, revalidate: 60 }
} */