import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
class PublicNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            loading: false
        }
    }
    componentDidMount() {
        const getNews = async () => {
            await axios.get(`https://final-mern-server.herokuapp.com/api/news`)
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
        console.log(this.state)
    }
    Delete = (e) => {
        e.preventDefault()
    }
    render() {
        const news = this.state.news
        return (
            <React.Fragment>
                <div>
                    {news.map((item) => (
                        <div class="flex flex-row justify-between item-center">
                            <div class="py-4 px-20 bg-blue-100 bg-opacity-80 shadow-lg rounded-lg my-14 w-4/5 mx-auto">
                                <div>
                                    <h2 class="text-gray-800 text-3xl font-bold">{item.title}</h2>
                                    <div class="justify-end m-1">
                                        <p class="text-sm text-indigo-500 font-semibold">{item.author}</p>
                                        <p class="text-grey-600 text-xs">{item.published}</p>
                                    </div>
                                    <p class="m-4 text-gray-600 text-lg">{item.news}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default withRouter(PublicNews);