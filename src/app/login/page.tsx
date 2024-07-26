"use client"
import Image from 'next/image'
import React from 'react'
import LoginImage from '@/assets/login.png'
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
import { toast } from 'react-hot-toast';
import userService from '@/services/userService'
import { useRouter } from 'next/navigation'


const Login = () => {
    const router = useRouter()

    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (data: any) => {
        try {
            const response = await userService.login(data);
            toast.success("Login Sucessfully !!");
            router.push('/')
        } catch (error: any) {
           toast.error(error.response.data.message)
        }
    }

    return (
        <section className='flex flex-col items-center justify-center my-5 md:flex-row-reverse'>

        <div className=''>
            <Image priority={true} src={LoginImage} alt='Task Image' width={500} height={500} />
        </div>

        <div className='flex items-center justify-center w-full px-1 md:w-[500px]'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5">
                <h3 className='text-3xl my-5 text-center font-extrabold'>Login here</h3>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button className='w-full' type="submit">Login</Button>
                </form>
            </Form>

        </div>
    </section>
    )
}
export default Login