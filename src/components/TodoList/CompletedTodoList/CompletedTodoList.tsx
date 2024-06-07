import {Card, Col, Divider, List, Row, Typography} from "antd";
import Title from "antd/lib/typography/Title";
import {FC} from "react";
import {TodoType} from "../../../types/types.ts";
import {getCompletedTodos} from "../../../store/selectors/selectors.ts";
import {useAppSelector} from "../../../store/store.ts";

const CompletedTodoList: FC = () => {
    const { Text } = Typography;
    const completedTodos:TodoType[] = useAppSelector(getCompletedTodos)
    console.log(completedTodos)

    return (
        <Col className="todo-list">
            <Card>
                <Title level={4}>Completed Todo list</Title>
                <Divider type="horizontal" />
                {completedTodos.length === 0 ? (
                    <Row>
                        <Text>You haven't done anything yet</Text>
                    </Row>
                ) : (
                    <List
                        size="large"
                        bordered
                        dataSource={completedTodos}
                        renderItem={(item) => <List.Item>{item.name}</List.Item>}
                    />
                )}
            </Card>
        </Col>
    );
}

export default CompletedTodoList;