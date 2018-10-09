import React, { Component } from 'react'

const toggleDecorator = (OriginalComponent) =>
  class ToggleDecorator extends Component {
    state = {
      openItemId: null
    }

    toggleOpenItem = (openItemId) => this.setState({ openItemId })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          toggleOpenItem={this.toggleOpenItem}
          openItemId={this.state.openItemId}
        />
      )
    }
  }

export default toggleDecorator
