import React, { Component } from 'react';
import './App.css';
import Comment from './components/Comment';
import List from './components/List'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''

        }
       this.items = [
           { value: 'PHP Sucks' , id: 0},
           { value: 'WordPress belongs in a retirement home', id: 1 },
           { value: 'API driven methods are the future.', id: 2 }
           
       ];     
    }

handleInputChange = (value) => {
    this.setState({ name: value });
}
 
   render() {
    return (
        <div>
            <h1>JAMstack</h1>
            <input
            placeholder="What is your Stack?"
            value={this.state.name}
            onChange={(event) => this.handleInputChange(event.target.value)}
            />
            <List items={this.items} />
        <Comment
        author={ {name: this.state.name, avatarUrl: 'https://dbushell.com/images/blog/2020/netlify-logo.png' } }
         text='The JAMstack method is where PWA is headed for the foreseeable future'    
        />
        </div>
        
    );
   }
    
}


export default App;
