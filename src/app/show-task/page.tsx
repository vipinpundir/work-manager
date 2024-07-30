"use client"
import { UserContext } from '@/context/userContext';
import taskService from '@/services/taskService';
import React, { useContext, useEffect, useState } from 'react'

const ShowTask = () => {
  const { user } = useContext(UserContext)
  const [tasks, setTasks] = useState(null)

  const fetchTasks = async (userId: string) => {
    try {
      const response = await taskService.getTasksOfUserId(userId);
      setTasks(response?.data?.reverse())
    } catch (error) {
      
    }
  }

  useEffect(() => {
    if (user) {
      fetchTasks(user._id)
    }
  }, [user])
 
  // Date formate like 01 Jan 2024
  function formatDate(addedDate) {
    const date = new Date(addedDate);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);

    return formattedDate;
}

  return (
    <section className='md:w-3/5 m-auto '>
      <p className='text-3xl font-semibold'>Your tasks ({tasks?.length}) </p>
      {tasks?.map((task) => (
        <div key={task._id} className={`text-white p-2 mt-3 rounded-md ${task.status == 'complete' ? "bg-green-800" : "bg-gray-800"}`}>
          <h3 className='text-xl font-semibold mb-1' >{task.title}</h3>
          <p>{task.content}</p>
          <span className='flex justify-between'>
            <p>Status: <strong>{task.status}</strong> </p>
            <p>Date: <strong>{formatDate(task.addedDate)}</strong> </p>
          </span>
        </div>
      ))}
    </section>
  )
}

export default ShowTask