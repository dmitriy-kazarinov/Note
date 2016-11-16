import React from 'react'
import getStyles from './styles'

class Title extends React.Component {
  render () {
    const styles = getStyles()
    const textTitle = this.props.text
    const textStrong = this.props.strong

    return (
      <div style={
        textStrong ? styles.titleBold : {}
      }>
        {textTitle}
      </div>
    )
  }
}

Title.propTypes = {
  text: React.PropTypes.string.isRequired,
  strong: React.PropTypes.bool
}

export default Title
