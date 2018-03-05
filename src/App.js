import React, { Component , Fragment} from 'react';

import HeaderComponent from './components/Header/Header';
import Main from './components/Main/Main';

export default class App extends Component {
    render() {
        return(
            <Fragment>
                <HeaderComponent />
                <Main />
            </Fragment>
        )
    }
}