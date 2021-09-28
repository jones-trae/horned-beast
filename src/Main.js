import {Component} from 'react';
import name from images
import name from images

class Main extends Component {
  render () {
    return (
      <>
        <HornedBeast title={'Rhino'} imgURL={name} decription={'Descriptive block'} />
        <HornedBeast title={'Title'}
      </>
    )
  }
}

class HornedBeast extends Component {
  render () {
    return (
      <>
        <h2>This Horned Beast is {this.props.title}</h2>
        <img src={this.props.imURL} alt='hornedBeast_img' title={this.props.title} />
        <p>{this.props.description}</p>
      </>
    )
  }
}

export default Main;