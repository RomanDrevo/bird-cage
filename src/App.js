import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {inject, observer} from 'mobx-react';
import SingleBird from './SingleBird';
import Drugs from "./Drugs";


@inject('BirdStore')
@observer
class App extends Component {

    handleSubmit(event){
        event.preventDefault();
        // console.log("---", this.bird.value);
        this.props.BirdStore.addBird(this.bird.value);
        this.bird.value = "";
    }

    render() {
        const {BirdStore} = this.props;

        // const birdDetails = BirdStore.birds.map((bird, i)=> <li key={i}>{bird}</li>);
        const birdDetails = BirdStore.birds.map((bird, i)=> <li key={i}><SingleBird bird={bird}  /><button onClick={this.props.BirdStore.deleteBird.bind(this, bird)}>Delete</button></li>);

        return (
        <div className="App">
            !
            <h2>You have {BirdStore.birdCount} birds.</h2>

            <form onSubmit={event => this.handleSubmit(event)}>
                <input type="text" placeholder="Enter bird." ref={input => this.bird = input} />
                <button>Add Bird</button>
            </form>

            <ul>
                {birdDetails}
            </ul>

            <Drugs/>
        </div>
    );
  }
}

export default App;
