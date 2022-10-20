import { Component } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  state = {
    image: null,
    loading: false,
}

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      console.log('change name')
      console.log('prevProps.imageName:', prevProps.imageName);
      console.log('this.props.imageName:', this.props.imageName);

      this.setState({ loading: true });

      fetch(
        `https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=29802518-7a19817c952422887bb4d93d8&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json)
        .then(image => this.setState({ image })).finally(() => this.setState({loading: false}))
    }
  
}

  render() {
    const { webformatURL, tegs } = this.props;
     return (
       <GalleryItem>
         <GalleryItemImage src={webformatURL} alt={tegs} />
         {this.state.loading && <div>Loading...</div>}
         {this.state.image && <div>{ this.state.image.id}</div>}
       </GalleryItem>
     );
    
  }
   
}