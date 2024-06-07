import {Button, Divider, message, Popconfirm, PopconfirmProps, Row, Switch, Tag, Tooltip} from "antd";
import {FC} from "react";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";

export type TodoCardProps = {
    name: string;
    isCompleted: boolean;
}

const TodoCard: FC<TodoCardProps>= ( { name, isCompleted } ) => {
    const dispatch = useDispatch()

    const handleCompletedChanged = () => {
        dispatch({ type: 'todos/todoToggled', payload: name })
    }

    const onDelete = () => {
        dispatch({ type: 'todos/todoDeleted', payload: name })
    }

    const confirm: PopconfirmProps['onConfirm'] = () => {
        onDelete();
        message.warning('Todo deleted');
    };

    const cancel: PopconfirmProps['onCancel'] = () => {
        message.error('Deletion canceled');
    };

    return (
        <Row justify="space-between" align="middle">
            <Tag color={isCompleted ? "green" : "volcano"}>{name}</Tag>
            <Row align="middle">
                <Tooltip title={isCompleted ? "completed" : "not completed"}>
                    <Switch
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        defaultChecked={false}
                        value={isCompleted}
                        onChange={handleCompletedChanged}
                    />
                </Tooltip>
                <Divider type="vertical" />
                <Tooltip title="Click to delete todo">
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this todo?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>
                </Tooltip>
            </Row>
            <Divider type="horizontal" orientationMargin={10} />
        </Row>
    );
}

export default TodoCard;