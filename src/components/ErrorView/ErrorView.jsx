import errorImg from './errorImg.png'

export default function ErrorViewImg({ message }) {
    return (
      <div role="alert">
        <img src={errorImg} alt="errorimage" width="400" />
      </div>
    );
}