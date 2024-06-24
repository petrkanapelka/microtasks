import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        { id: todolistID1, title: 'What to learn', filter: 'all' },
        { id: todolistID2, title: 'What to buy', filter: 'all' },
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "ReactJS", isDone: false },
            { id: v1(), title: "Rest API", isDone: false },
            { id: v1(), title: "GraphQL", isDone: false },
        ],
        [todolistID2]: [
            { id: v1(), title: "HTML&CSS2", isDone: true },
            { id: v1(), title: "JS2", isDone: true },
            { id: v1(), title: "ReactJS2", isDone: false },
            { id: v1(), title: "Rest API2", isDone: false },
            { id: v1(), title: "GraphQL2", isDone: false },
        ]
    });



    function removeTask(id: string, todoID: string) {
        // let filteredTasks = tasks.filter(t => t.id != id);
        setTasks({ ...tasks, [todoID]: tasks[todoID].filter(t => t.id !== id) });
    }

    function addTask(title: string, todoID: string) {
        let task = { id: v1(), title: title, isDone: false };
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
        setTasks({ ...tasks, [todoID]: [task, ...tasks[todoID]] });
    }

    function changeStatus(taskId: string, isDone: boolean, todoID: string) {
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }

        setTasks({ ...tasks, [todoID]: tasks[todoID].map(t => t.id === taskId ? { ...t, isDone } : t) });
    }


    // let tasksForTodolist = tasks;

    // if (filter === "active") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === false);
    // }
    // if (filter === "completed") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === true);
    // }

    function changeFilter(value: FilterValuesType, todoID: string) {
        // const updTodolist = todolists.find(t => t.id === todoID)
        /* if (updTodolist) {
            updTodolist.filter = value;
            setTodolists([...todolists]);
        } */
        setTodolists(todolists.map(t => t.id === todoID ? { ...t, filter: value } : t))
    }



    return (
        <div className="App">
            {todolists.map((t, i) => {
                let tasksForTodolist = tasks[t.id];

                if (t.filter === "active") {
                    tasksForTodolist = tasks[t.id].filter(t => t.isDone === false);
                }
                if (t.filter === "completed") {
                    tasksForTodolist = tasks[t.id].filter(t => t.isDone === true);
                }

                return (
                    <Todolist
                        key={t.id}
                        title={t.title}
                        id={t.id}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={t.filter}
                    />)
            })}
        </div>
    );
}

export default App;
