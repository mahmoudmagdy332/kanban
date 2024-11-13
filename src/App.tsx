import React from "react";
import Box from "./components/Box";

const  App=()=> {
  const cards=[{  id:1,
    title:'string',
    email:'string',
    mobile:'strin',
    age:12,
    status:'Unclaimed'}]
  return (
    <div className="min-h-screen  bg-[rgb(211,229,237)] p-5">
      <header className="flex flex-col items-center justify-center text-2xl text-white mb-8">
        <b>Kanban Board</b>
      </header>

      <div className="flex flex-row text-white">
        {/* Form Section */}
        <div className="flex flex-col gap-4 m-8">
          <b>Form</b>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              className="ml-2 p-1 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="ml-2 p-1 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              className="ml-2 p-1 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              className="ml-2 p-1 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="ml-2 p-1 border rounded-md"
            />
          </div>

          <button className="bg-blue-500 text-white p-2 rounded-md mt-4">
            Submit
          </button>
        </div>
        
        {/* Kanban Board Section */}

          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full   gap-4">
          <Box cards={cards}/>
          <Box />
          <Box/>
          <Box/>
            {/* <div className="flex-1">
              <b>First Contact</b>
              <div className="bg-blue-500 border border-white h-full mt-2"></div>
            </div>
            <div className="flex-1">
              <b>Preparing Work Offer</b>
              <div className="bg-blue-500 border border-white h-full mt-2"></div>
            </div>
            <div className="flex-1">
              <b>Send to Therapists</b>
              <div className="bg-blue-500 border border-white h-full mt-2"></div>
            </div> */}
          </div>

      </div>
    </div>
  );
}

export default App;
