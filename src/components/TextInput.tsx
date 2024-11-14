


import { forwardRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
const TextInput = forwardRef<
  HTMLInputElement,
  {
    error?: string;
    name:string;
  }
>(({ error,name, ...rest }) => {
  return (

        <div className="grid grid-cols-4 w-full justify-center items-center">
        <label  htmlFor={name} className='col-span-1 text-lg'>{name}</label>
        <div className="w-full">
        <input
        {...rest}
        className="bg-gray-50 ml-2 p-1 border rounded-md col-span-3 text-lg "
        id={name}
      />
 <p className="text-red-500 ml-2 text-sm text-nowrap">{error}</p> 
        </div>
    
      
    </div>
   

  );
});

export default TextInput;
