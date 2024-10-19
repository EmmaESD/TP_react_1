const Page3 = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label htmlFor="age" className="text-xs">
            Age
          </label>
          <input
            type="text"
            name="age"
            placeholder="23"
            className="bg-colorHover py-2 px-3 text-sm rounded-md"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="interest" className="text-xs">
            Area of interest
          </label>
          <input
            type="text"
            name="interest"
            placeholder="Frontend"
            className="bg-colorHover py-2 px-3 text-sm rounded-md"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="description" className="text-xs">
            Bio / Description
          </label>
          <input
            type="text"
            name="description"
            placeholder="Lorem Ipsum"
            className="bg-colorHover py-2 px-3 text-sm rounded-md"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Page3;
