import React, {Component} from 'react';
import Slogan from '../../../public/slogan.png'

export default class HomePage extends Component {
    render() {
        return ( <div className='content-mid'>
            <h1>Home</h1>
            <div className='slogan'>
            <img  alt="Slogan"src={Slogan}/>
            </div>
            </div>
        )
    }
}