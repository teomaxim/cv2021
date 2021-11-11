import CanvasContainer from '../shared/CanvasContainer';
import Header from '../shared/Header';
import styled from 'styled-components';

const BaseLayout = (props) => {
  const { className, children } = props;
  return (
    <div className='layout-container'>
      <CanvasContainer></CanvasContainer>
      <Header />
      <main className={`cover ${className}`}>
        <div className='wrapper'>{children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
