import React, { Component } from 'react'
import DisplayNews from '../DisplayNews'
import NotFound from '../404'
class Dashboard extends Component {
    render() {
        const Dashboard = sessionStorage.getItem('user_id')
            ? <DisplayNews />
            : <NotFound />
        return (
            <React.Fragment>
                {Dashboard}
            </React.Fragment>
        )
    }
}
export default Dashboard;