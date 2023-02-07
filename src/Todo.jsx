import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Task from "./components/Task";
import toast from "react-hot-toast";
import UpdateForm from "./components/UpdateForm";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [existingItem, setExistingItem] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [update, setUpdate] = useState(false);

  console.log(existingItem);

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
        "content-type": "application/json",
      },
      body: JSON.stringify({ task }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdate(!update);
        toast.success("task added successfully");
        form.reset();
      })
      .catch((error) => console.error(error.message));

    // console.log(task)
  };

  // handleUpdate
  const findUpdateItem = (id) => {
    const matched = tasks.find((task) => task._id === id);
    setExistingItem(matched);
    setIsOpen(!isOpen);
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const task = form.task.value;

    // fetch api
    fetch(`http://localhost:5000/task/${id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ task }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdate(!update);
        toast.success("task updated successfully");
        // form.reset()
        setExistingItem(null);
        setIsClicked(false);
      })
      .catch((error) => console.error(error.message));
  };

  // handle delete
  const handleDelete = (data) => {
    const permit = window.confirm(`would you like to delete ${data?.task}`);
    if (permit) {
      fetch(`http://localhost:5000/task/${data._id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          setUpdate(!update);
          toast.success("successfully deleted");
        })
        .catch((error) => console.error(error.message));
    }
  };

  return (
    <div className="w-96 space-y-3">
      <Form handleTask={handleTask} />
      {isOpen && (
        <UpdateForm
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          existingItem={existingItem}
          handleUpdate={handleUpdate}
        />
      )}

      <div>
        {tasks.map((item) => (
          <Task
            item={item}
            key={item._id}
            handleDelete={handleDelete}
            findUpdateItem={findUpdateItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
