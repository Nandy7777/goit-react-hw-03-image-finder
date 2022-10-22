import errorImg from './errorImg.png'
import { ErrorMessage, ErrorWrap } from './ErrorView.styled';

export default function ErrorViewImg({ message }) {
    return (
      <ErrorWrap>
        <ErrorMessage>{message}</ErrorMessage>
        <img src={errorImg} alt="errorimage" width="400" />
      </ErrorWrap>
    );
}