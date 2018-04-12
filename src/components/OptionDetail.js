class OptionDetail extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <a href="#" className="list-group-item list-group-item-action">{props.option}</a>
        )
    }
}
export default OptionDetail;