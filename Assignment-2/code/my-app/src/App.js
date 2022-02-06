import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
    <div>
    <img src={employee.profileImg} alt="employeee-image"/>
    <h1>{employee.name}</h1>
    <p>Location</p>
    <h2>{employee.location}</h2>
<p>Blood Group</p>
<h2>{employee.bloodGroup}</h2>
      <p>Age</p>
      <h2>{employee.age}</h2>
      </div>
</div>
)
}



export default App;
