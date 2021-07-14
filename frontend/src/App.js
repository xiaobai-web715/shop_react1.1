import './App.css';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router , Route} from 'react-router-dom'
// Route这里说是解构一下??
// 放在BrowserRouter里面，这样就可以实现页面的切换了(可以实现页面UI和url的同步)
import Header from './components/Header'
// 头部
import Footer from './components/Footer';
// 底部
import HomeScreen  from './screen/HomeScreen';
import ProductScreen  from './screen/ProductScreen';
// 屏幕内容

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          {/* 这里面除了这个HomeScreen之外还需要创建单个产品，所以这里添加了路由 */}
          {/* 教程上是引入了react-router-dom 和 react-router-bootstrap（可以给我们提供路由的封装容器）这俩，都是npm i进行安装 */}
          {/* HomeScreen通过路由Route进行控制 */}
          {/* path='/'指的是链接到的路径，这里指向的是根路径，加载的是HomeScreen */}
          {/* exact，绝对匹配，只能是根路径才会去加载HomeScreen */}
          <Route path='/' component = {HomeScreen} exact/>
          {/* 接下来是产品路由 */}
          {/* /:id我感觉就是一个占位符，告诉你我这里的路径是通过id来识别的 */}
          {/* path='/products这里的路径要匹配你的Link里面的 */}
          {/* 这里需要在ProductScreen.js设置产品的界面UI */}
          <Route path='/products/:id' component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App;
