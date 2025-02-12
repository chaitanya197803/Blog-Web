
import React from 'react'
import Link from 'next/link';

import { HamIcon } from 'lucide-react';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';



const Navbar = () => {
    return (
        <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur z-10">
            <div className="container mx-auto flex justify-between border-b pb-6 items-center">
                <Link href={"/"}><div className="text-lg font-bold md:mx-8">
                    Chaitanya / Blog
                </div></Link>

                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" className='hover:scale-105 hover:font-bold transition-transform duration-300'>Home</Link>
                    <Link href="/about" className='hover:scale-105 hover:font-bold transition-transform duration-300'>About</Link>
                    <Link href="/blog" className='hover:scale-105 hover:font-bold transition-transform duration-300'>Blog</Link>
                    <Link href="/contact" className='hover:scale-105 hover:font-bold transition-transform duration-300'>Contact</Link>
                    <div className='flex items-center'>
                        <Button variant="outline" className="mx-1">Login</Button>
                        <Button variant="outline" className="mx-1">Signup</Button>
                      
                    </div>
                </div>

                <div className="md:hidden">
                    <Sheet>
                        <span className="mx-2">
                         
                        </span>
                        <SheetTrigger>
                            {/* <button className="focus:outline-none"> */}
                            {/* Add a hamburger icon here if desired */}
                            {/* ☰ */}
                            <FontAwesomeIcon icon={faBars} className='h-6 w-6 mx-2 opacity-50 '/>
                            {/* </button> */}
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

