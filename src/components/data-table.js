import React, { Component, Fragment } from "react";
import DataHeader from "./data-header";
import DataRow from "./data-row"; 

class DataTable extends Component {
    state = {sort: "ASC", filter: ""};

    constructor({ DB }) {
        super();
        this.DB = DB;
    }

    toggleSort = () => {
        this.state.sort === "ASC" ? this.setState({ sort: "DESC"}) : this.setState({ sort: "ASC"});
    }

    sortUsers = (a,b) => {
        if(this.state.sort === "ASC") {
            if(a.name.first.toLocaleLowerCase() < b.name.first.toLocaleLowerCase()) {
                return -1;
            } else if(a.name.first.toLocaleLowerCase() > b.name.first.toLocaleLowerCase()) {
                return 1;
            } else {
                return 0;
            }
        } else {
            if(a.name.first.toLocaleLowerCase() < b.name.first.toLocaleLowerCase()) {
                return 1;
            } else if(a.name.first.toLocaleLowerCase() > b.name.first.toLocaleLowerCase()) {
                return -1;
            } else {
                return 0;
            }
        }
    }

    filterUsers = user => `${user.name.first.toLowerCase()} ${user.name.last.toLowerCase()}`.includes(this.state.filter.toLowerCase());

    render() {
        return (
            <Fragment>
                <h4>Search for user:</h4>
                <input className="mt-3" placeholder="search name" onChange={(event) => this.setState({filter: event.target.value})}></input>
                <table className="table table-striped mt-3">
                    <DataHeader sortDirection={this.state.sort} toggleSort={this.toggleSort}/>
                    <tbody>
                        {this.DB.users
                            .filter(this.filterUsers)
                            .sort(this.sortUsers)
                            .map(user => (<DataRow user={user} key={user.email}/>))}
                    </tbody>
                </table>  
            </Fragment>
        );
    }
}

export default DataTable;