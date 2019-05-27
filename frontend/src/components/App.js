import React, { Fragment } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Dashboard from './Dashboard';

class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }
  render(){
    return (
      <Fragment>
        <LoadingBar style={{backgroundColor: '#612F74', height: '5px'}}/>
        <div>
          {this.props.loadingBar.default !== 0 
            ? null
            : <Dashboard/>
          }                    
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ loadingBar }){
  return {
    loadingBar
  }
}

export default connect(mapStateToProps)(App);
