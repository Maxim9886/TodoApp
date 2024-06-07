import { Card, Col, Divider, List, Row, Typography } from "antd";
import Title from "antd/lib/typography/Title";
import { FC } from "react";
import { TodoType } from "../../../types/types.ts";
import { getActiveTodos } from "../../../store/selectors/selectors.ts";
import { useAppSelector } from "../../../store/store.ts";

const ActiveTodoList: FC = () => {
  const { Text } = Typography;
  const activeTodos: TodoType[] = useAppSelector(getActiveTodos);

  return (
    <Col className="todo-list">
      <Card>
        <Title level={4}>Active Todo list</Title>
        <Divider type="horizontal" />
        {activeTodos.length === 0 ? (
          <Row>
            <Text>Everything is done, you are great!</Text>
          </Row>
        ) : (
          <List
            size="large"
            bordered
            dataSource={activeTodos}
            renderItem={(item) => <List.Item>{item.name}</List.Item>}
          />
        )}
      </Card>
    </Col>
  );
};

export default ActiveTodoList;
