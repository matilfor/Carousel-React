import React, { Component } from 'react';
import Arrows from './arrows';
import Images from './images';

class Carousel extends Component{
    constructor(){
        super()
        this.state = {
            position: 0,
            imgs: [
                "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781",
				"https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
				"https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
				"https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
                "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
            ]
        }
    }
    previousImg(){
        if(this.state.position === 0){
            this.setState({
                position: this.state.imgs.length-1
            })
        } else {
            this.setState({
                position: this.state.position-1
            })
        }
    }
    nextImg(){
        if(this.state.position === this.state.imgs.length-1){
            this.setState({
                position: 0
            })
        } else {
            this.setState({
                position: this.state.position+1
            })
        }
    }
    render(){
        return(
            <div className='carousel'>
                <Images image={this.state.imgs[this.state.position]} />
                <Arrows onPrev={() => this.previousImg()} onNext={() => this.nextImg()} />
            </div>
        )
    }
}

export default Carousel