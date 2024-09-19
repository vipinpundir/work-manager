"use client"
import React, { useContext } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"
import { CircleUserRound, House, ListPlus, Menu, NotebookTabs } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserContext } from '@/context/userContext'
import logo from '@/assets/logo.png'
import Image from 'next/image'
const Navbar = () => {

    const context = useContext(UserContext)
    return (
        <nav>
            <div className="flex p-2 md:p-3 text-white justify-between items-center bg-gray-800">
                <div className="nav-logo flex items-center gap-1">
                    <Image src={logo} alt='demo' width={50} height={50} />
                    <Link href="/"><h1>Work Manager</h1></Link>
                </div>
                <div className="nav-items hidden md:block">
                    <ol className='flex gap-20 '>
                        <Link href="/">Home</Link>
                        <Link href="/add-task">Add Task</Link>
                        <Link href="/show-task">Show Task</Link>
                    </ol>
                </div>
                <div className="nav-actions flex gap-5 items-center">
                    {context?.user ? <> <p className='hidden md:flex' >{context?.user?.name}</p> <CircleUserRound size={36} /></>
                        : <>
                            <Button asChild>
                                <Link href="/login">Login</Link>
                            </Button>
                            <Button variant="secondary" className='hidden md:flex' asChild>
                                <Link href="/signup">Signup</Link>
                            </Button></>}
                    <div className="flex md:hidden ui-sheet">
                        <Sheet>
                            <SheetTrigger><Menu size={36} /></SheetTrigger>
                            <SheetContent >
                                <SheetDescription></SheetDescription>
                                <SheetTitle className='mb-3 text-sm' >
                                    <CircleUserRound size={36} />
                                    {context?.user ? <><p>Name: {context?.user?.name} </p>
                                        <p>Email:{context?.user?.email} </p></> : 'login to see more details.'}
                                </SheetTitle>
                                <ol className='flex flex-col gap-2' >
                                    <li>
                                        <SheetClose asChild>
                                            <Link className='flex gap-1' href="/">
                                                <House /> Home
                                            </Link>
                                        </SheetClose>
                                    </li>
                                    <li>
                                        <SheetClose asChild>
                                            <Link className='flex gap-1' href="/add-task">
                                                <ListPlus /> Add Task
                                            </Link>
                                        </SheetClose>
                                    </li>
                                    <li>
                                        <SheetClose asChild>
                                            <Link className='flex gap-1' href="/show-task">
                                                <NotebookTabs /> Show Task
                                            </Link>
                                        </SheetClose>
                                    </li>
                                </ol>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar