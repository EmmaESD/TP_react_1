const Page2 = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="text-xs">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className="bg-colorHover py-2 px-3 text-sm rounded-md"
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
            placeholder="exemple@mail.com"
            pattern=".+@example\.com"
            className="bg-colorHover py-2 px-3 text-sm rounded-md"
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
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Page2;
