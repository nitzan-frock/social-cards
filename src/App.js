import React, { Component } from 'react';
import './App.css';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider/lib/Slider';
import Cards from './components/Cards';

class App extends Component {
  state = {
    cards: [],
    numberOfCards: 1,
  }

componentDidMount() {
    console.log("in component did mount");
    this.initCards(this.state.numberOfCards, 0);
  }

  initCards = (numberOfCards, value) => {
    console.log("in initCards");
    console.log("   numberOfCards: " + numberOfCards);
    console.log("   value: " + value);
    let cardsToAdd = 0;
    // if the number of cards already in the DOM are less than the new value of the slider then add the number of 
    // cards that is the difference between the two.
    if (numberOfCards === 1) {
      this.addCards(numberOfCards);
    }
    else if (value > numberOfCards) {
      cardsToAdd = value - numberOfCards;
      console.log(value+"-"+numberOfCards+"="+cardsToAdd);
      console.log(cardsToAdd);
      this.addCards(cardsToAdd);
    }
    else if (numberOfCards > value) {
      let cardsToRemove = numberOfCards - value;
      console.log("   cardsToRemove: " + cardsToRemove);
      this.removeCards(cardsToRemove);
    }
  }

  addCards = (num) => {
    console.log("number of cards to add: " + num);
    const image = ["https://picsum.photos//600/217/?random", "https://picsum.photos/g/600/217/?random"];
    for (let i = 0; i < num; i++) {
      fetch("https://randomuser.me/api/")
      .then(results => {
          return results.json();
      }).then(data => {
          let portrait = data.results.map(pic => {
              return pic.picture.medium;
          });
          let name = data.results.map(name => {
              // uppercase first letter of first and last name
              let first = name.name.first[0].toUpperCase() + name.name.first.substr(1);
              let last = name.name.last[0].toUpperCase() + name.name.last.substr(1);;
              let fullName = first + " " + last;
              return fullName;
          });
          let interestImage = image[Math.floor(Math.random()*2)];
  
          this.setState(prevState => {
            let cards = [...prevState.cards];
            let card = {
              portrait: portrait, 
              name: name,
              image: interestImage
            }
            cards.push(card);
            return {
              cards: cards
            }
          });
      });
    }
    console.log("   "+num+" cards added.");
  }

  removeCards = (num) => {
    this.setState(prevState => {
      let cards = [
        ...prevState.cards
      ];
      for (let i = 0; i < num; i++) {
        cards.pop();
      }
      return {
        cards: cards
      }
    });
    console.log(num +" cards removed");
  }

  sliderChanged = (value) => {
    console.log("in sliderChanged");
    console.log("value");
    console.log(value);
    let numberOfCards = this.state.numberOfCards;
    console.log("numberofCards");
    console.log(numberOfCards);
    this.initCards(numberOfCards, value);
    this.setState({
      numberOfCards: value
    });
  }

  render() {
    let cards = (
      <Cards 
        cards={this.state.cards} />
    );
    
    return (
      <div className="App">
        <div className="Slider">
          <Slider min={1} max={20} defaultValue={1} onAfterChange={this.sliderChanged}/>
        </div>
        {cards}
      </div>
    );
  }
}

export default App;
