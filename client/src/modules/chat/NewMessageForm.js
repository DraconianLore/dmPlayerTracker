import React from 'react';
const WSURL = process.env.REACT_APP_BASEURL
const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};


class NewMessageForm extends React.Component {
  state = {
    text: '',
    chat_id: this.props.chat_id
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ chat_id: nextProps.chat_id });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(`${WSURL}messages`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(this.state)
    });
    this.setState({ text: '' });
  };

  render = () => {
    return (
      <div className="newMessageForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Message:</label>
          <br />
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  };
}

export default NewMessageForm;