
'use client'
import BlogCard from "./components/ui/BlogCard";
// import { Main } from "next/document";
import Image from "next/image";


export default function Home() {
  return (
    <main>

      {/* main studend section  */}
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:mx-20 lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> of Computer Science <span className="font-semibold underline decoration-primary">Students</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source resources and matriles to <br className="hidden lg:block" /> improve your study, build new projects!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
              <input type="search" name="query" placeholder="Search" required className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />
              <button type="submit" className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" className=" dark:text-black"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

      {/* choose your plan section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto text-center ">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Choose Your Plan</h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Select the plan that fits your needs.</p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Get Start your personal learning with us.</p>
          <div className="mt-10 flex flex-col justify-center items-center md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full max-w-xs p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 ">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Basic</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">$10/month</p>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-700 dark:text-gray-300">✔️ Lectures</li>
                <li className="text-gray-700 dark:text-gray-300">✔️ Projects</li>
                <li className="text-gray-700 dark:text-gray-300">❌ Live Assessment</li>
              </ul>
              <button className="relative inline-flex h-10 m-4 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 px-3 py-1 text-sm font-medium text-gray-900 dark:text-white backdrop-blur-3xl">
                  Let's Start
                </span>
              </button>
            </div>
            <div className="w-full max-w-xs p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 border-4 border-gold hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Standard</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">$20/month</p>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-700 dark:text-gray-300">✔️ Lectures</li>
                <li className="text-gray-700 dark:text-gray-300">✔️ Projects</li>
                <li className="text-gray-700 dark:text-gray-300">✔️ Live Assessment</li>
              </ul>
              <button className="relative inline-flex h-10 m-4 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 px-3 py-1 text-sm font-medium text-gray-900 dark:text-white backdrop-blur-3xl">
                  Let's Start
                </span>
              </button>
            </div>
            <div className="w-full max-w-xs p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Premium</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">$30/month</p>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-700 dark:text-gray-300">✔️ Lectures</li>
                <li className="text-gray-700 dark:text-gray-300">✔️ Projects</li>
                <li className="text-gray-700 dark:text-gray-300">✔️ Live Assessment</li>
              </ul>
              <button className="relative inline-flex h-10 m-4 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 px-3 py-1 text-sm font-medium text-gray-900 dark:text-white backdrop-blur-3xl">
                  Let's Start
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* welcome toour plateform section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white animate-bounce">Welcome to Our Platform!</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Join us and start your learning journey today.</p>
          <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-500 transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Top Blogs  */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white animate-pulse">Top Blogs</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Explore our most popular articles and insights.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example Blog Card */}
            {/* <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
              <Image src="/20943790.jpg"  width={500} height={500} alt="Blog Title 1" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Blog Title 1</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">A brief description of the blog post goes here.</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Read More</button>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
              <img src="path/to/image2.jpg" alt="Blog Title 2" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Blog Title 2</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">A brief description of the blog post goes here.</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Read More</button>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
              <img src="path/to/image3.jpg" alt="Blog Title 3" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Blog Title 3</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">A brief description of the blog post goes here.</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Read More</button>
            </div> */}
          </div>
          <div className="flex flex-row mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer class="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-2 ">
        <div class="w-full max-w-screen-xl mx-auto p-2 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-2 sm:mb-0 space-x-3 rtl:space-x-reverse">
              {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Chaitanya | Blog</span>
            </a>
            <ul class="flex flex-wrap items-center mb-4 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/about" class="hover:underline me-2 md:me-6">About</a>
              </li>
              <li>
                <a href="#" class="hover:underline me-2 md:me-6">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="hover:underline me-2 md:me-6">Licensing</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="/" class="hover:underline">Chaitanya</a>. All Rights Reserved.</span>
        </div>
      </footer>


    </main>
  );
}
