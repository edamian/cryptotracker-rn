import React , { Component } from 'react';
import Store from './../Store';
import { Provider } from 'react-redux';
import { CryptoContainer, Header } from './../components';

class CryptoScreen extends Component {

    static navigationOptions= {
        title: 'Cryptocurrencies',
        drawerLabel: 'Cryptocurrency behavior'
    };

    render() {
        return (
            <Provider store={Store}>
                <Header/>
                <CryptoContainer />
            </Provider>
        )
    }
}

export default CryptoScreen;