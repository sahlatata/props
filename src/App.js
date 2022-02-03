import './App.css';
import Profile from './profile/Profile'
import {Container}from 'react-bootstrap'
function App() {
  const fullName = "Bibi "
  const bio ="​​La biographie consiste en un récit qui raconte la vie et l'histoire d'une personne. Elle peut être écrite par la personne elle-même "
  const profession =" Sleeper"
  const handleName=(a)=>{
  return alert(`${a}`)
  }
  
  return (
<Container>    
      <Profile  fullName={fullName} bio={bio} profession={profession} handleName={handleName}>
      <div className="col-10 col-sm-8 col-lg-6">
      <img src='/bibi.jpg' className=" shadow-lg border-info rounded d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      </Profile>
</Container>
  );
}

export default App;
