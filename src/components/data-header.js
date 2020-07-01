import React, { Component } from "react"; 

class DataHeader extends Component {
    constructor({ toggleSort }){
        super();
        this.toggleSort = toggleSort;
    }

    render() {
        return (
            <thead>
                <tr>
                    <th>
                        Username
                    </th>
                    <th onClick={this.toggleSort}>
                        Name
                    </th>
                    <th>
                        DOB
                    </th>
                    <th>
                        Age
                    </th>
                </tr>
            </thead>
        );
    }
}

export default DataHeader;