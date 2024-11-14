import React from "react";
import Box from "./components/Box";
import { card } from "./types/type";
import AddForm from "./components/AddForm";
import { DndProvider } from  "react-dnd";
import { HTML5Backend } from  "react-dnd-html5-backend";
import DropArea from "./components/DropArea";
import DraggableCard from "./components/DraggableCard ";
const  App=()=> {
  const cards: card[] = [
    { id: 1, title: "Card 1", email: "example@example.com", mobile: "123456789", age: 30, status: "Unclaimed" },
    { id: 2, title: "Card 2", email: "example2@example.com", mobile: "987654321", age: 25, status: "FirstContact" },
];
  return (
    <div className="bg-[#D3E5ED]">
<div className="min-h-screen   p-5 w-10/12 mx-auto">
      <header className="flex  items-center  justify-between text-2xl  mb-8 gap-3">
        <b>Kanban Board</b>
        <AddForm/>
      </header>

      <div className="flex flex-row text-white">
        {/* Form Section */}
      
        
        {/* Kanban Board Section */}
        <DndProvider backend={HTML5Backend}>
          <div className="grid w-full [&>*:first-child]:bg-transparent [&>*:first-child]:border-[#4E94BF] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full   gap-4">
          {/* <Box cards={cards} title='Unclaimed'/>
          <Box cards={cards} title='Unclaimed'/>
          <Box cards={cards} title='Unclaimed'/>
          <Box cards={cards} title='Unclaimed'/> */}
        
          
        <DropArea cards={cards} title="Unclaimed"/>
        <DropArea cards={cards} title="Unclaimed"/>
        {/* <DraggableCard /> */}
        </div> 
          </DndProvider>
      </div>
    </div>
    </div>
    
  );
}

export default App;
