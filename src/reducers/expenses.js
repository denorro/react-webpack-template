
const defaultState = {
    expenseList: [],
    currentSelectedExpense: '',
    goodMessages: [],
    badMessages: []
}

export default ( state = defaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            try{
                const newList = [...state.expenseList, action.expense];
                localStorage.setItem('@issueList', JSON.stringify(newList));
                console.log(JSON.parse(localStorage.getItem('@issueList')));
            }
            catch(error){
                state.badMessages.push('Error saving issue to storage!');
            }
            return {
                ...state,
                expenseList:[...state.expenseList, action.expense]

            }
        case 'REMOVE_EXPENSE':
            return {
                ...state,
                expenseList: state.expenseList.filter( (id) => id != action.id)
            }
        case 'EDIT_EXPENSE':
            return state.map(expense => {
               if(expense.id === action.id){
                   return {
                       ...expense,
                       ...action.updates
                   }
               }
               else {
                   return expense
               }
            });
        default:
            let savedList = [];
            const value = localStorage.getItem('@issueList');
            if(value !== null){
                savedList = JSON.parse(value);
                state = {
                    ...state,
                    expenseList: [...savedList]
                };
            }
            return state;
    }
}
