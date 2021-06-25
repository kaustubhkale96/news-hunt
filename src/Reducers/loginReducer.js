import { LOGIN_USER } from '../actions/types'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let data = {
    user_info: ''
}

function loginReducer(state = data, { type, payload }) {
    switch (type) {
        case LOGIN_USER:
            const user_info = {
                user_id: '',
                token: '',
                username: '',
            }
            const username = payload.user.username;
            const password = payload.user.password;
            const showToast =()=>{
                toast.error("Invalid!",{ autoClose: 1500 })
            }

            const login = async () => {
                await axios.post(`https://final-mern-server.herokuapp.com/api/auth/signin`, { username, password })
                    .then(res => {
                        // console.log(res.data)
                        user_info.user_id = res.data.id;
                        user_info.username = res.data.username;
                        user_info.token = res.data.token;

                        sessionStorage.setItem('user_id', res.data.id)
                        sessionStorage.setItem('username',res.data.username)
                        // console.log(sessionStorage.getItem('user_id'))
                    })
                    .catch(err => {
                        showToast()
                        // alert('User not found!', err);
                        window.location.reload('/');
                    })
            }
            login();
            return {
                ...state,
                user_info: user_info
                
            }

        default:
            return state
            
    }
}
export default loginReducer;