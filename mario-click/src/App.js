import React, {Component} from 'react';
import './App.css';
import Wrapper from './components/wrapper/Wrapper';
import Card from './components/Card/Card';
import cards from './cards.json';
import Header from './components/Header/Header';

class App extends Component{

  state ={
   cards,
    score: 0,
    highscore: 0
  };

  render() {
    return(
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>
            Mario Click
        </Header>
        {this.state.cards.map(card=> (
          <Card
            id={card.id}
            key={card.id}
            image={card.image}
            name={card.name}
          />
        ))}

      </Wrapper>
    );
    }
}
  



export default App;
