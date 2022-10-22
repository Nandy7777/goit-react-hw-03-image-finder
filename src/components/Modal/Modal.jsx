import { Component } from 'react';
import { Overlay, ModalImg } from './Modal.styled';

export default class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;

    return (
      <Overlay onClick={this.handleClickBackdrop}>
        <ModalImg>
          <img src={largeImageURL} alt={tags} loading="lazy" />
        </ModalImg>
      </Overlay>
    );
  }
};