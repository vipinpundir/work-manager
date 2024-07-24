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
                        <Link href="/">Home</Link>
                        <Link href="/add-task">Add Task</Link>
                        <Link href="/show-task">Show Task</Link>
                    </ol>
                </div>
                <div className="nav-actions flex gap-5">
                    <Button asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button variant="secondary" asChild>
                        <Link href="/signup">Signup</Link>
                    </Button>
                    <div className="flex md:hidden ui-sheet">
                        <Sheet>
                            <SheetTrigger><Menu /></SheetTrigger>
                            <SheetContent >
                                <SheetDescription></SheetDescription>
                                <SheetTitle>Work Manager</SheetTitle>
                                <ol>
                                    <li> <Link href="/">Home</Link> </li>
                                    <li> <Link href="/add-task">Add Task</Link> </li>
                                    <li> <Link href="/show-task">Show Task</Link></li>
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