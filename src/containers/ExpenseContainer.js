import React, {Component} from 'react';
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from '../components/ExpenseList';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import {addExpense} from "../actions/expenses";

class ExpenseContainer extends Component {
    constructor(props){
        super(props);
        this.submitExpense = this.submitExpense.bind(this);
    }

    submitExpense(expense){
        this.props.addExpense(expense);
    }


    toggleNewOrEditForm(){
        if(undefined !== this.props.location && this.props.location.pathname.contains('/expense/edit')){
            return <ExpenseForm id={this.props.match.params.id}/> ;
        }
        else {
            return <div>
                <div className="card card-body bg-secondary">
                    <ExpenseForm submitExpense={this.submitExpense} />
                </div>
                <hr/>
                <br/>
                <ExpenseList expenseList={this.props.expenseList}/>
            </div>;
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

const mapStateToProps = state => {
    console.log(state);
    return {
        expenseList: state.expenses.expenseList
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addExpense: addExpense
    }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ExpenseContainer);