import styles from './App.less';
import { Header } from './components/Header';
import { Content } from './components/Content';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
