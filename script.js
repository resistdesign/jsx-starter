const domContainer = document.querySelector('#app-root');
ReactDOM.render(
  <button onClick={() => alert('F-Yes JSX!')}>Click Me!</button>, 
  domContainer
);
