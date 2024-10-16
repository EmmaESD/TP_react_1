const Page2 = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="John Doe" required />
        <input
          type="email"
          name="email"
          placeholder="exemple@mail.com"
          pattern=".+@example\.com"
          required
        />
        <input type="password" id="pwd" name="pwd" required />
      </form>
    </div>
  );
};

export default Page2;
