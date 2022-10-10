import React from 'react';
import {FilterValueType, TaskType} from "./App";

type TodolistPropsType={
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId:number)=>void
    changeFilter: (value: FilterValueType)=>void
}

export const Todolist = (props: TodolistPropsType) => {

    // const removeTaskHandler=()=>{
    //     props.removeTask(tl.id)
    // }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(tl=>{return (
                    <li>
                        <button onClick={()=>props.removeTask(tl.id)}>✖</button>
                        <input type="checkbox" checked={tl.isDone}/>
                        <span>{tl.title}</span>
                    </li>
                )})}

                {/*<li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}
            </ul>
            <div>
                <button onClick={()=>{props.changeFilter('All')}}>All</button>
                <button onClick={()=>{props.changeFilter('Active')}}>Active</button>
                <button onClick={()=>{props.changeFilter('Completed')}}>Completed</button>
            </div>
        </div>
    );
};

