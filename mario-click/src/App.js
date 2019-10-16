import React, {Component} from 'react';
import './App.css';
import Wrapper from './components/wrapper/Wrapper';
import Card from './components/Card/Card';
import cards from './cards.json';

class App extends Component{

  state ={
   cards,
    score: 0,
    highscore: 0
  }

  render() {
    return(
      <Wrapper>
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
