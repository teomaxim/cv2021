import '@/styles/main.scss';
// import 'bootstrap/dist/css/boostrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} appPros='Hello to the app' />;
};
export default App;
