
class App extends React.Component {

    render(){
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="text-center">Welcome to the Undecisive App!</h1>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));