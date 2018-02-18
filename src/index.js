import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import NavBar from './components/navbar';
import './index.css';
import App from './App';
import store from "./store.js";




import registerServiceWorker from './registerServiceWorker';

class Root extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <div>
                    <NavBar />
                    <Switch>
                        <Route path="/" component={App}/>
                        <Redirect to="/" component={App} />
                    </Switch>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<BrowserRouter><Root /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
