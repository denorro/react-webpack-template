import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NotFoundContainer from "./containers/NotFoundContainer";
import HomeContainer from "./containers/HomeContainer";
import './styles/styles.scss';

class App extends React.Component {

    constructor(){
        super();
    }

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                    <Route path="*" component={NotFoundContainer} />
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));