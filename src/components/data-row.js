import React, { Component } from "react";
import moment from "moment";

class DataRow extends Component {
    constructor({ user }){
        super();
        this.user = user;
    }
    render() {
        return (
            <tr>
                <td>
                    {this.user.email}
                </td>
                <td>
                    {`${this.user.name.first} ${this.user.name.last}`}
                </td>
                <td>
                    {moment(this.user.dob.date).format("MMM Do YYYY")}
                </td>
                <td>
                    {this.user.dob.age}
                </td>
            </tr>
        );
    }
}

export default DataRow;