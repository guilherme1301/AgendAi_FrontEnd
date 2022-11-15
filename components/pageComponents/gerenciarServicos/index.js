import React, { useEffect, useState } from 'react';
import { Input, Space, Table, Modal, Form, Button, Popconfirm, Select, Card, notification, InputNumber } from 'antd';
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
    const [formData, setFormData] = useState({});
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
            })
    }

    async function editService(record) {
        setId(record?.id);
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

    const handleCancelModalEdit = () => {
        setFormData({})
        setIsModalEdit(false);
        form.resetFields()
    };

    const handleCancelModal = () => {
        setIsModalCancel(false);
        form.resetFields()
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
                serviceDefaultId: +values.serviceId,
                userShopId: shopId
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
            width: '50%',
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
            title: '',
            key: 'action',
            width: '15%',
            render: (_, record) => (
                <Space size="middle">
                    <Button type='primary' onClick={() => {
                        editService(record),
                            setFormData(record)
                        if (record.id !== formData.id) {
                            form.resetFields();
                            form.setFieldsValue(record);

                        }
                        if (record.id === formData.id) {
                            form.setFieldsValue(record);
                        }
                    }}>Editar</Button>
                    <Popconfirm
                        title="Deseja realmente deletar esse serviço?"
                        onConfirm={() => deleteService(record.id)}
                        okText="Sim"
                        cancelText="Não"
                    >
                        <Button type='danger'>Deletar</Button>
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
                    form={form}
                >
                    <Form.Item
                        label="Descrição"
                        name="description"
                    >
                        <TextArea rows={3} />

                    </Form.Item>
                    <Form.Item
                        label="Duração"
                        name="duration"
                    >
                        <Input addonAfter="min" />

                    </Form.Item>
                    <Form.Item
                        label="Preço"
                        name="price"
                    >
                        <Input
                            min="0.00"
                            step="0.00"
                            stringMode
                            placeholder="0.00"
                            type="number"
                            prefix="R$"
                            style={{ width: '100%' }}

                        />

                    </Form.Item>
             
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Space>
                            <Button type="primary" htmlType='submit' onClick={() => editService}>
                                Editar
                            </Button>
                            <Button onClick={() => handleCancelModalEdit()}>
                                Cancelar
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>

            {/* ///////////////////////////////////// */}
            <Modal
                title={"Cadastrar um novo serviço"}
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
                    form={form}
                >
                    <Form.Item
                        label="Descrição"
                        name="description"
                    >
                        <TextArea rows={3} />

                    </Form.Item>
                    <Form.Item
                        label="Duração"
                        name="duration"
                    >
                        <Input addonAfter="min" />

                    </Form.Item>
                    <Form.Item
                        label="Preço"
                        name="price"
                    >
                        <Input
                            min="0.00"
                            step="0.00"
                            stringMode
                            placeholder="0.00"
                            type="number"
                            prefix="R$"
                            style={{ width: '100%' }}
                        />
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
                            <Button onClick={() => handleCancelModal()}>
                                Cancelar
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};