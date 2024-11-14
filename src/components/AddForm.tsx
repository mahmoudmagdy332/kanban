import React, { useState } from 'react'
import TextInput from './TextInput';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { form } from '../types/type';
import useAddMemberHook from '../utils/hooks/useAddMemberHook';

const AddForm = () => {
    const [isopen,setIsOpen]=useState(false);
    const {
        handleSubmit,

        formState: { errors },
        control,
      } = useForm<form>();
      const {makeRequest, data, isLoading, error,success}=useAddMemberHook();
      const onSubmit: SubmitHandler<form> = (data) => {
        makeRequest(data)
      };
  return (
    <div>
        <button onClick={()=>setIsOpen(true)} className="py-2 px-3 rounded-md bg-black text-white text-nowrap  text-lg">Add Card</button>
          
          <div className={`${isopen?'flex':'hidden'} absolute w-screen h-screen left-0 top-0 `}>
            <div className='absolute z-10 w-screen h-screen bg-black opacity-20' onClick={()=>setIsOpen(false)}></div>
            <form onSubmit={handleSubmit(onSubmit)} className="h flex flex-col gap-4 m-8 absolute z-20 w-80 bg-white rounded-lg p-4 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
              <div className='flex justify-center '> 
              <p className='font-semibold mb-2'>Form</p>
              </div>
          <Controller
                  rules={{
                    required: "title Name is required",
                  }}
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <TextInput {...field} error={errors?.title?.message} name="Title"/>
                  )}
                />
             <Controller
                  rules={{
                    required: " Name is required",
                  }}
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextInput {...field} error={errors?.name?.message} name="Name"/>
                  )}
                />
                 <Controller
                  rules={{
                    required: " Name is required",
                  }}
                  name="age"
                  control={control}
                  render={({ field }) => (
                    <TextInput {...field} error={errors?.age?.message} name="Age"/>
                  )}
                />
         <Controller
                  rules={{
                    required: " Name is required",
                  }}
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextInput {...field} error={errors?.email?.message} name="Email"/>
                  )}
                />
                
                <Controller
                  rules={{
                    required: " Name is required",
                  }}
                  name="mobile"
                  control={control}
                  render={({ field }) => (
                    <TextInput {...field} error={errors?.mobile?.message} name="Phone"/>
                  )}
                />
    
          <button type='submit' className="bg-black text-white p-2 rounded-md mt-4">
            Submit
          </button>
        </form>
          </div>
         
    </div>
  )
}

export default AddForm