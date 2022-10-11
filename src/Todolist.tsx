import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import {FilterValueType, TaskType} from "./App";

type TodolistPropsType={
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId:string)=>void
    changeFilter: (value: FilterValueType)=>void
    addTask: (newTitle:string)=>void
}

export const Todolist = (props: TodolistPropsType) => {

    const[title, setTitle]=useState<string>('')

    const removeTaskHandler=(tID: string)=>{
        props.removeTask(tID)
    }

    const addTaskHandler=()=>{
        props.addTask(title)
        setTitle('')
    }

    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
      if(e.key==='Enter'){
          addTaskHandler()
      }
    }
    
    const changeValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value)
    }

    const changeFilterHandler = (filterValue: FilterValueType) => {
        props.changeFilter(filterValue)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} onChange={changeValueHandler} onKeyPress={onKeyPressHandler}/>
                <button onClick={addTaskHandler}>+</button>
            </div>
            <ul>
                {props.tasks.map(tl=>{return (
                    <li>
                        {/*<button onClick={()=>props.removeTask(tl.id)}>✖</button>*/}
                        <button onClick={()=>removeTaskHandler(tl.id)}>✖</button>
                        <input type="checkbox" checked={tl.isDone}/>
                        <span>{tl.title}</span>
                    </li>
                )})}

                {/*<li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}
            </ul>
            <div>
                <button onClick={()=>changeFilterHandler('All')}>All</button>
                <button onClick={()=>changeFilterHandler('Active')}>Active</button>
                <button onClick={()=>changeFilterHandler('Completed')}>Completed</button>
            </div>
        </div>
    );
};

