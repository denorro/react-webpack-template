import React, { Component } from 'react';

class ExpenseForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.id ? props.id : null
        }
    }

    render(){
        return (
            <div>
                <form>
                    <fieldset>
                        <legend>Add Expense</legend>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Expense Name..." />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Expense Total Cost..." />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary btn-block" />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}
export default ExpenseForm;