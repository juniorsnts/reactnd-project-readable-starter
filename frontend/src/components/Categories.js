import React, { Component } from 'react';
import { connect } from 'react-redux';

class Categories extends Component {
    render(){
        const { categoriesPosition, categories } = this.props;
        return(
            <div style={{marginTop: 25, marginLeft: 20}}>
                {categories.length !== 0 && <p style={{color: '#DEDEDE', fontSize: '18px', fontWeight: 'bold'}}>Categorias</p>}                
                <div style={{marginLeft: 10}}>
                    <div className="form-check">
                        <input type="radio" name="categoria" className="form-check-input" id="All"/>
                        <label className="form-check-label text-white" htmlFor="All">Todas</label>
                    </div> 
                    { categoriesPosition.map((position) => (
                        <div className="form-check" key={position}>
                            <input type="radio" name="categoria" className="form-check-input" id={position}/>
                            <label className="form-check-label text-white" htmlFor={position}>{categories[position].name}</label>
                        </div>
                    )) }
                </div>      
            </div> 
        )
    }
}

function mapStateToProps({ categories }){
    return {
        categoriesPosition: Object.keys(categories),
        categories
    }
}

export default connect(mapStateToProps)(Categories);