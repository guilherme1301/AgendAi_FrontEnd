import React, { useEffect, useState } from 'react';
import { Input, Space, Table, Modal, Form, Button, Card } from 'antd';
import "antd/dist/antd.css";
import axios from '../../../pages/axios';

export default () => {

    const [dataSource, setDataSource] = useState();
    const [isModalEdit, setIsModalEdit] = useState(false);
    const [isModalCreate, setIsModalCreate] = useState(false);
    const [id, setId] = useState();
    const [form] = Form.useForm();
    const { TextArea } = Input;

    useEffect(() => {
        updateList()
    }, [])

    async function updateList() {
        await axios.get('/service').
            then(({ data }) => {
                setDataSource(data.payload)
            })
    }

    async function editService(id) {
        setId(id);
        showModalEdit(true);
    }

    async function deleteService(id) {
        await axios.delete(`/service?id=${id}`)
            .then(() => console.log("DELETADOOOOOOOOOOOOOOOOOOO"));

        updateList()
    }

    async function createService() {
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa")
    }

    const showModalEdit = () => {
        setIsModalEdit(true);
    };

    const handleCancel = () => {
        setIsModalEdit(false);
        form.resetFields()
    }

    const showModalCreate = () => {
        setIsModalCreate(true);
    };

    const handleCancelCreate = () => {
        form.resetFields()
        setIsModalCreate(false);
    }

    async function onFinishEdit(values) {
        console.log("Success:", values);
        editService();
        const response = await axios.put(`/service?id=${id}`,
            {
                description: values.description,
                duration: values.duration,
                price: values.price
            }
        )
        setIsModalEdit(false);
        updateList()
        return response;
    }

    async function onFinishCreate(values) {
        console.log("Success:", values);
        editService();
        const response = await axios.put(`/service?id=${id}`,
        {
            description: values.description,
            duration: values.duration,
            price: values.price,
            userShopId: 0,
            serviceDefaultId: 0
          }
        )
        setIsModalEdit(false);
        updateList()
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
                    <a onClick={() => deleteService(record.id)}>Delete</a>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={dataSource} />
            <Modal
                title={id ? "Editar" : "Criar"}
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
                            {id ?
                                <Button type="primary" htmlType='submit' onClick={() => editService}>
                                    Editar
                                </Button>
                                :
                                <Button type="primary" htmlType='submit'    onClick={() => createService}>
                                    Criar
                                </Button>}
                            <Button onClick={() => setIsModalEdit(false)}>
                                Cancelar
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>

            {/* ///////////////////////////////////// */}
            {/* <Modal
                title="Criar novo"
                open={isModalCreate}
                footer={null}
                closable={false}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    autoComplete="off"
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
                            <Button type="primary" htmlType="submit" onClick={() => editService}>
                                Submit
                            </Button>
                            <Button htmlType="submit" onClick={() => handleCancelCreate}>
                                Cancelar!
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal> */}
        </>
    );
};