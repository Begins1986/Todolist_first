import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type TaskType={
    id: string
    title: string
    isDone: boolean
}

export type FilterValueType='All'|'Active'|'Completed'


function App() {

    const [tasks, setTask] =  useState<Array<TaskType>>([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false }
    ])

    const [filter, setFilter]=useState<FilterValueType>('All')

    const removeTask =(taskId: string)=>{
        setTask(tasks.filter(el=>el.id!==taskId))
    }

    const addTask=(newTitle:string)=>{
        setTask([{id: v1(), title: newTitle, isDone: true}, ...tasks])
    }

    const changeFilter=(value: FilterValueType)=>{
        setFilter(value)
    }

    let taskForTodoList = tasks

    if (filter==='Active'){
        taskForTodoList=tasks.filter(el=>!el.isDone)
    }

    if (filter==='Completed'){
        taskForTodoList=tasks.filter(el=>el.isDone)
    }

    return (
        <div className="App">
            <Todolist title={'What to learn'}
                      tasks={taskForTodoList}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;
