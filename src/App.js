import './App.css';
import Homepage from './pages/Homepage.js'

function App() {
  return (
    <div className="App">
        hello world
        <Homepage/>
    </div>
  );
}

export default App;


// useEffect(() => {
//   const fetchData = async () => {
//     const response = await drinkAPI.get("/random.php", {
//       params: {
//         vs_currency: "usd",
//         ids: watchList.join(","),
//       },
//     });
//     setCocktails(response.data);
//   };
//   fetchData()
// }, []);