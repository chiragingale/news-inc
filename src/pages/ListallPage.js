import React from 'react';
import { connect } from 'react-redux';
import NewsCard from '../components/NewsCard';
import { params } from '../utils/conf';
import getQuery from '../utils/getQuery';
import { getList } from '../actions/getList';
import '../css/listall.css';

class ListallPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentWillMount(){
        let paramobj = {
            ...params,
            type: 'top-headlines',
            country: 'in'
        }
        let query = getQuery(paramobj);
        this.props.dispatch(getList(query));
    }

    render(){
        return(
            <div className='listall'>
                {this.props.articles.listData.map((item, key)=>{
                    return(
                        <NewsCard key={key} article={item} />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        articles: store.getListReducer
    }  
}

export default connect(mapStateToProps)(ListallPage);