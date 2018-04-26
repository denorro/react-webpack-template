import React, { Component } from 'react';

class ExpenseList extends Component {
    constructor(props){
        super(props);
    }

    renderExpenseList(){
        const list = this.props.expenseList.map( expense =>
            <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>${expense.cost}</td>
                <td>{expense.description}</td>
                <td>{expense.creationDate}</td>
                <td>{expense.updateDate}</td>
            </tr>
        );
        return list;
    }


    render(){
        return (
            <div>
                <div className="text-center">
                    <h1>Expense List</h1>
                </div>
                <div>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Expense Name</th>
                                <th>Cost</th>
                                <th>Description</th>
                                <th>Creation Date</th>
                                <th>Last Modified Date</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.renderExpenseList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ExpenseList;