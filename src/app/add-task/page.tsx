"use client"
import Image from 'next/image'
import React from 'react'
import TaskImage from '@/assets/task.svg'
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import taskService from '@/services/taskService'
import { toast } from 'react-hot-toast';


const TaskForm = () => {

    const form = useForm({
        defaultValues: {
            title: "",
            content: "",
            status: "Pending",
        },
    })

    const onSubmit = async (data: any) => {
        try {
            const response = await taskService.addTask(data);
            if (response.status){
                toast.success(response.message);
            }else{
                toast.error(response.message);
            }
        } catch (error) {
            console.error('Failed to add task:', error);
        }
    }

    return (
        <section className='shadow max-w-screen-sm	 m-auto my-4 p-3'>
            <h3 className='text-3xl mb-5 text-center font-extrabold'>Add your task here</h3>
            <Image priority={true} src={TaskImage} alt='Task Image' width={200} height={200} className='m-auto' />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-2">

                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Content</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Content" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Status</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Pending">Pending</SelectItem>
                                        <SelectItem value="Completed">Completed</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Add Task</Button>
                </form>
            </Form>

        </section>
    )
}

export default TaskForm