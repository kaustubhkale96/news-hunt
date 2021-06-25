import axios from "axios"
let data = null
export const registerUser = async(username,email,password,roles) => {
    await axios.post(`https://final-mern-server.herokuapp.com/api/auth/signup`,{username,email,password,roles})
    .then(res=>{
        
        data = res
    })
    .catch(err=>{
        console.log(err)
    })
    return data
}