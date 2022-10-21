import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ErrorViewImg from './ErrorView';
// import ImageAPI from '../services/image-api';
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
      this.setState({ loading: true });
      // this.setState({ status: 'pending', page: 1, images: [] });
    }
    if (prevPage !== nextPage) {
      this.fetchImages(nextName, nextPage);
    }

    fetch(
    `https://pixabay.com/api/?q=${this.imageName}&page=1&key=29802518-7a19817c952422887bb4d93d8&image_type=photo&orientation=horizontal&per_page=12&page=${this.page}`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      if (response.totalHits === 0) {
        return Promise.reject(new Error());
      }
    })

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

  handleSearchbarSubmit = imageName => {
    this.setState({ imageName, images: [], page: 1 });
  };

  loadMore() {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        {this.state.status === 'idle' && <p>Enter your search request</p>}
        {/* {this.state.loading && <Loader />} */}
        {this.state.status === 'pending' && <Loader />}
        {this.state.status === 'rejected' && (
          <ErrorViewImg message={this.message} />
        )}
        {this.state.status === 'resolved' && (
          <>
            <ImageGallery images={this.state.images} />
            <Button onClick={this.loadMore} />
          </>
        )}
        <ToastContainer autoClose={3000} theme="colored" />
        {/* {this.state.images.length !== 0 && <Button loadMore={this.loadMore} />}
        <ToastContainer autoClose={3000} theme="colored" /> */}
      </div>
    );
  }
}
 