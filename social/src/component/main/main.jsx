
import './main.css';


function Main({description}) {
  return (
      <div className="App-header">
        <div className="section"><div>1</div></div>
        <div className="section"><div className="section-list">{description}</div></div>
        <div className="section"><div>1</div></div>
      </div>
  );
}

export default Main;
