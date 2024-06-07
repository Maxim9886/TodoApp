import {Button, Card, Col, Divider, Form, Input, message, Row, Tooltip} from "antd";
import {FC} from "react";
import Title from "antd/lib/typography/Title";
import {PlusSquareOutlined} from "@ant-design/icons";
import {useAppDispatch} from "../../store/store.ts";

const CreateTodoCard: FC = () => {
    const dispatch = useAppDispatch()
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();

    const onFinish = (value: any) => {
        dispatch({ type: 'todos/todoAdded', payload: value.todo })
        messageApi.open({
            type: 'success',
            content: 'Todo added!',
        });
        form.resetFields();
    }

    return (
        <>
            {contextHolder}
            <Col className="create-todo-container">
                <Card>
                    <Title level={4}>Add new todo</Title>
                    <Divider type="horizontal" />
                    <Form
                        form={form}
                        onFinish={onFinish}
                        layout="horizontal"
                        wrapperCol={{ span: 23 }}
                    >
                        <Row justify="space-between">
                            <Col className="ant-col-xl-20">
                                <Form.Item
                                    name="todo"
                                    rules={[{ required: true, message: 'Please input todo!' }]}
                                >
                                    <Input
                                        placeholder="What needs to be done?"
                                    />
                                </Form.Item>
                            </Col>
                            <Col className="ant-col-xl-4">
                                <Form.Item>
                                    <Tooltip title="Click to add todo">
                                        <Button
                                            htmlType="submit"
                                            type="primary"
                                            icon={<PlusSquareOutlined />}
                                            iconPosition="start">
                                            Add todo
                                        </Button>
                                    </Tooltip>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Col>
        </>
    );
}

export default CreateTodoCard;
