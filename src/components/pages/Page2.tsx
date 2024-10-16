const Page2 = () => {
  return (
    <div>
      <form action="">
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
