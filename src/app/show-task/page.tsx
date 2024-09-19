"use client"
import { Button } from '@/components/ui/button';
import { UserContext } from '@/context/userContext';
import taskService from '@/services/taskService';
import { TaskData } from '@/types';
import { CircleCheckBig, Clock7, X } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ShowTask = () => {
  const { user } = useContext(UserContext)
  const [tasks, setTasks] = useState([])

  const fetchTasks = async (userId: string) => {
    try {
      const response = await taskService.getTasksOfUserId(userId);
      setTasks(response?.data?.reverse())
    } catch (error) {

    }
  }

  const deleteTask = async (userId: string) => {
    try {
      const response = await taskService.deleteTask(userId);
      toast.success(response?.data?.message)
      if (user) {
        fetchTasks(user._id)
      }
    } catch (error) {

    }
  }

  useEffect(() => {
    if (user) {
      fetchTasks(user._id)
    }
  }, [user])

  // Date formate like 01 Jan 2024
  function formatDate(addedDate: Date): string {
    const date = new Date(addedDate);

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };

    const formattedDate = date.toLocaleDateString('en-GB', options);

    return formattedDate;
  }

  return (
    <section className='md:w-3/5 m-auto'>
      <p className='text-3xl font-semibold'>Your tasks ({tasks.length}) </p>
      {tasks?.map((task: TaskData) => (
        <div key={task._id} className='flex items-center gap-5'>
        <div className={`text-white p-2 mt-3 rounded-md w-full ${task.status == 'complete' ? "bg-green-800" : "bg-gray-800"}`}>
         <div className="flex justify-between">
         <h3 className='text-xl font-semibold mb-1'>{task.title}</h3> 
         <span onClick={()=>deleteTask(task._id)} className='flex justify-center items-center cursor-pointer bg-gray-950 rounded-full h-7 w-7'><X size={18}/></span>
         </div>
          <p>{task.content}</p>
          <span className='flex justify-between'>
            <p className='flex items-center' >Status: <strong className='mr-1' >{task.status}</strong> {task.status == 'complete' ? <CircleCheckBig size={20} />  : <Clock7 size={20} />} </p>
            <p>Date:<strong>{formatDate(task.addedDate)}</strong> </p>
          </span>
        </div>
        </div>
      ))}
    </section>
  )
}

export default ShowTask