import "bootstrap/dist/css/bootstrap.min.css"; // import Bootstrap stylesheet
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";
import scifiBooksList from "./data/scifi.json";
import fantasyBooksList from "./data/fantasy.json";
import historyBooksList from "./data/history.json";
import horrorBooksList from "./data/horror.json";

function App() {
  return (
    <>
      <header className="sticky-top">
        <MyNav></MyNav>
        <Welcome></Welcome>
      </header>
      <main className="min-vh-100 bg-dark pt-4 px-3 px-sm-0">
        <BookList booksList={fantasyBooksList}></BookList>
      </main>
      <footer className="sticky-bottom">
        <MyFooter></MyFooter>
      </footer>
    </>
  );
}

export default App;
