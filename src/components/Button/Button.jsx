import {ButtonMore} from './Button.styled'

const Button = ({ loadMore }) => {
  return (
    <ButtonMore type="button" onClick={loadMore}>
      Load more
    </ButtonMore>
  );
};

export default Button;