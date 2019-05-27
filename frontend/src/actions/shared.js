import { getAllCategories, getAllPost } from '../utils/api';
import { receiveCategories } from './categories';
import { receivePost } from './posts';
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading())
        return getAllCategories()
            .then((categories) => {
                dispatch(receiveCategories(categories));
            })
            .then(()=>{
                getAllPost()
                    .then((posts)=> {
                        dispatch(receivePost(posts));
                        dispatch(hideLoading());
                    });
            });
    }
}