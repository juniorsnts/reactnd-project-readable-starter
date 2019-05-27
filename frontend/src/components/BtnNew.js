import React from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

const ButtonNew = () => {
    return(
        <button className="position-fixed text-white"
            style={{
            background: '#612F74', 
            bottom: 25, 
            right: 25,
            borderRadius: 15,
            padding: 8
            }}>
                <IoIosAddCircleOutline size={35} style={{marginRight: 5}}/>
                Novo Post
        </button>
    )
}

export default ButtonNew;