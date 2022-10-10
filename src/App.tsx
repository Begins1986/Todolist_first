import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TaskType={
    id: number
    title: string
    isDone: boolean
}

export type FilterValueType='All'|'Active'|'Completed'


function App() {

    const [tasks, setTask] =  useState<Array<TaskType>>([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ])

    const [filter, setFilter]=useState<FilterValueType>('All')

    const removeTask =(taskId: number)=>{
        setTask(tasks.filter(el=>el.id!==taskId))
    }

    const changeFilter=(value: FilterValueType)=>{
        setFilter(value)
    }

    let taskForTodoList = tasks

    if (filter=='Active'){
        taskForTodoList=tasks.filter(el=>el.isDone)
    }

    if (filter=='Completed'){
        taskForTodoList=tasks.filter(el=>!el.isDone)
    }

    return (
        <div className="App">
            <Todolist title={'What to learn'}
                      tasks={taskForTodoList}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
