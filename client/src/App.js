import React, {Component} from 'react';
import './App.css';
import shuffle from 'shuffle-array'
import Header from './component/header'
import Pic1 from './assets/626.png'
import Pic2 from './assets/624.png'
import Pic3 from './assets/625.png'
import Pic4 from './assets/619.png'
import Pic5 from './assets/617.png'
import Pic6 from './assets/609.png'
import Pic7 from './assets/606.png'
import Pic8 from './assets/604.png'
import Pic9 from './assets/502.png'
import Pic10 from './assets/501.png'
import Pic11 from './assets/303.png'
import Pic12 from './assets/300.png'
import { Shake } from 'reshake'

let options = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      guess: [],
      score: 0,
      topscore: 0,
      options: options,
      correct: true,
      header: 'Pick your experiment to begin'
    }
  }

  handleclick = e => {
    let currscore = this.state.score
    let guessarr = this.state.guess
    if (guessarr.indexOf(e.target.id) !== -1) {
      if (this.state.score >= this.state.topscore) {
        this.setState({
          topscore: this.state.score,
          score: 0,
          guess: [],
          correct: false,
          header: 'Wrong Choice!'
        }, _ => console.log(this.state.guess))
      } else {
        this.setState({ 
          score: 0, 
          guess: [],
          correct: false,
          header: 'Wrong Choice!'
        }, _ => console.log(this.state.guess))
      }
    } else {
      currscore += 1
      guessarr.push(e.target.id)
      this.setState({
        guess: guessarr,
        score: currscore,
        correct: true,
        header: 'Correct!'
      }, _ => console.log(this.state.guess.length))
    }
    shuffle(options)
  }

  handlecorrectguess = _ => {
    if (this.state.correct) {
      return (
        <div className="container">
          {this.state.options.map(option => (
            <img src={option} id={option} className="image" onClick={this.handleclick} />
            ))}
        </div>
      )
    } else {
      return (
        <div className="container">
          <Shake 
          h={5}
          v={5}
          r={3}
          dur={300}
          int={10}
          max={100}
          q={1}
          fixed={true}
          fixedStop={false}
          freez={false}>
            {this.state.options.map(option => (
              <img src={option} id={option} className="image" onClick={this.handleclick} />
              ))}
        </Shake>
      </div>
      )
    }
  }
  render () {
  return (
    <div className="App">
      <Header topscore={this.state.topscore} score={this.state.score} header={this.state.header} />
      {this.handlecorrectguess()}
    </div>
  )
  }
}

export default App
