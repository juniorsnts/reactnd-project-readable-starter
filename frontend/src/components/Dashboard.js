import React, { Component } from 'react';
import Filter from './Filter';
import ButtonNew from './BtnNew';
import Posts from './Posts';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render(){
        return(
            <div className="d-flex flex-row" style={{marginTop: 30}}>
              <Filter/>
              <div className="p-2 d-flex flex-column align-items-center" style={{width: '100%'}}>
                { this.props.postsPosition.map((position)=>(
                    <Posts key={position} position={ position }/>
                )) }
              </div>
              <ButtonNew/>
            </div>
        )
    }
}

function mapStateToProps({ posts }){
    return {
        postsPosition: Object.keys(posts)
            .sort((a,b)=> posts[b].voteScore - posts[a].voteScore)
    }
}
export default connect(mapStateToProps)(Dashboard);