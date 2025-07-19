function App() {

  const firstname = "John";
  const middlename = "Alan";
  const lastname = "Smith";
  const age = "30";
  const country = "Sri Lanka";

  const getFullName = (f,m,s) => {

    return `${f} ${m} ${s}`;
  }

  const arr = ["Apple","Grapes", "Orange"];

  return (
   <>
   <div className="cont">
   
    <h1>Employee Details</h1>
    <p> Full name : {getFullName("Isuru", "Sampath", "Perera")}</p>
    <p>Age:{age}</p>
    <p>Country : Sri Lanka</p>

    <p>{firstname} likes to eat {arr[0]} </p>

    <p> Frontend Languages</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
    </ul>
  
   </div>
   </>
  )
}

export default App
