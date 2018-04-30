import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class indexPage extends Component {
    static getInitialProps(context) {
        //executes on server, can be used to initialize settings, fetch data from db etc.
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ appName: 'Super App' });
            }, 1000)
        })

        return promise;
    }

    render() {
        return (
            <div>
                <h1>The main pageof {this.props.appName}</h1>
                <p>Go to <Link href="/auth">Auth</Link></p>
                <button onClick={() => { Router.push('/auth') }}>Go to Auth</button>
            </div>)
    }
}

export default indexPage;