import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

const Navbar = () => {
    return (
        <nav>
            <div className="flex p-5 text-white justify-between items-center bg-gray-800">
                <div className="nav-logo">
                    <h1>Work Manager</h1>
                </div>
                <div className="nav-items hidden md:block">
                    <ol className='flex gap-20 '>
                        <li>Home</li>
                        <li>Add Task</li>
                        <li>Show Task</li>
                    </ol>
                </div>
                <div className="nav-actions flex gap-5">
                    <Button asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button  variant="secondary" asChild>
                        <Link href="/signup">Signup</Link>
                    </Button>
                    <div className="flex md:hidden ui-sheet">
                        <Sheet>
                            <SheetTrigger><Menu /></SheetTrigger>
                            <SheetContent >
                                <SheetDescription></SheetDescription>
                                <SheetTitle>Work Manager</SheetTitle>
                                <ol className=''>
                                    <li>Home</li>
                                    <li>Add Task</li>
                                    <li>Show Task</li>
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