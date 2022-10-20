import { Component } from 'react';



export default class App extends Component {
  state = {
    image: null,
    loading: false,
  }

  // componentDidMount() {
  //   this.setState({ loading: true })
    
  //   fetch(
  //     'https://pixabay.com/api/?q=cat&page=1&key=29802518-7a19817c952422887bb4d93d8&image_type=photo&orientation=horizontal&per_page=12'
  //   ).then(response => response.json()
  //     .then(image => this.setState({ image }))
  //     .finally(() => this.setState({ loading: false }))
  // }



  render() {
    return (
      <></>
    )
  }

}
 