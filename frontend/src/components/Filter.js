import React, { Component } from 'react';
import Categories from './Categories';
import Order from './Order';

class Filter extends Component {
    render(){
        return(
            <div className="p-2 border" style={{width: '25%', height: '450px', margin: 25, backgroundColor: '#612F74', padding: 15, borderRadius: 5}}>
                <h5 style={{textAlign: 'center', color: '#FFF', marginTop: 25}}>
                    Filtrar resultados
                    <hr color="#FFF" style={{marginTop: 30}}/>   
                </h5>    
                <Categories/>  
                <Order/>                  
            </div>
        )
    }
}

export default Filter;