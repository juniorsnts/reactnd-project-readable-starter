const logger = (store) => (next) => (action) => {
    console.group(action.type);
        console.log('This action is: ', action);
        const returnValue = next(action);
        console.log('The new state is: ', store.getState());
    console.groupEnd();
    return returnValue;
}   

export default logger;