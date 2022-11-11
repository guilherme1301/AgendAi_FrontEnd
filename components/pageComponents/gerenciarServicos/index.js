import React, { useEffect, useState } from 'react';
import { Input, Space, Table, Modal, Form, Button, Popconfirm, Select, Card, notification } from 'antd';
import "antd/dist/antd.css";
import axios from '../../../pages/axios';
import { useContext } from "react";
import { Context } from "../../../pages/contexts/userContext";

export default () => {

    const [dataSource, setDataSource] = useState();
    const [isModalEdit, setIsModalEdit] = useState(false);
    const [isModalCancel, setIsModalCancel] = useState(false);
    const [lstServicos, setLstServicos] = useState();
    const [id, setId] = useState();
    const [form] = Form.useForm();
    const { TextArea } = Input;
    const { isLogged, userData } = useContext(Context);

    const nameEmpresa = JSON.parse(userData).name;
    const shopId = JSON.parse(userData).id;

    useEffect(() => {
        updateList()
        getAllServices()
    }, [userData])

    async function updateList() {
        await axios.get(`/user-shop/one/?id=${shopId}`).
            then(({ data }) => {
                setDataSource(data.payload.services)
            })
    }

    async function getAllServices() {
        await axios.get('/service-default')
            .then(({ data }) => {
                setLstServicos(data.payload)
                console.log("vamo la isso eh os services rapeize", data.payload)
            })
    }

    async function editService(id) {
        setId(id);
        showModalEdit(true);
    }

    async function deleteService(id) {
        await axios.delete(`/service?id=${id}`)
            .then((res) => {
                notification.success({
                    message: 'Serviço deletado com sucesso',
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
        form.resetFields();
    }

    const showModalEdit = () => {
        setIsModalEdit(true);
    };

    const showModalCancel = () => {
        setIsModalCancel(true);
    };

    async function onFinishEdit(values) {
        console.log("Success:", values);
        editService();
        const response = await axios.put(`/service?id=${id}`,
            {
                description: values.description,
                duration: values.duration,
                price: values.price
            }
        ).then((res) => {
            notification.success({
                message: 'Serviço editado com sucesso',
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
        setIsModalEdit(false);
        updateList();
        form.resetFields();
        return response;
    }

    async function onFinishCreate(values) {
        console.log("Success:", values);
        const response = await axios.post(`/service`,
            {
                description: values.description,
                duration: +values.duration,
                price: +values.price,
                userShopId: shopId,
                serviceDefaultId: values.serviceId
            }
        ).then((res) => {
            notification.success({
                message: 'Novo serviço cadastrado com sucesso',
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
        setIsModalCancel(false);
        updateList();
        form.resetFields();
                return response;
    }

    const columns = [
        {
            title: 'Nome do Serviço',
            dataIndex: 'serviceDefault',
            key: 'serviceDefault',
            width: '30%',
            render: (text) => <span>{text.name}</span>
        },
        {
            title: 'Descrição',
            dataIndex: 'description',
            key: 'description',
            width: '25%',
        },
        {
            title: 'Duração',
            dataIndex: 'duration',
            key: 'duration',
            width: '20%',
        },
        {
            title: 'Preço',
            dataIndex: 'price',
            key: 'price',
            width: '10%',
        },
        {
            title: 'Action',
            key: 'action',
            width: '15%',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => editService(record.id)}>Edit</a>
                    <Popconfirm
                        title="Deseja realmente deletar esse serviço?"
                        onConfirm={() => deleteService(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <a >Delete</a>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <>
            <h1>{nameEmpresa}</h1>
            <Card bordered={false} onClick={showModalCancel}>
                <Button type='primary'>Cadastrar novo serviço</Button>
            </Card>
            <Table
                bordered
                columns={columns}
                dataSource={dataSource}
                />
            <Modal
                title={"Editar"}
                open={isModalEdit}
                footer={null}
                closable={false}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    autoComplete="off"
                    onFinish={onFinishEdit}
                >
                    <Form.Item
                        label="Descrição"
                        name="description"
                    >
                        <TextArea rows={4} />

                    </Form.Item>
                    <Form.Item
                        label="Duração"
                        name="duration"
                    >
                        <Input />

                    </Form.Item>
                    <Form.Item
                        label="Preço"
                        name="price"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Space>
                            <Button type="primary" htmlType='submit' onClick={() => editService}>
                                Editar
                            </Button>
                            <Button onClick={() => setIsModalEdit(false)}>
                                Cancelar
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>

            {/* ///////////////////////////////////// */}
            <Modal title="Basic Modal"
                open={isModalCancel}
                footer={null}
                closable={false}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    autoComplete="off"
                    onFinish={onFinishCreate}
                >
                    <Form.Item
                        label="Descrição"
                        name="description"
                    >
                        <TextArea rows={4} />

                    </Form.Item>
                    <Form.Item
                        label="Duração"
                        name="duration"
                    >
                        <Input />

                    </Form.Item>
                    <Form.Item
                        label="Preço"
                        name="price"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Serviço"
                        name="serviceId"
                    >
                        <Select
                            showSearch
                            placeholder="Selecione uma loja"
                            optionFilterProp="children"
                        >
                            {lstServicos?.map((e) => {
                                return (
                                    <Option key={e.id} value={e.id}>
                                        {e.name}
                                    </Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Space>
                            <Button type="primary" htmlType='submit'>
                                Criar
                            </Button>
                            <Button onClick={() => setIsModalCancel(false)}>
                                Cancelar
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};