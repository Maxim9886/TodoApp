import {Col, Row, Radio} from 'antd';
import './App.css'
import Title from "antd/lib/typography/Title";
import CreateTodoCard from "./components/CreateTodoCard/CreateTodoCard.tsx";
import AllTodoList from "./components/TodoList/AllTodoList/AllTodoList.tsx";
import CompletedTodoList from "./components/TodoList/CompletedTodoList/CompletedTodoList.tsx";
import {useState} from "react";
import {TodoStatuses} from "./types/types.ts";
import ActiveTodoList from "./components/TodoList/ActiveTodoList/ActiveTodoList.tsx";

function App() {
    const [status, setStatus] = useState<TodoStatuses>("all");

    return (
        <>
            <Row className="main-container">
                <Col className="header">
                    <Title level={3}>Just a simple todo list</Title>
                </Col>
                <CreateTodoCard />
                {status === "all" && <AllTodoList />}
                {status === "completed" && <CompletedTodoList />}
                {status === "active" && <ActiveTodoList />}
                <Col className="toggle-buttons">
                    <Radio.Group defaultValue={0} buttonStyle="solid">
                        <Radio.Button value={0} onChange={() => setStatus("all")}>All</Radio.Button>
                        <Radio.Button value={1} onChange={() => setStatus("completed")}>Completed</Radio.Button>
                        <Radio.Button value={2} onChange={() => setStatus("active")}>Active</Radio.Button>
                    </Radio.Group>
                </Col>
            </Row>
        </>

    );
}

export default App
