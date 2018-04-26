import React from 'react';
import ExpenseList from "../components/ExpenseList";
import { connect } from 'react-redux';

class HomeContainer extends React.Component{
    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <ExpenseList expenseList={this.props.expenseList}/>
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

export default connect(mapStateToProps)(HomeContainer);