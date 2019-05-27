import React, { Component } from 'react';
import { connect } from 'react-redux';
class Posts extends Component{
    render(){
        const { post } = this.props;
        return(
            <div className="p-2 d-flex flex-column align-items-center" style={{width: '100%', marginTop: 10}}>
                <div style={{width: '55%', backgroundColor: '#602F73', height: '150px', borderRadius: 10, padding: 10}}>
                   <span style={{color: '#FFF', fontWeight: 'bold'}}>{post.title}</span>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ posts }, { position }){
    const post = posts[position];
    return {
        post
    }
}

export default connect(mapStateToProps)(Posts);