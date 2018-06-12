import React, { Component } from 'react'
import {graphql} from 'react-apollo';
import gql from 'graphql-tag'

class AddLink extends Component {
  state = {
    desc: '',
    url: '',
  }

  render() {
    return (
      <div>
        <div>
          <input
            value={this.state.desc}
            onChange={e => this.setState({ desc: e.target.value })}
            placeholder="A description to send to the server"
          />
          <input
            value={this.state.url}
            onChange={e => this.setState({ url: e.target.value })}
            placeholder="A url for our link record"
          />
        </div>
        <button onClick={() => this._addLink()}>Save</button>
      </div>
    )
  }

  _addLink = async () => {
    // More to come
  }
}

export default AddLink