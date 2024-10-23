"use client"
import Record from "@/components/record";
import axios from "axios";
import { set } from "mongoose";

import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

export default function Home() {

  const [title,setTitle]= useState("");
  const [desc,SetDesc]= useState("");
  const [data,setData]= useState([]);
 

  

  // const notify = () => toast.success("indrasena");

  const titleHandleChange =(e) =>{
    setTitle(e.target.value);
    console.log(title);
  }

  const descHandleChange =(e) =>{
    SetDesc(e.target.value);
  }

  
 

  const submitHandler = async  (e) => {
    e.preventDefault();
    

    try {

      const formData = {
        title:title,
        description:desc
      }
      setTitle("");
      SetDesc("");
      const response = await axios.post('/api',formData);
      await dataFetching();
      toast.success(response.data.mes);
    } catch (error) {
      
      toast.error(error.message);
    }

  }


  const dataFetching = async  () => {
    try {
      const response = await axios.get('/api');
      setData(response.data.todos)
    } catch (error) {
      
      toast.error(error.message);
    }

  }

  
  const todoDelete = async  (id) => {
    try {
      await axios.delete('/api',{params:{mongoId:id}});
      await dataFetching();
      toast.success("Todo Deleted");
    } catch (error) {
      
      toast.error(error.message);
    }

  }

  
  const todoComplete = async  (id) => {
    try {
      await axios.put('/api',{},{params:{mongoId:id}});
      await dataFetching();
      toast.success("Todo completed");
    } catch (error) {
      
      toast.error(error.message);
    }

  }


  
  

  useEffect(() => {
    dataFetching();
   
  }, []);
  

  
  return (
   <div className="flex justify-center flex-col" >
    <ToastContainer/>
    <form  onSubmit={submitHandler} className="flex justify-center flex-row border-4 border-red-500 ">
      <div className="flex justify-center flex-col w-1/4">
       <input type="text" placeholder="title" required id="name" name="name" value={title} onChange={titleHandleChange} className=" border-2 border-black-500 w-1/1 mt-4 p-2"/>
        <textarea placeholder="description" required id="description" name="description" value={desc} onChange={descHandleChange} className="border-2 border-black-500 w-1/1 mt-2 p-2 h-10" />
        <button className="bg-orange-500 w-1/2 rounded-sm h-9 mt-2">Add</button>
      </div>
    </form>

    <div>
     <Record data={data} todoDelete={todoDelete} todoComplete={todoComplete}/>
     </div>
    
  </div>     
  );
}
