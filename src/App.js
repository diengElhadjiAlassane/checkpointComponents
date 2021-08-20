import "./App.css";
import Address from "./Component/Address/Address";
import FullName from "./Component/FullName/FullName";
import Profile from "./Component/Profile/myProfilePhoto";
//import  Profile from './Component/Profile/ProfilePhoto';
//import  Profile from './Component/Profile/Address';

function App() {


  return (
    <div>
      <Profile/>
      <Address/>
      <FullName/>
    </div>
  );
}

export default App;
