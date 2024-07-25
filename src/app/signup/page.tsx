"use client"
import Image from 'next/image'
import React from 'react'
import SignupImage from '@/assets/signup.svg'
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
import { Textarea } from "@/components/ui/textarea"
import { toast } from 'react-hot-toast';
import userService from '@/services/userService'

const Signup = () => {

    const form = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            about: '',
            profileURL: '',
        },
    })

    const onSubmit = async (data: any) => {
        try {
            const response = await userService.signup(data);
            if (response.status){
                toast.success("User is registered !!");
            }else{
                toast.error("Failed to create user");
            }
        } catch (error) {
            console.error('Internal server error', error);
        }
    }

    return (
        <section className='flex flex-col items-center justify-evenly my-5 gap-5 md:flex-row'>

        <div className='border'>
            <Image priority={true} src={SignupImage} alt='Task Image' width={600} height={500} />
        </div>

        <div className='flex items-center justify-center w-full md:w-[500px]'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5">
                <h3 className='text-3xl my-5 text-center font-extrabold'>Signup here</h3>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

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

                    <FormField
                        control={form.control}
                        name="profileURL"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Profile URL</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your profile URL" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="about"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>About</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Tell us about yourself" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <Button className='w-full' type="submit">Signup</Button>
                </form>
            </Form>

        </div>
    </section>
    )
}
export default Signup