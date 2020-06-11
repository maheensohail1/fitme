import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
//hello world

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            uid:'',
            first_name: '',
            last_name: '',
            email: '',
            errors: {}
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            uid: decoded._id,
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        })
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <a href={"/usersessions/"+this.state.uid} className="btn btn-outline-success">My Sessions</a>
                    <a href={"/userdps/"+this.state.uid} className="btn btn-outline-success">My Diet Plans</a>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                        <tr>
                                <td>User ID</td>
                                <td>{this.state.uid}</td>
                            </tr>
                            <tr>
                                <td>First Name</td>
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile