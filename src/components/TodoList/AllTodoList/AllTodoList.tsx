import {Card, Col, Divider, Row, Typography} from "antd";
import Title from "antd/lib/typography/Title";
import {FC} from "react";
import TodoCard from "../../TodoCard/TodoCard.tsx";
import {TodoType} from "../../../types/types.ts";
import {getAllTodos} from "../../../store/selectors/selectors.ts";
import {useAppSelector} from "../../../store/store.ts";

const AllTodoList: FC = () => {
    const { Text } = Typography;
    const todos:TodoType[] = useAppSelector(getAllTodos)
    console.log(todos)

    return (
        <Col className="todo-list">
            <Card>
                <Title level={4}>Todo list</Title>
                <Divider type="horizontal" />
                {todos.length === 0 ? (
                    <Row>
                        <Text>Todo list is empty</Text>
                    </Row>
                ) : (
                    todos?.map(item =>
                    <TodoCard name={item.name} isCompleted={item.isCompleted} key={item.id}/>
                    )
                )}
            </Card>
        </Col>
    );
}

export default AllTodoList;