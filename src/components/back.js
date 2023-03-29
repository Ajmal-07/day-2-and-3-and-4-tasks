import b2 from "../assets/b2.mp4"

import React, { Component } from 'react'

export default class Back extends Component {
  render() {
    return (
      <div className="back " style={{
        height :1000
        
      }}>
        <video id='video' autoPlay loop muted>
          <source src={b2} type='video/mp4' />
        </video>
      </div>
    )
  }
}

