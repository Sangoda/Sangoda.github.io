import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner /> {/* Just sits at the top */}
      <Sidebar items={["Projects", "About Me", "CV", "Contact"]} />
      
    <div style={{ marginLeft: '300px', padding: '20px' }}>
        <div className = 'title'><div className = 'title-component-red'>1_</div>
        <div className = 'title-component'>Projects</div>
        </div>
    </div>

        <div className="project-boxes">
            <div className="project-box"></div>
            <div className="project-box"></div>
        </div>
        <div className="project-boxes">
            <div className="project-box"></div>
            <div className="project-box"></div>
        </div>

    <div style={{ marginLeft: '300px', padding: '20px' }}>
        <div className = 'title'><div className = 'title-component-red'>2_</div>
        <div className = 'title-component'>About Me</div>
        </div>
    </div>

    <div style={{ marginLeft: '300px', padding: '20px' }}>
        <div className = 'title'><div className = 'title-component-red'>3_</div>
        <div className = 'title-component'>CV</div>
        </div>
    </div>

    

    </div>
  );
}

export default App;
