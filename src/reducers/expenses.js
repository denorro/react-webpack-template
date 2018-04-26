const defaultState = {
    expenseList: [
        {
            id: 1,
            name: 'Expense 1',
            cost: 6453.53,
            description: 'N/A',
            creationDate: 'December 29, 1987 5:18 AM',
            updateDate: 'December 29, 1987 5:18 AM'

        },
        {
            id: 2,
            name: 'Expense 2',
            cost: 6453.53,
            description: 'N/A',
            creationDate: 'December 29, 1987 5:18 AM',
            updateDate: 'December 29, 1987 5:18 AM'

        },
        {
            id: 3,
            name: 'Expense 2',
            cost: 6453.53,
            description: 'N/A',
            creationDate: 'December 29, 1987 5:18 AM',
            updateDate: 'December 29, 1987 5:18 AM'

        }
    ],
    goodMessages: [],
    badMessages: [],
    warningMessages:[],
    notifications: []
}

export default ( state = defaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
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
            return state;
    }
}
