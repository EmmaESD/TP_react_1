import { useState } from "react";
import "./App.css";
import Page1 from "./components/pages/Page1";
import { DataType } from "./types/DataType";
import Page2 from "./components/pages/Page2";
import Page3 from "./components/pages/page3";

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
      return prevPage + 1;
    });
  };

  const previousPage = () => {
    setCurrentPage((prevPage) => {
      return prevPage - 1;
    });
  };

  return (
    <div className="font-custom bg-[url('./assets/bg-img.png')] bg-cover w-full p-0 py-40 flex justify-center items-center">
      <main className="bg-colorWhite p-8 flex flex-col gap-16 rounded-md">
        <header className="flex flex-col justify-center items-center gap-8">
          <section className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-3xl text-colorBlack font-semibold">
              Registration Form
            </h1>
            <p className="text-sm text-colorGrey ">
              Please fill out this form with the required information
            </p>
          </section>
          <section className="w-full px-16 bg-[url('./assets/bg-line.png')] bg-center bg-no-repeat">
            <div className="flex justify-between w-full">
              <div
                className={`${
                  currentPage === 1
                    ? "bg-colorPurple text-colorWhite"
                    : "bg-colorWhite text-colorGrey"
                } rounded-full border-solid border-0.5 w-8 h-8 flex items-center justify-center`}
              >
                1
              </div>
              <div
                className={`${
                  currentPage === 2
                    ? "bg-colorPurple text-colorWhite"
                    : "bg-colorWhite text-colorGrey"
                } rounded-full border-solid border-0.5 w-8 h-8 flex items-center justify-center`}
              >
                2
              </div>
              <div
                className={`${
                  currentPage === 3
                    ? "bg-colorPurple text-colorWhite"
                    : "bg-colorWhite text-colorGrey"
                } rounded-full border-solid border-0.5 w-8 h-8 flex items-center justify-center`}
              >
                3
              </div>
            </div>
          </section>
        </header>
        <div>
          {currentPage === 1 && <Page1 />}

          {currentPage === 2 && (
            <div>
              <Page2 handleSubmit={handleSubmit} />
            </div>
          )}
          {currentPage === 3 && <Page3 handleSubmit={handleSubmit} />}
        </div>

        <div className="w-full flex justify-end">
          {currentPage === 1 && (
            <button
              onClick={nextPage}
              className="bg-colorPurple text-colorWhite w-fit px-3 py-2 text-sm rounded-sm"
            >
              Next
            </button>
          )}
          {currentPage === 2 && (
            <div className="flex justify-end gap-3 w-full">
              <button
                onClick={previousPage}
                className=" text-colorGrey w-fit px-3 py-2 text-sm rounded-sm"
              >
                Previous
              </button>
              <button
                onClick={nextPage}
                className="bg-colorPurple text-colorWhite w-fit px-3 py-2 text-sm rounded-sm"
              >
                Next
              </button>
            </div>
          )}
          {currentPage === 3 && (
            <div className="flex justify-end gap-3 w-full">
              <button
                onClick={previousPage}
                className=" text-colorGrey w-fit px-3 py-2 text-sm rounded-sm"
              >
                Previous
              </button>
              <button
                onClick={handleSubmit}
                type="submit"
                className="bg-colorPurple text-colorWhite w-fit px-3 py-2 text-sm rounded-sm"
              >
                Send
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
