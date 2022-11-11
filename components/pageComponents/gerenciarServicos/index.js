import React, { useEffect, useState } from 'react';
import { Input, Space, Table, Modal, Form, Button, Popconfirm, Select, Card, notification } from 'antd';
import "antd/dist/antd.css";
import axios from '../../../pages/axios';

export default () => {

    const [dataSource, setDataSource] = useState();
    const [isModalEdit, setIsModalEdit] = useState(false);
    const [isModalCancel, setIsModalCancel] = useState(false);
    const [lstServicos, setLstServicos] = useState();
    const [lstShop, setLstShop] = useState();
    const [id, setId] = useState();
    const [form] = Form.useForm();
    const { TextArea } = Input;

    useEffect(() => {
        updateList()
        getAllShops()
    }, [])

    async function updateList() {
        await axios.get('/service').
            then(({ data }) => {
                setLstServicos(data.payload)
                setDataSource(data.payload)
                console.log("vamo la isso aqui eh os services", data.payload)
            })
    }

    async function getAllShops() {
        await axios.get('/user-shop')
            .then(({ data }) => {
                setLstShop(data.payload)
                console.log("vamo la isso eh shop", data.payload)
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
    }

    async function createService() {
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa")
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
        updateList()
        return response;
    }

    async function onFinishCreate(values) {
        console.log("Success:", values);
        const response = await axios.post(`/service`,
            {
                description: values.description,
                duration: +values.duration,
                price: +values.price,
                userShopId: values.shopId,
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
        return response;
    }

    const columns = [
        {
            title: 'Nome do Serviço',
            dataIndex: 'serviceDefault',
            key: 'serviceDefault',
            render: (text) => <span>{text.name}</span>
        },
        {
            title: 'Descrição',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Duração',
            dataIndex: 'duration',
            key: 'duration',
        },
        {
            title: 'Preço',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Action',
            key: 'action',
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
            <Card bordered={false} onClick={showModalCancel}>
                <Button type='primary'>Cadastrar novo serviço</Button>
            </Card>
            <Table 
            columns={columns} 
            dataSource={dataSource} 
            size="middle"
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
                        label="Loja"
                        name="shopId"
                        //mandando o Id pelo value

                    >
                        <Select
                            showSearch
                            placeholder="Selecione uma loja"
                            optionFilterProp="children"
                        >
                            {lstShop?.map((e) => {
                                return (
                                    <Option key={e.id} value={e.id}>
                                        {e.name}
                                    </Option>
                                );
                            })}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Serviço"
                        name="serviceId"
                        //mandando o Id pelo value
                    >
                        <Select
                            showSearch
                            placeholder="Selecione uma loja"
                            optionFilterProp="children"
                        >
                            {lstServicos?.map((e) => {
                                return (
                                    <Option key={e.serviceDefault.id} value={e.serviceDefault.id}>
                                        {e.serviceDefault.name}
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