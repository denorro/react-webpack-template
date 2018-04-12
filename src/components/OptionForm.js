class OptionForm extends React.Component {
    constructor(){
        super();
        this.state={}
    }

    render(){
        return (
            <form>
                <fieldset>
                    <legend>Enter Your Next Option</legend>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter an option..." />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-block" />
                    </div>
                </fieldset>
            </form>
        )
    }
}
export default OptionForm;