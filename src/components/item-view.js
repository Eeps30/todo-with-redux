import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getSingleItem, deleteItem, getList } from './actions';
import { Link } from 'react-router-dom';

class ItemView extends Component {
    constructor(props){
        super(props)

        this.handleDelete = this.handleDelete.bind(this)
    }
    
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.getSingleItem(id);
    }

    handleDelete(){
        const { id } = this.props.match.params;
        deleteItem(id);
        this.props.history.push('/');
    }
    
    render(){
        const { item } = this.props;
        const { id } = this.props.match.params
        return(
            <div>
                <Link className="btn" to="/">View Full List</Link>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
                <button onClick={this.handleDelete}>Delete Item</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        item: state.list.singleItem
    }
}

export default connect(mapStateToProps, { getSingleItem: getSingleItem, deleteItem: deleteItem, getList: getList })(ItemView);