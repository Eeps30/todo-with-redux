import React, { Component } from 'react';
import { getList } from '../components/actions';
import { connect } from 'react-redux';
import index from '../reducers';
import { Link } from 'react-router-dom';

class List extends Component {
    componentDidMount(){
        this.props.getList();
    }
    
    render(){
        
        const itemElements = this.props.list.map((item, index) => {
            return (
                <li key={index} className="collection-item">
                    <Link to={`/item/${item._id}`}>{item.title}</Link>
                </li>
            )
        });

        return(
            <div>
                <div>
                    <Link className="btn left" to="/add-item">Add Item</Link>
                </div>
                <div>
                    <ul className="collection">
                        {itemElements}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        list: state.list.items
    }
}

export default connect(mapStateToProps, {getList: getList})(List);