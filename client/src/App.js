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

let options = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      lastguess: null,
      score: 0,
      topscore: 0,
      options: options
    }
  }

  handleclick = e => {
    let currscore = this.state.score
    if (e.target.id === this.state.lastguess) {
      if (this.state.score >= this.state.topscore) {
        this.setState({
          topscore: this.state.score,
          score: 0,
          lastguess: null
        })
      } else {
        this.setState({ 
          score: 0, 
          lastguess: null
        })
      }
    } else {
      currscore += 1
      this.setState({
        lastguess: e.target.id,
        score: currscore
      })
    }
    shuffle(options)
  }

  render () {
  return (
    <div className="App">
      <Header topscore={this.state.topscore} score={this.state.score} />
      {this.state.options.map(option => (
        <img src={option} id={option} className="image" onClick={this.handleclick} />
      ))}
    </div>
  )
  }
}

export default App
