


export const weatherAsynsReducer = (state = {}, action) => {

    switch (action.type) {
      case 'FORM_SUBMIT':
        console.log('weather reducer');
        break;
      default:
        return state;
    }

    return state;

}
