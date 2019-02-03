import React from 'react';
import { connect } from 'react-redux';

import './Home.css';

import NewList from './NewList';
import List from './List';


const Home = (props) => (
  <div className='page-container'>
    <NewList />

    { 
        props.list.items.length > 0 && 
            <List list={props.list.list} total={props.total}/>        
        }

  </div>
)

const mapStateToProps = (state) => ({
  list: state.list,
  total: state.list.items.reduce((total, item) => total + item.total, 0),
});

export default connect(mapStateToProps, null)(Home);
