import React from "react";

class TwitterMessage extends React.Component {
  
  
  
  constructor(props) {
    super(props);

    this.state = {
      remChars: props.maxChars,
      message: ""
    };
  }


  handleChange = (e) => {
    let currentVal = e.target.value
    this.setState(pState => {
      return {
        remChars: this.props.maxChars - currentVal.length,
        message: currentVal
      }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={e => this.handleChange(e)}/>
        <p>Remaining Characters: {this.state.remChars}</p>
        <p>Message so far: {this.state.message}</p>
      </div>
    );
  }
}

export default TwitterMessage;
