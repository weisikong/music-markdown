import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

import { transpose } from '../redux/actions';
import { updateColumnCount } from '../redux/actions';
import { updateFontSize } from '../redux/actions';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleTransposeClick = this.handleTransposeClick.bind(this);
    this.handleColumnClick = this.handleColumnClick.bind(this);
    this.handleFontClick = this.handleFontClick.bind(this);

    this.increase = '+1';
    this.decrease = '-1';
  }

  handleTransposeClick(event) {
    // TODO: Update history with new transposeAmount
    this.props.transpose(event.target.textContent === this.increase);
  }

  handleColumnClick(event) {
    // TODO: Update history with new columnCount
    this.props.updateColumnCount(event.target.textContent === this.increase);
  }

  handleFontClick(event) {
    // TODO: Update history with new fontSize
    this.props.updateFontSize(event.target.textContent === this.increase);
  }

  render() {
    // TODO: Move dark theme to redux store.
    return (
      <ButtonToolbar className='border justify-content-center bg-dark'>
        <span className='padding bg-dark text-light my-auto'>Transpose</span>
        <ButtonGroup>
          <Button variant='dark' onClick={this.handleTransposeClick}>{this.decrease}</Button>
          <Button variant='dark' onClick={this.handleTransposeClick}>{this.increase}</Button>
        </ButtonGroup>
        <span className='padding bg-dark text-light my-auto'>Columns</span>
        <ButtonGroup>
          <Button variant='dark' onClick={this.handleColumnClick}>{this.decrease}</Button>
          <Button variant='dark' onClick={this.handleColumnClick}>{this.increase}</Button>
        </ButtonGroup>
        <span className='padding bg-dark text-light my-auto'>Font Size</span>
        <ButtonGroup>
          <Button variant='dark' onClick={this.handleFontClick}>{this.decrease}</Button>
          <Button variant='dark' onClick={this.handleFontClick}>{this.increase}</Button>
        </ButtonGroup>
      </ButtonToolbar>
    );
  }
}

export default connect(
  undefined,
  { transpose, updateColumnCount, updateFontSize }
)(Toolbar);
