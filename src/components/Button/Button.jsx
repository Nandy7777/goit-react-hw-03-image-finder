const Button = ({ onClick }) => {
  return (
    <Button type="button" onClick={() => onClick()}>
      Load more
    </Button>
  );
};

export default Button;
