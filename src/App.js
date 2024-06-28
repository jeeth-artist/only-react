import logo from './logo.svg';
import './App.css';

function App() {
  const title = <h1 className='title'>Getting Started React</h1>
const inputField = 
  <div>
    <label htmlFor='firstname'>First Name</label>
    <input type='text' id='firstname' placeholder='First Name' />
  </div>

const techs = ['HTML', 'CSS', 'JavaScript'] //gets appended into a string like .join(), can be used directly like ngFor

  return (
    <div className="App">
      {title}
      {inputField}
      {techs}
      {techs.map((item) => (
        <li>{item}</li>
      ))}
{/*       
Map returns a new Array, while ForEach returns undefined.

Here are some differences between the two methods.

Map allocates memory and stores return values, while forEach throws away return values and always returns undefined.

Map is chainable, but forEach isn't. This means that you can use other methods after map, but not after forEach.

Map is used to transform the elements of an array, while forEach is used to loop through the elements of an array. */}
    </div>
  );
}

export default App;
