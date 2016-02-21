import React, {Component, PropTypes} from 'react';

const ENTER_KEY = 13;

export default class TodoTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.vlue || ''
    };
  }

  render() {
    const {className, id, placeholder} = this.props;
    return (
      <input
        type="text"
        className={className}
        id={id}
        placeholder={placeholder}
        onBlur={this._save.bind(this)}
        onChange={this._onChange.bind(this)}
        onKeyDown={this._onKeyDown.bind(this)}
        value={this.state.value}
        autoFocus={true}
      />
    );
  }

  _save() {
    this.props.onSave(this.state.value);
    this.setState({value: ''});
  }

  _onChange(e) {
    this.setState({value: e.target.value})
  }

  _onKeyDown(e) {
    if (e.keyCode === ENTER_KEY) {
      this._save()
    }
  }
}

TodoTextInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  value: PropTypes.string
}
