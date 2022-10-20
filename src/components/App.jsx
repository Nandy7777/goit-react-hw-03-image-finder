import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar';
import ImageGalleryItem from './ImageGalleryItem';


export default class App extends Component {
  state = {
    imageName: '',
  };

  handleSearchbarSubmit = imageName => {
    this.setState({imageName})
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        <ToastContainer autoClose={3000} theme="colored" />
        <ImageGalleryItem imageName={this.state.imageName} />
      </>
    );
  }
}
 