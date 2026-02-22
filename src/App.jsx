
import Imp from './prop';


let App = () => {

  return (
    <div className="cont">
      <h2>To-Do List</h2>
      <Imp/> 
    </div>
  )
};

export default App;

























































/*function App(){
  let [movies,setMovies]=useState([
    {id:1,name:"rishi",age:21},
    {id:2,name:"sham",age:43},
    {id:3,name:"kamali",age:23}
  ]);
  let rem=()=>{
    setMovies(
      movies.map((m)=>m.id===1?{...m,name:"kesh",age:56}:m)
    );
  }
  let add=()=>{
    setMovies(
      movies.map((m)=>m.id===1?{...m,name:"rishi",age:21}:m)
    );
  }

  return (
    <>
    <Imp one="lollo" two="fig" three="ghee"/>
    <Prop name="rishi" age={21} gender="male"></Prop>
    <p>hello</p>
    {
      movies.map(({id,name,age})=>(
        <ul>
          <li key={movies.id}>{name}</li>
          <li key={movies.id}>{age}</li>

        </ul>
      ))
    }
    <button onClick={add}>add</button>
    <button onClick={rem}>rem</button>

    </>
  )
}
function Prop(props){
  return<>
    <p>{props.name}</p>
    <p>{props.age}</p>
    <p>{props.gender}</p>
    </>
  
}*/