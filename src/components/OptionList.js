import OptionDetail from "./OptionDetail";

class OptionList extends React.Component {
    constructor(){
        super();
        this.state = {
            optionList: [
                'Fly to Vegas',
                'Go hiking on the Appalachians Mountains',
                'Just sit at home',
                'Go visit family in Texas',
                'Go to the library and read a book a day.'
            ]
        }
    }

    renderOptionList(){
        return this.state.map( option => <OptionDetail option={option} />)
    }

    render(){
        return (
            <div className="list-group">
                {this.renderOptionList()}
            </div>
        )
    }
}
export default OptionList;