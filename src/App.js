import logo from './logo.svg';
import './App.css';


//Засетапити React проєкт локально й щоб він працював. Це робиться лише 1 раз й в цій ДЗ. В наступних ДЗ сетапити React вже не потрібно
// Кожна ДЗ буде робитися в цій папці (проєкту). Тобто майте на увазі, щоб грамотно писати код й називати компоненти правильно з самого початку
// React-сайт будемо називавати тепер App (апкою, додатком, застосунком). Апку захостити на gh-pages обовʼязково. Щоб вживу дивитись на результат роботи й поточний прогрес. Ось тут є покроова інструкція як це зробити. Або самому знайти ресурс, як це зробити
// Побудувати прототип апки використовуючи React https://www.figma.com/file/qQajGA4dE61HYH1fRVdViN/ReactHW?node-id=0%3A1&t=4YG4NiCXujP9kJRR-0
// Стилі й наповненість - не обо'язково. Проте, як БОНУС - буде вітатись та будуть додаткові бали
// Прототип апки- має крутитись на gh-pages


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

