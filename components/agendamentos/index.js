import { useEffect, useState } from "react";
import styles from "../../styles/Agendamentos.module.css";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import axios from "../../pages/axios";
import { Button, Modal, Space, Form, Select, notification } from "antd";
import "antd/dist/antd.css";

const { Option } = Select;

export default function Agendamentos({ usuario, listServicePending, listServiceConfirmed }) {
    const [form] = Form.useForm();
    const [dadosAgendados, setDadosAgendados] = useState()
    const [dadosConfirmados, setdadosConfirmados] = useState()
    const [isModalCancelOpen, setIsModalCancelOpen] = useState(false);
    const [isModalConfirmedOpen, setIsModalConfirmedOpen] = useState(false);
    const [isModalEdit, setIsModalEdit] = useState(false);
    const [id, setId] = useState(null);
    const [dados, setDados] = useState({});
    const [dia, setDia] = useState();
    const [hora, setHora] = useState();

    useEffect(() => {
        updateList()
    }, [])

    function updateList() {
        getDadosAgendados()
        getDadosConfirmados()
    }

    console.log("agendados:", dadosAgendados)
    console.log("confirmdoados:", dadosConfirmados)

    async function getDadosAgendados() {
        await axios.get(`/schedule?status=awaiting`).
            then(({ data }) => {
                setDadosAgendados(data.payload)
            })
    }

    async function getDadosConfirmados() {
        await axios.get(`/schedule?status=confirmed`).
            then(({ data }) => {
                setdadosConfirmados(data.payload)
            })
    }

    async function confirmarAgendamentos(id) {
        const response = await axios.patch(`/schedule?id=${id}`,
            {
                status: 'confirmed'
            }).then((res) => {
                notification.success({
                    message: `Agendamento confirmado!!`,
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
        setIsModalConfirmedOpen(false);
        updateList()
        return response;
    }

    async function cancelarAgendamentos(id) {
        const response = await axios.patch(`/schedule?id=${id}`,
            {
                status: 'canceled'
            }).then((res) => {
                notification.info({
                    message: `Agendamento cancelado!!`,
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
        setIsModalCancelOpen(false);
        updateList()
        return response;
    }

    async function editarAgendamento(id) {
        const response = await axios.put(`/schedule?id=${id}`,
            {
                time: {
                    day: "Domingo",
                    time: "23:30"
                },
                status: "confirmed"
            }
        ).then((res) => {
            notification.success({
                message: `Agendamento atualizado com sucesso`,
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
        updateList()
        return response;
    }

    const handleCancel = () => {
        setIsModalCancelOpen(false);
    };

    ////// ALERTA DE GAMBIARRA 
    //// ALERTA DE GAMBIARRA!!!!!!!!!!!!!!!!!
    const showModalCancel = (id) => {
        setId(id)
        setIsModalCancelOpen(true);
    };

    const showModalConfirmed = (id) => {
        setId(id)
        setIsModalConfirmedOpen(true);
    };

    const showModalEdit = (id, dia, hora) => {
        setId(id)
        setDia(dia)
        setHora(hora)
        setIsModalEdit(true);
    };
    //////////////////////////////////////////////
    const handleCancelConfirm = () => {
        setIsModalConfirmedOpen(false);
    };

    const handleEditCancel = () => {
        form.resetFields()
        setIsModalEdit(false);
    };

    const onFinish = (values) => {
        setDados(values);
        console.log("Success:", values);
        setIsModalEdit(false);
    };

    console.log(id)
    console.log("daodos", dados)
    console.log("dia", dia)
    console.log("dhroara", hora)

    return (
        <div className={styles.divContent}>

            {usuario &&
                <div style={{ marginTop: 40 }}>
                    <div className={styles.subTitle}>Procurar Serviços</div>
                    <div className={styles.divButton}>
                        <input className={styles.input} placeholder="Busque serviços" />
                        <div className={styles.buscar}>
                            buscar
                        </div>
                    </div>
                </div>
            }
            <div>
                <div className={styles.subTitle}>Agendamentos Pendentes</div>
                {dadosAgendados?.map(item => (
                    <div className={styles.divButton}>
                        {item.schedules.serviceDefault.name} - {item.userClient.name} - {item.time.day} - {item.time.time}
                        <div className={styles.accept}>
                            <CheckIcon onClick={() => showModalConfirmed(item.id)}
                                className={styles.buttonConfirmar} />
                            <CloseIcon onClick={() => showModalCancel(item.id)}
                                className={styles.buttonCancelar} />
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <div className={styles.subTitle}>Agendamentos Confirmados</div>
                {dadosConfirmados?.map(item => (
                    <div className={styles.divButton}>
                        {item.schedules.serviceDefault.name} - {item.userClient.name} - {item.time.day} - {item.time.time}
                        <div className={styles.accept}>
                            <ModeEditIcon onClick={() => showModalEdit(item.id, item.time.day, item.time.time)}
                                className={styles.buttonConfirmar} />
                        </div>
                    </div>
                ))}
            </div>
            {/* confirmar */}
            <Modal
                title="CONFIRMAR AGENDAMENTO"
                open={isModalConfirmedOpen}
                footer={null}
                closable={false}
            >
                Deseja COFINRMAR o agendamento de 'xxxx', 'ddd', ''?
                <br />
                <br />
                <b>
                    Não é possível desfazer esta ação depois de concluída. Deseja
                    confirmar mesmo assim?
                </b>
                <br />
                <Space style={{ justifyContent: "center" }}>
                    <Button onClick={handleCancelConfirm}>Voltar</Button>
                    <Button type="primary" onClick={() => confirmarAgendamentos(id)}>
                        Confirmar Agendamento
                    </Button>
                </Space>
                <br />
                <br />
            </Modal>
            {/* cancelar */}
            <Modal
                title="CANCELAR AGENDAMENTO"
                open={isModalCancelOpen}
                footer={null}
                closable={false}
            >
                Deseja CANCELAR o agendamento de 'xxxx', 'ddd', ''?
                <br />
                <br />
                <b>
                    Não é possível desfazer esta ação depois de concluída. Deseja
                    CANCELAR mesmo assim?
                </b>
                <br />
                <br />
                <Space style={{ justifyContent: "center" }}>
                    <Button onClick={handleCancel}>Voltar</Button>
                    <Button type="primary" danger onClick={() => cancelarAgendamentos(id)}>
                        Cancelar Agendamento
                    </Button>
                </Space>
                <br />
            </Modal>
            {/* editar */}
            <Modal
                title="EDITAR AGENDAMENTO"
                open={isModalEdit}
                footer={null}
                closable={false}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                    form={form}
                >
                    <Form.Item
                        label="Dia"
                        name="day"
                        rules={[{ required: true, message: "Por favor selecione um dia!" }]}
                        initialValue={dia}
                    >
                        <Select allowClear >
                            <Option value="Segunda">Segunda-feira</Option>
                            <Option value="Terça">Terça-feira</Option>
                            <Option value="Quarta">Quarta-feira</Option>
                            <Option value="Quinta">Quinta-feira</Option>
                            <Option value="Sexta">Sexta-feira</Option>
                            <Option value="Sábado">Sábado</Option>
                            <Option value="Domingo">Domingo</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Horário"
                        name="time"
                        rules={[{ required: true, message: "Por favor selecione um horário!" }]}
                        initialValue={hora}
                    >
                        <Select allowClear >
                            <Option value="08:00">08:00</Option>
                            <Option value="08:30">08:30</Option>
                            <Option value="09:00">09:00</Option>
                            <Option value="09:30">09:30</Option>
                            <Option value="10:00">10:00</Option>
                            <Option value="10:30">10:30</Option>
                            <Option value="11:00">11:00</Option>
                            <Option value="11:30">11:30</Option>
                            <Option value="12:00">12:00</Option>
                            <Option value="12:30">12:30</Option>
                            <Option value="13:00">13:00</Option>
                            <Option value="13:30">13:30</Option>
                            <Option value="14:00">14:00</Option>
                            <Option value="14:30">14:30</Option>
                            <Option value="15:00">15:00</Option>
                            <Option value="15:30">15:30</Option>
                            <Option value="16:00">16:00</Option>
                            <Option value="16:30">16:30</Option>
                            <Option value="17:00">17:00</Option>
                            <Option value="17:30">17:30</Option>
                            <Option value="18:00">18:00</Option>
                            <Option value="18:30">18:30</Option>
                            <Option value="19:00">19:00</Option>
                            <Option value="19:30">19:30</Option>
                            <Option value="20:00">20:00</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Space>
                            <Button type="primary" htmlType="submit" onClick={() => editarAgendamento(id)}>
                                Submit
                            </Button>
                            <Button htmlType="submit" onClick={handleEditCancel}>
                                Cancelar
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
