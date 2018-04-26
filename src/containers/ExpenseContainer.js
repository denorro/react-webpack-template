import React, {Component} from 'react';
import ExpenseForm from "../components/ExpenseForm";

class ExpenseContainer extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    toggleNewOrEditForm(){
        if(this.props.location.pathname === '/expense/new'){
            console.log('new form');
            return <ExpenseForm />;
        }
        else {
            console.log('edit form');
            return <ExpenseForm id={this.props.match.params.id}/>;
        }
    }

    render(){
        return (
            <div>
                {this.toggleNewOrEditForm()}
            </div>
        )
    }
}
export default ExpenseContainer;