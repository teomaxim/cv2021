import { Container } from 'reactstrap';

const BasePage = (props) => {
  const { className = '', children } = props;
  return (
    <div className={`base-page ${className}`}>
      <Container>{props.children}</Container>
    </div>
  );
};

export default BasePage;
