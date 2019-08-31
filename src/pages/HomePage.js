import React, { Component, Fragment } from 'react';
import {ProductConsumer} from '../context';
export default class HomePage extends Component {
    render() {
        return (
            <Fragment>
            <ProductConsumer>
                {value=>{
                    console.log(value);
                    return <h1>Hello Homepage</h1>
                }
                }
            </ProductConsumer>
            </Fragment>
        )
    }
}
