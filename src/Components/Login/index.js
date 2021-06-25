import React, { Component } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/loginUserAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const notify = () => {
  toast.success("Login Successful !", { autoClose: 1500 })
}
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false
    }
  }

  onHandleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  Login = (e) => {

    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.setState({
      loading: true
    })

    const user = {
      username: username,
      password: password
    }
    this.props.loginUser(user)
  }
  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.update()
    }
  }
  update() {
    if (sessionStorage.getItem('user_id')) {
      notify();
      window.location.replace('/dashboard')
    }
    else {

      this.setState({
        loading: true
      })
      setTimeout(() => {
        this.update()
      }, 3000)
    }
  }
  render() {
    const button = this.state.loading === true
      ?
      <button class="spinner"></button>
      :
      <button onClick={this.Login} type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          {/* <!-- Heroicon name: solid/lock-closed --> */}
          <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
          </svg>
        </span>
        Sign in
      </button>
    return (
      <div id="login" class="flex items-center justify-center mt-20 py-10 px-4 sm:px-6 lg:px-8">
        <div class="bg-blue-300 bg-opacity-60 px-6 py-8 rounded shadow-md max-w-md w-full space-y-8">
          <div>
            <img class="w-20 h-20 object-cover rounded-full border-2 border-black-500 mx-auto" src="https://www.kumulos.com/wp-content/uploads/2018/05/User-Retention-Image.jpg" alt="Workflow" />
            <h2 class="mt-4 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form class="mt-8 space-y-6" action="#" method="POST">
            {/* <input type="hidden" name="remember" value="true"/> */}
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input name="username" onChange={this.onHandleInputChange} type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" onChange={this.onHandleInputChange} type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
            </div>

            <div>
              {button}
              <ToastContainer />
            </div>
            <div class="flex mt-6 space-x-2 justify-center">
              <p>Don't have an account?</p>
              <Link to="/register" class="underline text-indigo-800">Register</Link>.
            </div>
          </form>
        </div>
      </div>
    )
  }
}
const MapStatetoProps = (state) => ({ data: state.data })
const MapDispatchtoProps = { loginUser: loginUser }
export default connect(MapStatetoProps, MapDispatchtoProps)(Login);