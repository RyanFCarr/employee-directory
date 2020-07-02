import React, { Component } from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

class DataHeader extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>
                        Username
                    </th>
                    <th onClick={this.props.toggleSort}>
                        Name &nbsp;
                        {this.props.sortDirection === "ASC" ? (<FontAwesomeIcon icon={faAngleUp} />) : (<FontAwesomeIcon icon={faAngleDown} />)}
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