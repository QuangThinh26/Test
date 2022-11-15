import React, { useState, useImperativeHandle, useEffect } from "react";
import {Form, Input, Modal} from "antd";

function ModalAddPost({onOK, loading = false}, ref){
    const [visible, setVisible] = useState(false)
    const [form] = Form.useForm();

    useImperativeHandle(
        ref,
        () => {
            return {
                openModal(item) {
                    setVisible(true);
                },
                closeModal() {
                    handleClose();
                },
            };
        },
        []
    );

    function handleClose() {
        setVisible(false);
        form.resetFields();
    }

    function onPressOk() {
        form.submit()
    }

    function onFinish(){

    }


    return (
        <Modal
            visible={visible}
            onCancel={handleClose}
            title="Add Post"
            onOk={onPressOk}
            confirmLoading={loading}
        >
            <Form
                layout={"vertical"}
                form={form}
                name="control-hooks"
                onFinish={onFinish}>

                <Form.Item
                    name="id"
                    label="ID">
                    <Input
                    />
                </Form.Item>

                <Form.Item
                    name="body"
                    label="body">
                    <Input
                    />
                </Form.Item>

                <Form.Item
                    name="title"
                    label="title">
                    <Input
                    />
                </Form.Item>

                <Form.Item
                    name="userId"
                    label="userId">
                    <Input
                    />
                </Form.Item>

            </Form>
        </Modal>
    )
}

export default React.forwardRef(ModalAddPost);