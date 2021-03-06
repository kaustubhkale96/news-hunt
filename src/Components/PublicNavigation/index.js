import React from 'react'
import {Link} from 'react-router-dom'
export default function PublicNavigation() {
    return (
        <React.Fragment>
            <nav class="flex items-center justify-between flex-wrap bg-purple-500 bg-opacity-80 p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <Link to="/" class="font-semibold text-xl tracking-tight">News Hunt</Link>
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow">
                        <a href="/about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            About Us
                        </a>
                        <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            All News
                        </a>
                    </div>
                    <div class="px-20 flex space-x-8 justify-end">
                        <Link to="/login" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:bg-blue-400 mt-4 lg:mt-0">Login</Link>
                        <Link to="/register" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:bg-green-400 mt-4 lg:mt-0">Register</Link>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}
