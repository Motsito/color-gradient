import SideBar from "./components/SideBar/SideBar"
import ColorDisplay from "./components/ColorDisplay/ColorDisplay";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   return (
      <div className="d-flex">
         <SideBar />
         <ColorDisplay />
      </div>
   );
}

export default App;
