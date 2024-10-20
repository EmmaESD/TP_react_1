import { DataType } from "../../types/DataType";

type Page2Props = {
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  credential: DataType;
};

const Page2 = ({ handleChange, credential }: Page2Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <label htmlFor="name" className="text-xs">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          className="bg-colorHover py-2 px-3 text-sm rounded-md"
          onChange={handleChange}
          value={credential.name}
          required
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="email" className="text-xs">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={credential.email}
          placeholder="exemple@mail.com"
          pattern=".+@example\.com"
          className="bg-colorHover py-2 px-3 text-sm rounded-md"
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="pwd" className="text-xs">
          Password
        </label>
        <input
          type="password"
          id="pwd"
          name="pwd"
          placeholder="********"
          className="bg-colorHover py-2 px-3 text-sm rounded-md"
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default Page2;
