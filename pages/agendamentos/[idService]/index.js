import React, { useEffect, useState } from "react";
import styles from '../../../styles/SearchService.module.css'
import 'antd/dist/antd.variable.min.css';
import { Radio, Form, Divider, Button, Modal, Collapse, Card, Space, notification } from "antd";
import { useRouter } from "next/router";
import axios from "../../axios";
import { useContext } from "react";
import { Context } from "../../contexts/userContext";

const { Panel } = Collapse;

const horario = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00"
];

const dias = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo"
];

export default function agendamentos() {
  const [dataSource, setDataSource] = useState()
  const [open, setOpen] = useState(false);
  const [findService, setFindService] = useState()
  const [dados, setDados] = useState({})
  const router = useRouter();
  const [dataId, setDataId] = useState();

  const [serviceId, setServiceId] = useState();
  const [serviceName, setServiceName] = useState();
  const [shopId, setShopId] = useState();
  const [shopName, setShopName] = useState();
  const { query, isReady } = useRouter()
  const [data, setData] = useState()
  const [usuarioId, setUsuarioId] = useState();
  const { idService } = query
  const { isLogged, userData } = useContext(Context);

  useEffect(() => {
    setDataId(userData)
    updateList()
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa ID SERVICEEEEEEEEEEEE", idService)
    console.log("hihihihihihihihihihi", isLogged)
    if(userData){ 
      console.log("HAHAHAHAHAHHAHA CORINGUEI", JSON.parse(userData).id);
     setUsuarioId(JSON.parse(userData).id)
    }
  }, [userData])


  // var objeto = JSON.parse(userData);

  // console.log("HAHAHAHAHHAHAHA", objeto);

  // async function pegar() {
  //   const { data } = await axios.get(`/servicos/${findService}`)
  //   router.push({
  //     pathname: 'servicos',
  //     query: { param: findService }
  //   })

  //   console.log("query: ", router.query)
  // }

  async function getShopId() {
    if (isReady) {
      axios.get(`/service?userShopId=${idService}`).then(({ data }) => setData(data.payload))
    }
  }


  async function updateList() {
    await axios.get('/service').
      then(({ data }) => {
        setDataSource(data.payload)
        console.log(data.payload)
      })
  }

  console.log("datasource:", dataSource)
  console.log("data:", data)

  const onFinish = (fieldsValue) => {
    setDados(fieldsValue)
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  async function finalizarAgendamento(data) {
    const response = await axios.post('/schedule',
      {
        time: {
          day: dados.dia,
          time: dados.horario
        },
        serviceId: serviceId,
        userShopId: shopId,
        userClientId: usuarioId
      }).then((res) => {
        notification.success({
          message: `Agendamento criado com sucesso`,
          placement: 'bottomRight'
        });
        return res.data;
      }).catch((err) => {
        notification.error({
          message: err.response.data.message,
          placement: 'bottomRight'
        });
        throw err.response.data.message;
      });
    setOpen(false);
    updateList()
    return response;
  }

  // async function onSearch(busca) {
  //   await axios.get(`/service?description=${busca}`).
  //     then(({ data }) => {
  //       setDataSource(data.payload)
  //       console.log(data.payload)
  //     })
  // }

  console.log("dados", dados)
  console.log("dataSource", dataSource)

  console.log("serviceid:", serviceId)
  console.log("shopid", shopId)

  function setter(serviceName, serviceId, shopId, shopName) {

    setServiceName(serviceName)
    setServiceId(serviceId)
    setShopId(shopId)
    setShopName(shopName)
  }

  console.log(shopId)

  return (
    <>
      <div className={styles.return}>
        <svg className={styles.svgreturn} width="25" height="14" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.7173 0.449368C15.161 0.893146 15.2014 1.58759 14.8383 2.07694L14.7173 2.21714L3.93504 12.9999L14.7173 23.7827C15.161 24.2265 15.2014 24.9209 14.8383 25.4103L14.7173 25.5505C14.2735 25.9942 13.579 26.0346 13.0897 25.6715L12.9495 25.5505L1.28282 13.8838C0.839046 13.44 0.798702 12.7456 1.16179 12.2562L1.28282 12.116L12.9495 0.449368C13.4376 -0.0387869 14.2291 -0.0387869 14.7173 0.449368Z" fill="black" />
        </svg>
        <h3 onClick={() => router.back()}>Voltar</h3>
      </div>
      <br />
      <br />
      <br />
      <Card style={{ width: '100%', height: '100%' }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
        >
          {dataSource?.map((e) => {
            return (
              <>
                <h3>{e.shop.name}</h3>
                <Collapse onChange={() => setter(e.serviceDefault.name, e.id, e.shop.id, e.shop.name)}>
                  <Panel header={e.serviceDefault.name} key={e.serviceDefault.name} >
                    <Form.Item name="horario">
                      <Radio.Group >
                        {horario.map((e) => {
                          return <Radio.Button value={e}>{e}</Radio.Button>;
                        })}
                      </Radio.Group>
                    </Form.Item>

                    <Divider />
                    <Form.Item name="dia">
                      <Radio.Group >
                        {dias.map((e) => {
                          return <Radio.Button value={e}>{e}</Radio.Button>;
                        })}
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit" onClick={showModal}>
                        Finalizar Agendamentos
                      </Button>
                    </Form.Item>
                  </Panel>
                </Collapse>
              </>
            );
          })}
        </Form>

        <Card bordered={false}>
          <Modal open={open} footer={null}>
            <p>Deseja finalizar o agendamento de <b>{serviceName}</b> em <b>{dados?.dia}</b> ás <b>{dados?.horario}</b> na <b>{shopName}</b>?</p>
            <p>Caso finalize o agendamento, você poderá cancelá-lo na sua Área do Cliente</p>
            <Space >
              <Button onClick={handleCancel}>Voltar</Button>
              <Button type="primary" onClick={finalizarAgendamento}>Finalizar Agendamento</Button>
            </Space>
          </Modal>
        </Card>
      </Card>
    </>
  );
}
