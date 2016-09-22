


export const todoListAsynsReducer = (state = {}, action) => {

    switch (action.type) {
      case 'FORM_SUBMIT':
        return [
        ...state,
          {
            text: action.data
          }
        ]
        break;
      default:
        return state;
    }

    return state;

}
