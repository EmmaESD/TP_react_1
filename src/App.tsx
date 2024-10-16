import { useState } from "react";
import "./App.css";
import Page1 from "./components/pages/Page1";
import { DataType } from "./types/DataType";
import Page2 from "./components/pages/Page2";

type FormProps = {
  formData: DataType[];
  setFormData: (formData: DataType[]) => void;
};

function App({ formData, setFormData }: FormProps) {
  const [credential, setCredential] = useState<DataType>({
    account: true,
    name: "",
    email: "",
    password: "",
    age: 0,
    interest: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData([...formData, credential]);
  };

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
            <Page2 handleSubmit={handleSubmit} />
          </div>
        )}

        {currentPage === 3 && (
          <div>
            <h2>Page 3</h2>
          </div>
        )}
      </main>

      {currentPage === 1 || currentPage === 2 ? (
        <button onClick={nextPage}>Page suivante</button>
      ) : (
        <button onClick={handleSubmit} type="submit">
          Send
        </button>
      )}
    </>
  );
}

export default App;
