"use client"
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import TaskImage from '@/assets/task.png'
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
import { UserContext } from '@/context/userContext'
import { Loader } from 'lucide-react'

const TaskForm = () => {
    const { user } = useContext(UserContext)
    const [loading, setLoading] = useState(false)

    const form = useForm({
        defaultValues: {
            title: "",
            content: "",
            status: "pending",
        },
    })

    const onSubmit = async (data: any) => {
        data["userId"] = user?._id
        console.log(data, 'data', user._id)
        if (data?.title?.length > 0 && data?.content?.length > 0) {
            setLoading(true)
            try {
                const response = await taskService.addTask(data);
                if (response.status) {
                    toast.success(response.message);
                } else {
                    toast.error(response.message);
                }
            } catch (error) {
                console.error('Failed to add task:', error);
            } finally {
                setLoading(false)
            }
        } else {
            toast.error("Enter correct details.")
        }
    }

    return (
        <section className='flex flex-col items-center justify-center my-5 md:flex-row-reverse'>

            <div className=''>
                <Image priority={true} src={TaskImage} alt='Task Image' width={500} height={500} />
            </div>

            <div className='flex items-center justify-center w-full px-1 md:w-[500px]'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5">
                        <h3 className='text-3xl my-5 text-center font-extrabold'>Add your task here</h3>
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
                                            <SelectItem value="pending">Pending</SelectItem>
                                            <SelectItem value="complete">Completed</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button disabled={loading} className='w-full' type="submit">
                            {loading ? <p className='flex items-center'>wait... <span className='animate-spin' ><Loader /></span></p> : 'Add Task'}
                        </Button>                    
                        </form>
                </Form>

            </div>
        </section>
    )
}

export default TaskForm