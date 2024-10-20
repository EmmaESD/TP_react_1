import { DataType } from "../../types/DataType";

type Page4Props = {
  credential: DataType;
  formData: DataType[];
  setFormData: (formData: DataType[]) => void;
};

const Page4 = ({ credential, formData }: Page4Props) => {
  console.log("formData:", formData);

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="bg-[url('./assets/success.png')] w-36 h-36 bg-cover"></div>
      <div className="flex flex-col gap-1 items-center text-colorBlack text font-semibold">
        <h3>Congrats {credential.name}</h3>
        <h3>Registration Successful</h3>
        <h3>Email confirmation sent to {credential.email}</h3>
      </div>
    </div>
  );
};

export default Page4;
