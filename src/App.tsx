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
    <div className="font-custom bg-[url('./assets/bg-img.png')] bg-cover w-full p-0 py-40 flex justify-center items-center">
      <main className="bg-white p-8">
        <section>
          <header className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-3xl font-semibold">Registration Form</h1>
            <p className="text-sm text-zinc-300 ">
              Please fill out this form with the required information
            </p>
          </header>
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

          {currentPage === 1 || currentPage === 2 ? (
            <button onClick={nextPage}>Page suivante</button>
          ) : (
            <button onClick={handleSubmit} type="submit">
              Send
            </button>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
