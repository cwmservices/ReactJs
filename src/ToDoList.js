import React from 'react';

const ToDoList=(props)=>{
    return (<>
    <div className='todo_style'>
        <button className="btn_2" style={{padding: "2px 6px",display:'inline'}} onClick={()=>{props.onselect(props.id)}}>+</button>
        <li style={{display:'inline',marginLeft:'10px'}}>{props.text}</li>
    </div>
    </>
    )
}
export default ToDoList;