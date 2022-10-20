import { React } from 'react';
import {
  SearchbarHeader,
  Form,
  SearchFormButton,
  ButtonLabel,
  Input,
} from './Searchbar.styled';
import { ReactComponent as SearchIcon } from '../images/search.svg';

export default function Searchbar({ onSubmit }) {
  return (
    <SearchbarHeader>
      <Form>
        <SearchFormButton type="submit">
          <ButtonLabel>Search</ButtonLabel>
          <SearchIcon width='20' height='20'/>
        </SearchFormButton>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </SearchbarHeader>
  );
}
