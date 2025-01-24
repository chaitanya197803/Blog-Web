
import Image from 'next/image'
import React from 'react'

export default function BlogCard() {
    return (
        <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
                <Image src="/20943790.jpg" width={500} height={500} alt="Blog Title 1" className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white m-5">Blog Title 1</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">A brief description of the blog post goes here.</p>
            </div>
        </div>
    )
}
