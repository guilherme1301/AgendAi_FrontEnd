import { useEffect, useState } from "react";
import styles from "../../styles/Agendamentos.module.css";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import axios from "../../pages/axios";
import { Button, Modal, Space, Form, Select } from "antd";
import "antd/dist/antd.css";
import { formControlClasses } from "@mui/material";

const { Option } = Select;

export default function Agendamentos({ usuario, listServicePending, listServiceConfirmed }) {

    const [dadosAgendados, setDadosAgendados] = useState()
    const [dadosConfirmados, setdadosConfirmados] = useState()
    const [isModalCancelOpen, setIsModalCancelOpen] = useState(false);
    const [isModalConfirmedOpen, setIsModalConfirmedOpen] = useState(false);
    const [isModalEdit, setIsModalEdit] = useState(false);

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
        const response = await axios.patch(`/schedule?id=${id}`, { status: 'confirmed' });
        updateList()
        return response;
    }

    async function cancelarAgendamentos(id) {
        const response = await axios.patch(`/schedule?id=${id}`, { status: 'awaiting' });
        updateList()
        return response;
    }

    const showModalCancel = () => {
        setIsModalCancelOpen(true);
    };

    const handleCancel = () => {
        setIsModalCancelOpen(false);
    };

    const showModalConfirmed = () => {
        setIsModalConfirmedOpen(true);
    };

    const handleCancelConfirm = () => {
        setIsModalConfirmedOpen(false);
    };

    const showModalEdit = () => {
        setIsModalEdit(true);
    };

    const handleEditCancel = () => {
        setIsModalEdit(false);
    };


    const confirmar = () => {
        console.log("confirmar")
    }

    const cancelar = () => {
        console.log("cancelar")
    }

    const onFinish = (values) => {
        console.log("Success:", values);
        setIsModalEdit(false);
    };

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
                            <CheckIcon onClick={showModalConfirmed}
                                className={styles.buttonConfirmar} />
                            <CloseIcon onClick={showModalCancel}
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
                            <ModeEditIcon onClick={showModalEdit}
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
                HJAJAJAJAJAJA to de 'xxxx', 'ddd', ''?
                <br />
                <br />
                <b>
                    Não é possível desfazer esta ação depois de concluída. Deseja
                    confirmar mesmo assim?
                </b>
                <br />
                <Space style={{ justifyContent: "center" }}>
                    <Button onClick={handleCancelConfirm}>Voltar</Button>
                    <Button type="primary" onClick={cancelar}>
                        Cancelar Agendamento
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
                    <Button type="primary" onClick={confirmar}>
                        confirmar Agendamento
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
                >
                    <Form.Item
                        label="Dia"
                        name="day"
                        rules={[{ required: true, message: "Please input your username!" }]}
                    >
                        <Select allowClear>
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
                        rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <Select allowClear>
                            <Option value="08:00">08:00</Option>
                            <Option value="08:30">08:30</Option>
                            <Option value="09:00">09:00</Option>
                            <Option value="09:30">09:30</Option>
                            <Option value="10:00">10:00</Option>
                            <Option value="10:30">10:30</Option>
                            <Option value="11:00">11:00</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Space>

                        <Button type="primary" htmlType="submit">
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
