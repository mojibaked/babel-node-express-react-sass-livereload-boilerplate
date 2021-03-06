import React from 'react'

import Title from './title'

export default class App extends React.Component {

  constructor() {
    super()

    this.state = { frame: 0 }
  }

  componentDidMount() {
    console.log('React mounted!')

    this.draw()
  }

  draw() {
    requestAnimationFrame(::this.draw)
    this.setState({ frame: this.state.frame + 1 })
  }

  render() {
    return (
      <div className='header'>
        <Title text='Hello World!' />
        <p>Framecount: { this.state.frame }</p>
      </div>
    )
  }

}
