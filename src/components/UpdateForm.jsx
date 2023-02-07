import React from 'react';
import {GrSend} from 'react-icons/gr'

const UpdateForm = ({existingItem,handleUpdate,isOpen,setIsOpen}) => {

    return (
        <div
        className="fixed inset-0 z-10 overflow-y-auto bg-gray-800/50"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          ></span>
  
          <div className="relative inline-block px-4 pt-5 pb-4  text-left align-bottom transition-all transform bg-white border border-black rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <div>
              <div
                onClick={() => setIsOpen(false)}
                className="absolute -top-3 -right-5 border border-khaki bg-black h-10 w-10 text-center  rounded-full p-2 font-bold text-white hover:cursor-pointer"
              >
                X
              </div>
  
              <div className="mt-2 text-center">
              <form action="" onSubmit={(e)=>handleUpdate(e,existingItem._id)} className="space-y-1 bg-white rounded border-b-2 border-black">
              <div className="relative ">
                  <input type="text" name="task" defaultValue={existingItem?.task} placeholder="add task..." className="w-full rounded py-2 px-2 text-sm text-left focus:outline-none text-gray-800" />
                  
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 ">
                      <button type="submit" className="p-1 focus:outline-none focus:ring">
                      <GrSend />
                      </button>
                  </span>
              </div>
      
          </form> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateForm;

    
