import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Add } from './components/Add';
import { List } from './components/List';
import { Home } from './components/Home';

export default class AppRouter extends React.Component {

    render() {
        // const { dispatch, currentContacts } = this.props;
        const routes = [
            {
                link: '/home',
                component: Home,
                label: "Home"
            },
            {
                link: '/list',
                component: List,
                label: "List"
            }
        ]

        return (

            <Router>
                <nav>
                    {routes.map((item, index) => {
                        return (
                            <li key={index}><Link to={item.link}>{item.label}</Link></li>
                        )
                    })}

                    {routes.map((item, index) => {
                        return (
                            <Route key={index} path={item.link} component={item.component}></Route>
                        )
                    })}
                </nav>
            </Router>
        )
    };
}
