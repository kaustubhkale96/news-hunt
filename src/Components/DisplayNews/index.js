import React, { Component } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const deleteNotify=()=>{
  toast.success("Deleted Successfully !", { autoClose: 1500 })
}
class DisplayNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      loading: false
    }
  }
  componentDidMount() {
    const getNews = async () => {
      await axios.get(`https://final-mern-server.herokuapp.com/api/news/`,{
        params:{
          user_id: sessionStorage.getItem("user_id")
        }
      })
        .then(res => {
          this.setState({
            news: res.data
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
    getNews();
  }
  Delete = (e) => {
    e.preventDefault()
    const id = e.target.id;
    this.setState({
      loading:true,
      news:this.state.news.filter(item=>item.id !==id)
    });
    const DeleteNews = async () => {
      await axios.delete(`https://final-mern-server.herokuapp.com/api/news/${id}`)
      .then(res => {
        deleteNotify();
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
    DeleteNews();
    // setTimeout(() => {
    //   this.props.history.push('dashboard')
    // },500)
  }
  // componentDidUpdate(){
  //   const getNews = async () => {
  //     await axios.get(`https://final-mern-server.herokuapp.com/api/news`)
  //       .then(res => {
  //         // console.log(res.data)
  //         this.setState({
  //           news: res.data
  //         })
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //   }
  //   getNews();
  //   console.log(this.state)
  // }
  
  render() {
    const news = this.state.news
    return (
      <React.Fragment>
        <div>
          {news.map((item) => (
            <div class="flex flex-row justify-between item-center">
              <div class="py-4 px-20 bg-blue-100 bg-opacity-80 shadow-lg rounded-lg my-14 w-4/5 mx-auto">
                <div class="flex justify-center md:justify-end -mt-16">
                  <img class="w-20 h-20 object-cover rounded-full border-2 border-black-500" src="https://image.pngaaa.com/345/1582345-middle.png" alt="user" />
                </div>
                <div>
                  <h2 class="text-gray-800 text-3xl font-bold">{item.title}</h2>
                  <div class="justify-end m-1">
                    <p class="text-sm text-indigo-500 font-semibold">{item.author}</p>
                    <p class="text-grey-600 text-xs">{item.published}</p>
                  </div>
                  <p class="m-4 text-gray-600 text-lg">{item.news}</p>
                </div>
                <div class="px-20 flex space-x-8 justify-end">
                  <Link to={`/edit/${item.id}`} class="text-white text-center bg-blue-600 hover:bg-purple-700 rounded p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-16">Edit</Link>
                  <button id={item.id} onClick={this.Delete} class="text-white bg-red-500 hover:bg-red-600 rounded p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 w-16">Delete</button>
                  <ToastContainer/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}
export default withRouter(DisplayNews);