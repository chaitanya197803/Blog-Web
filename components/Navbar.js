import React from 'react'
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { HamIcon } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"



const Navbar = () => {
    return (
        <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur">
            <div className="container mx-auto flex justify-between border-b pb-6 items-center">
                <Link href={"/"}><div className="text-lg font-bold">
                    Chaitanya / Blog
                </div></Link>

                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" >Home</Link>
                    <Link href="/about" >About</Link>
                    <Link href="/blog" >Blog</Link>
                    <Link href="/contact" >Contact</Link>
                    <div>
                        <Button variant="outline" className="mx-1">Login</Button>
                        <Button variant="outline" className="mx-1">Signup</Button>
                    </div>
                </div>

                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <button className="focus:outline-none">
                                {/* Add a hamburger icon here if desired */}
                                {/* ☰ */}
                                <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-76h7"></path>
                                </svg>
                            </button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="font-bold my-4">Chaitanya | Blog</SheetTitle>
                                <SheetDescription>
                                    <div className="flex flex-col gap-6 ">
                                        <Link href="/" >Home</Link>
                                        <Link href="/about" >About</Link>
                                        <Link href="/blog" >Blog</Link>
                                        <Link href="/contact" >Contact</Link>
                                        <div>
                                            <Button variant="outline" className="mx-1">Login</Button>
                                            <Button variant="outline" className="mx-1">Signup</Button>
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;

