import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <div className="grid-container">
          <div id="header">
              <div className='logo'></div>
              <div className="menu">
                <div className="menu-item">1</div>
                <div className="menu-item ">2</div>
                <div className="menu-item ">3</div>
                <div className="menu-item ">4</div>
                <div className="menu-item ">5</div>
              </div>
                
            
          </div>
          <div id="banner">banner Image</div>
          <div id="blog-container">   
            <div className="blog-item"> Blog Post</div>
            <div className="blog-item"> Blog Post</div>
            <div className="blog-item"> Blog Post</div>
            <div className="blog-item"> Blog Post</div>
          </div>
          <div id="news-container">
            <div className="news-item">News 1</div>
            <div className="news-item">News 1</div>
            <div className="news-item">News 1</div>
          </div>  
        </div>
         
      </header>
    </div>
  );
}

export default App;

