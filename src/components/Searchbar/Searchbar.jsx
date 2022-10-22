import { Component } from 'react';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';
import {
  SearchbarHeader,
  Form,
  SearchFormButton,
  ButtonLabel,
  Input,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    const { imageName } = this.state;

    event.preventDefault();

    if (imageName.trim() === '') {
      toast.error('Please type something!');
      return;
    }

    this.props.onSubmit(imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <SearchbarHeader>
        <Form onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <FaSearch />
            <ButtonLabel>Search</ButtonLabel>
          </SearchFormButton>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="imageName"
            value={this.state.imageName}
            onChange={this.handleNameChange}
          />
        </Form>
      </SearchbarHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};