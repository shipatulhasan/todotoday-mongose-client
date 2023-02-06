import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Task from "./components/Task";
import toast from 'react-hot-toast'

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [update,setUpdate] = useState(false)
  useEffect(() => {
    fetch("http://localhost:5000/task")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [update]);

  const handleTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const task = form.task.value;

    // fetch api
    fetch(`http://localhost:5000/task`, {
      method: "post",
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify({task}),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdate(!update)
        toast.success('task added successfully')

      })
      .catch((error) => console.error(error.message));

    // console.log(task)
  };

  const handleDelete = (data)=>{
    const permit = window.confirm(`would you like to delete ${data?.task}`)
    if(permit){
      fetch(`http://localhost:5000/task/${data._id}`, {
      method: "delete"
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdate(!update)
        toast.success('successfully deleted')

      })
      .catch((error) => console.error(error.message));
    }
  }

  return (
    <div className="w-96 space-y-3">
      <Form handleTask={handleTask} />
      <div>
        {
            tasks.map(item=><Task item={item} key={item._id} handleDelete={handleDelete} />)
        }
        
      </div>
    </div>
  );
};

export default Todo;
