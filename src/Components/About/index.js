import React from 'react'
export default function About() {
    return (
        <React.Fragment>
            <div class="min-h-screen bg-indigo-900 bg-opacity-60 py-6 flex flex-col justify-center sm:py-12">
                <div class="flex space-x-4 px-4 justify-around">
                    {/* <!-- CARD --> */}
                    <div class="bg-gradient-to-t from-black via-purple-900 to-blue-700  h-80 w-full md:w-96 md:rounded-3xl rounded-lg shadow-md relative flex flex-col items-center justify-between md:items-start py-5 md:p-5 transition-all duration-150">
                        {/* <!-- IMG PROFILE --> */}
                        <img class="rounded-full w-16 h-16 shadow-sm absolute -top-8 transform md:scale-110 duration-700" src="https://w7.pngwing.com/pngs/738/965/png-transparent-web-development-web-design-software-development-web-developer-web-design-blue-angle-web-design.png" alt="" />

                        {/* <!-- TEXTS --> */}
                        <div class="transform md:rotate-0 align-middle text-2xl font-semibold text-gray-200 text-center m-auto md:m-0 md:mt-8">Kaustubh Kale</div>
                        <ul class="text-lg text-gray-300 font-light md:block">
                            <li>Web Developer</li>
                            <li>HTML, CSS, ReactJS, NodeJS, MongoDB...</li>
                            <li>INDIA ❤</li>
                        </ul>

                        {/* <!-- links --> */}
                        <div class="flex w-full justify-around">
                            <a href="https://www.linkedin.com/in/kaustubh-kale-6b28a5165" rel="noopener noreferrer" target="_blank">
                                <img class="rounded-full w-16 h-16" src="https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/linkedin-512.png" alt="LinkedIn" />
                            </a>
                            <a href="https://github.com/kaustubhkale96" rel="noopener noreferrer" target="_blank">
                                <img class=" rounded-full w-16 h-16" src="https://img.favpng.com/4/20/21/github-computer-icons-icon-design-png-favpng-KaDTwuHWgG8D1qn47QW2hK7Gj.jpg" alt="Github" />
                            </a>
                            <a href="https://www.instagram.com/_kaustubh_kale/" rel="noopener noreferrer" target="_blank">
                                <img class="rounded-full w-16 h-16" src="https://image.similarpng.com/very-thumbnail/2020/05/Glossy-Instagram-logo-PNG.png" alt="Insta" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
