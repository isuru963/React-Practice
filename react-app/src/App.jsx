function App() {

  const a = 50;

  return (
   <>
   <div className="cont">
   <h1 className="heading">Isuru React</h1>

   <p> {10*5}% for JSX</p>
   <p>{a}</p>
   <p> { a>45 ? "Pass" : "Fail"}</p>


   </div>
   </>
  )
}

export default App
