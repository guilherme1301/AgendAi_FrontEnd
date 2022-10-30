import React, { useEffect, useState } from "react";
import styles from '../../styles/SearchService.module.css'
import { Table, Space } from "antd";
import 'antd/dist/antd.variable.min.css';

function finalizarAgendamento(id) {
  console.log(`Finalizar agendamento id=${id}`)
}

const columns = [
  {
    title: "Escolha um Serviço",
    dataIndex: "id",
    key: "id"
  },
  {
    title: 'Serviço',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Hora',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Ação',
    key: 'action',
    render: (_, record) => (

      <Space size="middle">
        <a onClick={() => finalizarAgendamento(record.id)}>Finalizar Agendamento</a>

      </Space>
    ),
  },
];
const dataa = [
  {
    key: '1',
    id: '1',
    name: 'John Brown',
    age: 32,
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    id: '2',
    name: 'Jim Green',
    age: 42,
    tags: ['loser'],
  },
  {
    key: '3',
    id: '3',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },
];

export default function agendamentos() {
  const [dataSource, setDataSource] = useState()

  useEffect(() => {
    updateList()
  }, [])

  async function updateList() {
    // await fetch('https://agendai-api.herokuapp.com/schedule')
    //   .then(res => res.json())
    //   .then(data => {
    //     setDataSource(data.payload)

    //   })
  }



  console.log("datasource:", dataSource)
  return (
    <>
      <div className={styles.return}>
        <svg className={styles.svgreturn} width="25" height="14" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.7173 0.449368C15.161 0.893146 15.2014 1.58759 14.8383 2.07694L14.7173 2.21714L3.93504 12.9999L14.7173 23.7827C15.161 24.2265 15.2014 24.9209 14.8383 25.4103L14.7173 25.5505C14.2735 25.9942 13.579 26.0346 13.0897 25.6715L12.9495 25.5505L1.28282 13.8838C0.839046 13.44 0.798702 12.7456 1.16179 12.2562L1.28282 12.116L12.9495 0.449368C13.4376 -0.0387869 14.2291 -0.0387869 14.7173 0.449368Z" fill="black" />
        </svg>
        <h3>Voltar</h3>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div style={{ height: 400, width: '100%' }}>

        <Table
          dataSource={dataa}
          columns={columns}
        />
      </div>
    </>
  );
}
