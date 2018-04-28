import Box from './Box'
import PropTypes from 'prop-types'
import theme, { cx } from './theme'

const Divider = Box.withComponent('hr').extend`
  height: ${props => props.height};
  border: 0;
  border-radius: ${props => props.theme.pill};
  background-color: ${props =>
    cx(props.color || props.borderColor || props.bg || theme.colors.smoke)};
`

Divider.displayName = 'Divider'

Divider.defaultProps = {
  height: '3px',
  mx: 0
}

Divider.propTypes = {
  height: PropTypes.string,
  color: PropTypes.string
}

export default Divider
