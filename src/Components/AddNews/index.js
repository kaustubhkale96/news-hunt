import axios from 'axios';
import React, { Component } from 'react'
import NotFound from '../404'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const addNotify=()=>{
    toast.success("News Saved !", { autoClose: 1500 })
  }
class AddNews extends Component {
    state = {
        title: '',
        news: '',
        author: '',
        published: '',

        loading: false
    }
    onHandleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })
    }
    Submit = (e) => {
        e.preventDefault()
        this.setState({ loading: true })
        const title = this.state.title;
        const news = this.state.news;
        const author = this.state.author;
        const published = this.state.published;
        const uploadedby = sessionStorage.getItem('user_id')
        const addNews = async () => {
            await axios.post(`https://final-mern-server.herokuapp.com/api/news`, { title, news, author, published, uploadedby })
                .then(res => {
                    addNotify();
                    // console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        addNews();
        setTimeout(() => { this.props.history.push('/dashboard') }, 3000)
    }
    render() {
        const button = this.state.loading === true ?
            <button class="spinner p-4"></button> :
            <button onClick={this.Submit} class="w-full px-3 py-3 text-white bg-indigo-500 hover:bg-indigo-700 rounded-full focus:bg-indigo-600 focus:outline-none">Upload</button>

        return (
            <React.Fragment>
                {sessionStorage.getItem('user_id') ?

                    <div class="flex items-center min-h-screen">
                        <div class="container mx-auto">
                            <div class="max-w-md mx-auto my-10 bg-blue-300 bg-opacity-60 p-5 rounded-md shadow-l">
                                <div class="text-center">
                                    <h1 class="my-3 text-3xl font-semibold text-gray-700 underline">Upload News</h1>
                                </div>
                                <div class="m-7">
                                    <form>
                                        <div class="mb-6">
                                            <label for="name" class="block mb-2 text-l text-gray-700">News Title</label>
                                            <input name="title" onChange={this.onHandleInputChange} id="name" placeholder="John Doe" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-400 focus:border-indigo-500 " />
                                        </div>
                                        <div class="mb-6">
                                            <label class="block mb-2 text-l text-gray-700">News Source</label>
                                            <input name="author" onChange={this.onHandleInputChange} placeholder="you@company.com" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-400 focus:border-indigo-500 " />
                                        </div>
                                        <div class="mb-6">

                                            <label class="block mb-2 text-l text-gray-700">Select Date</label>
                                            <input name="published" onChange={this.onHandleInputChange} placeholder="dd/mm/yyyy" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-400 focus:border-indigo-500 " />
                                        </div>
                                        <div class="mb-6">
                                            <label for="message" class="block mb-2 text-l text-gray-700">Article:</label>

                                            <textarea name="news" onChange={this.onHandleInputChange} placeholder="Your Article..." class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-400 focus:border-indigo-500 "></textarea>
                                        </div>
                                        <div class="mb-4 space-y-4">
                                            {button}
                                            <button class="w-full px-3 py-3 text-white bg-red-500 hover:bg-red-700 rounded-full focus:bg-red-600 focus:outline-none"><a href='/dashboard'>Cancel</a></button>
                                            <ToastContainer/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <NotFound />
                }
            </React.Fragment>
        )
    }
}
export default AddNews;