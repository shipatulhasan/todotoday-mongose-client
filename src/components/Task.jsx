import React from 'react';
import {BiTrash,BiEdit} from 'react-icons/bi'
const Task = ({item,handleDelete}) => {
    return (
        <div className='flex items-center gap-2 bg-white rounded px-2 mt-3'>
            <div className='flex-1'>
            <h2 className='w-full rounded py-2 px-4 text-sm text-left focus:outline-none text-gray-800'>
            {item?.task}
            </h2>
            </div>
            <div className='flex gap-2 items-center text-black'>
                <BiEdit className='hover:cursor-pointer' />
                <BiTrash className='hover:cursor-pointer' onClick = {()=>handleDelete(item)} />
            </div>
        </div>
    );
};

export default Task;