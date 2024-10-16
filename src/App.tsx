import { useState } from "react";
import "./App.css";

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
        {currentPage === 1 && (
          <div>
            <h2>Page 1</h2>
            <p>1.</p>
          </div>
        )}

        {currentPage === 2 && (
          <div>
            <h2>Page 2</h2>
            <p>2</p>
          </div>
        )}

        {currentPage === 3 && (
          <div>
            <h2>Page 3</h2>
            <p>3</p>
          </div>
        )}
      </main>
      <button onClick={nextPage}>Page suivante</button>
    </>
  );
}

export default App;
