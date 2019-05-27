import React, { Component } from 'react';

class Order extends Component {
    render(){
        return(
            <div style={{marginTop: 50, marginLeft: 20}}>
                <p style={{color: '#DEDEDE', fontSize: '18px', fontWeight: 'bold'}}>Ordenar por</p>
                <div style={{marginLeft: 10}}>
                    <div className="form-check">
                        <input name="order" type="radio" className="form-check-input" id="exampleCheck4"/>
                        <label className="form-check-label text-white" htmlFor="exampleCheck4">Vote score</label>
                    </div>
                    <div className="form-check">
                        <input name="order" type="radio" className="form-check-input" id="exampleCheck5"/>
                        <label className="form-check-label text-white" htmlFor="exampleCheck5">Data de criação</label>
                    </div>
                </div>      
            </div> 
        )
    }
}

export default Order;