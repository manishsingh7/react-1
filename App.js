import './App.css';
const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
       }  
function App() {
  return (
    <div className="App">
      <img src={employee.profileImg} className="logo" alt="logo" />
      <p className="name">{employee.name}</p>
      <p className="same">location</p>
      <p className="same2">{employee.location}</p>
      <p className="same">Blood Group</p>
      <p className="same2">{employee.bloodGroup}</p>
      <p className="same">age</p>
      <p className="same2">{employee.age}</p>

    </div>
  );
}


export default App;
