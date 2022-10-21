import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ErrorViewImg from './ErrorView/ErrorView';
import ImageAPI from '../services/image-api';
import Button from './Button';
import {Loader} from './Loader/Loader';

export default class App extends Component {
  state = {
    imageName: '',
    images: [],
    error: null,
    status: 'idle',
    tags: null,
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imageName;
    const nextName = this.state.imageName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ status: 'pending', page: 1, images: [] });
      this.fetchImages(nextName, nextPage);
    }
    if (prevPage !== nextPage) {
      this.fetchImages(nextName, nextPage);
    }
  }

  fetchImages(nextName, nextPage) {
    ImageAPI.fetchImages(nextName, nextPage)
      .then(data => {
        if (data.total === 0) {
          return this.setState({
            status: 'rejected',
            images: [],
            loading: false,
          });
        }
        this.setState(prevState => {
          return {
            prevState,
            images: [...prevState.images, ...data.hits],
            status: 'resolved',
            imageSearch: nextName,
          };
        });
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  }

  handleSearchbarSubmit = name => {
    this.fetchImages(name, this.state.page);
  };

  loadMore = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };
  
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        {this.state.status === 'idle' && <p>Enter your search request</p>}
        <ImageGallery images={this.state.images} />
        {this.state.status === 'pending' && (<Loader />)}
        {this.state.status === 'rejected' && <ErrorViewImg />}
        {this.state.status === 'resolved' && (<Button loadMore={this.loadMore} />)}
        <ToastContainer autoClose={3000} theme="colored" />
      </div>
    );
  }
}
 