export class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
//normal function
// function Car() {
//     return <h2>Hi, I am a Car!</h2>;
//   }

//arrow fuction
const Car1 = () => {
  return <h2>Hi, I am a Car!</h2>;
}
export default Car;


componentDidMount() {
  setTimeout(() => {
    //   this.setState({favoritecolor: "yellow"})
  }, 1000)
}
componentDidUpdate() {
  // document.getElementById("div2").innerHTML =
  // "The updated favorite is " + this.state.favoritecolor;
}
componentWillUnmount() {
  // alert("The component named Header is about to be unmounted.");
}

useEffect(() => {
  setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);
}, [count])
const increment = () => {
  setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

}
[count, setCount] = useState(10);
<span>{count}</span>
  <button onClick={incremnet()}>increment</button>
  <button onClick={()=>{setCount((count) => count - 5)}}>decrement</button>



import './App.css';
import Button from "./components/CustomButtonComponent";

function App({ Exp_data }) {
  return (
    <>
      <h1>Colorful Custom Button Components</h1>
      {
        Exp_data.map((ele) => {
          <Button
            border={ele.border}
            color="pink"
            height="200px"
            onClick={() => console.log("You clicked on the pink circle!")}
            radius="50%"
            width="200px"
            children="I'm a pink circle!"
          />
        })
      }

    </>
  );
}

export default App;



props
routing

React => Javascript Library
Use => SAP, Reusable component
dataFlow => unidireactional(parent to child with props)
Redux or stateManagment
desrtuctre in react
fragment
javascript => camelCase, snake_case, Uppercase

component name should be capital.

  src=> component
    - Button
    - index.js
    - index.css / index.scss
     => pages
  - Signup
  - index.js
  - index.css / index.scss

     => assets
  - images
logo.png
     => Public
  - index.html
     => App.js


React
Two types componets
1)Class Component
2)Functional Component

What is differnce bet class component and functional component ?
=>
    1) export class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

1) export const Car = () => {
  return <h2>Hi, I am a Car!</h2>;
}


2) render() is compalsary in class component
2) render() is not compalsary in functional component
3)Lifecycle methods(Mounting, Updating, and Unmounting)
  - componentDidMount(), componentDidUpdate(), componentWillUnmount()
3) Hooks(useState, useEffect)
4) for declare state in react we use useState hook
  -const [name, setName] = useState('Baap Company');
-<h1>{ name }</h1 >
  -<button onClick={ () => setName('Welcome to Baap     Company') }> Update your comapny name</button >
    4) for declare state in react we use this.state keyword
      - this.state = { name: 'test' }
-<h1>{ this.state.name }</h1 >
  -<button onClick={ () => this.setState({ name: 'Welcome to      Bapp Comapany' }); }> Update your comapany      name</button >
    5) props => Pass data from one componet to another(parnet to child)
export Home = () => {
  const myElement = <Car brand="Ford" name={'EV'} />;
}
class Name extends Car {
  constructor(props) {
    super(props);
  }
  render() {
<h1>{this.props.brand}</h1>
<h1>this.props.name}</h1>
    return
  }
}
5) props => Pass data from one componet to another(parnet to child)

export Home = () => {
  const myElement = <Car brand="Ford" name={'EV'} />;
}

export const Car = (props) => {
  <div><h2>I am a {props.name}!</h2>;
    <h2>I am a {props.brand}!</h2>;</div>
  return
}
export const Car = ({ brand, name }) => {
  <><h2>I am a {name}!</h2>;
    <h2>I am a {brand}!</h2>;</>
  return
}
{ title ? (<div>hiii</div>) : (<div>hello</div>) }
{ content && <div className="APP_cardContainer">{content}</div> }










