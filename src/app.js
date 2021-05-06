import React, { useState } from 'react';
import ToDoList from './ToDoList';

function App(){
   let [inputList,setInputList] = useState("");
   let [items,setItems] = useState([]);

   function itemEvent(event){
       setInputList(event.target.value);
   }

   function addItems(){
       setItems((olditems)=>{
        return [...olditems,inputList];
       });
       setInputList('');
   }

   function deleteItems(id){
     setItems((olditems)=>{
       return olditems.filter((arrElemnt,index)=>{
         return index!==id;
       })
     })
   }

    return(<>
        <div className="main_div">
          <div className="center_div">
            <br/>
              <h1>ToDo List</h1>
              <br/>
                <input type="text" placeholder="Add List Items" value={inputList} onChange={itemEvent}/>
                  <button onClick={addItems}>+</button>
                  <ol>
                    {
                        items.map((item,index)=>{
                            return <ToDoList 
                            text = {item}
                            key={index}
                            id={index}
                            onselect={deleteItems}
                            />;
                        })
                    }
                  </ol>
          </div>
      </div>
      </>)
}
export default App;