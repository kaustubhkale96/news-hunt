import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import { registerUser } from '../../apis/registerUser'
export default function Register() {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [email, setEmail] = useState(null)
    const roles = ['user', 'user']
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { addToast } = useToasts()

    const handleInputChange = (e) => {
        const target = e.target
        const name = target.name
        if (name === 'username') { setUsername(target.value) }
        if (name === 'password') { setPassword(target.value) }
        if (name === 'email') { setEmail(target.value) }
    }

    const submitData = async () => {
        try {
            const data = await registerUser(username, email, password, roles)
            if(data.status = 200) {
                addToast('User registered successfully!', { appearance: "success", autoDismiss: 1500})
                setTimeout(() => {
                    window.location.replace('/login')
                },1500)
            }
        }
        catch (e) {
            console.log(e)
            addToast('Something went wrong',{appearance:'error'})
        }
    }
    return (
        <form onSubmit={handleSubmit(submitData)}>
            <div class="flex flex-col mt-20">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-blue-300 bg-opacity-60 px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="mb-8 text-3xl text-center font-semibold">Register User</h1>

                        <input {...register('username', { required: true })} onChangeCapture={handleInputChange} type="text" class="block border border-grey-light w-full p-3 rounded mb-4" name="username" placeholder="Username" />
                        <p class="text-red-500">{errors.username && "Username is required"}</p>
                        <input {...register('email', { required: true })} onChangeCapture={handleInputChange} type="email" class="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" />
                        <p class="text-red-500">{errors.email && "Email is required"}</p>
                        <input {...register('password', { required: true })} onChangeCapture={handleInputChange} type="password" class="block border border-grey-light w-full p-3 rounded mb-4" name="password" placeholder="Password" />
                        <p class="text-red-500">{errors.password && "Password is required"}</p>

                        <button type="submit" class="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-700 focus:outline-none my-1">Create Account</button>

                        <div class="text-center text-sm text-grey-dark mt-4 space-x-2">
                            By signing up, you agree to the
                            <a href="/" class="no-underline border-b border-grey-dark text-grey-dark"> Terms of Service </a>
                            and
                            <a href="/" class="no-underline border-b border-grey-dark text-grey-dark">Privacy Policy</a>
                        </div>
                        <div class="flex mt-6 space-x-2 justify-center">
                            <p>Already have an account?</p>
                            <Link to="/login" class="underline text-indigo-800">Login</Link>.
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
