import { useState } from "react";
import "./App.css";
import Page1 from "./components/pages/Page1";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage === 3) {
        return 1;
      } else {
        return prevPage + 1;
      }
    });
  };

  return (
    <>
      <main>
        {currentPage === 1 && <Page1 />}

        {currentPage === 2 && (
          <div>
            <h2>Page 2</h2>
          </div>
        )}

        {currentPage === 3 && (
          <div>
            <h2>Page 3</h2>
          </div>
        )}
      </main>
      <button onClick={nextPage}>Page suivante</button>
    </>
  );
}

export default App;
