import React from 'react';
import {GrSend} from 'react-icons/gr'

const Form = ({handleTask}) => {
    return (
      <form action="" onSubmit={(e)=>handleTask(e)} className="space-y-1 bg-white rounded">
        <div className="relative ">
        <input type="text" name="task" placeholder="add task..." className="w-full rounded py-2 px-5 text-sm text-left focus:outline-none text-gray-800" />
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 ">
                <button type="submit" className="p-1 focus:outline-none focus:ring">
                <GrSend />
                </button>
            </span>
        </div>

    </form>
       
    
     
    );
};

export default Form;