import { useState } from "react";
import './style.css'
function Imp(){

    let timeFn=new Date();
    //let time=String(`${timeFn.getHours()}:${timeFn.getMinutes()}:${timeFn.getSeconds()}`);
    let time=new Date().toLocaleTimeString(); 
   
    
    let [list,setList]=useState([

        {task:"reading",time:time},
        {task:"sleeping",time:time}
            
    ])

    let [task,setTask]=useState("");



    let addTask=()=>{

        if(task!==""){
            setList([...list,{task:task,time:time}]);
        }
        
        else{
            alert("enter a task");
        }
        setTask("");

        
    }

    let remove=(index)=>{

       

        setList(list.filter((temp,ind)=>
            ind!==index
        ));

    }

    return <>

        <input type="text" 
        
        value={task}

        onChange={

            (event)=>setTask(event.target.value)
            
            }/>
        <button onClick={addTask}>add</button>

        {

            list.map(({task,time},index)=>(

                <li key={index}>

                    <input type="checkbox"/>
                    
                    <span className="task">{task}</span>

                    <span>{time}</span>
                    
                    <button onClick={()=>remove(index)}>
                        remove
                    </button>
                
                </li>
               
            ))
        }

    </>
  
}

export default Imp;