import React, { useEffect, useState } from "react";
import styles from '../../styles/SearchService.module.css'
import { Table, Input, Drawer, Button, Modal, Card } from "antd";
import 'antd/dist/antd.variable.min.css';

function finalizarAgendamento(id) {
  console.log(`Finalizar agendamento id=${id}`)
}

const columns = [
  {
    title: 'Escolha um Serviço',
    dataIndex: 'id',
    render: (_, record) =>
      <div style={{ display: "flex", justifyContent: 'space-between' }}>
        <div>
          <span> {record.description}</span>
        </div>
        <div >
          <p>R$ {record.price}</p>
          <p> +/- {record.duration}</p>
        </div>
      </div>
  },
];

export default function agendamentos() {
  const [dataSource, setDataSource] = useState()
  const [open, setOpen] = useState(false);
  const [busca, setBusca] = useState('')
  const { Search } = Input;

  useEffect(() => {
    updateList()
  }, [])

  async function updateList() {
    await fetch('https://agendai-api.herokuapp.com/service')
      .then(res => res.json())
      .then(data => {
        setDataSource(data.payload)
      })
  }

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  console.log("datasource:", dataSource)

  const modifiedData = dataSource?.map(({ body, ...item }) => ({
    ...item,
    key: item.id
  }))

  function onSearch(busca) {
    fetch(`https://agendai-api.herokuapp.com/service?description=${busca}`)
      .then(res => res.json())
      .then(data => {
        setDataSource(data.payload)
        console.log(data)
      })

  }

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
      <Card style={{ width: '100%', height: '100%' }}>
        <h3>props.name</h3>
      <Search placeholder="Busque serviços" onSearch={onSearch} enterButton />
        <Table
          size="small"
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              record.schedules.map((e) => {
                return (
                  <>
                    <p>Dia: {e.time.day}</p>
                    <p>Horário: {e.time.time}</p>
                  </>
                )
              })
            ),
            rowExpandable: (record) => record.name !== 'Not Expandable',
          }}
          dataSource={modifiedData}
        />
        <Modal open={open} onOk={handleOk} onCancel={handleCancel}>
          <p>Deseja finalizar o agendamento de {name} em ?</p>
          <p>Caso finalize o agendamento, você poderá cancelá-lo na sua Área do Cliente</p>
        </Modal>
        <Button onClick={showModal}>Finalizar Agendamento</Button>
      </Card>
    </>
  );
}
