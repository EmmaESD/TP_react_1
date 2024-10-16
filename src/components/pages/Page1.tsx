import { useState } from "react";

const Page1 = () => {
  const [PersonalAccount, setPersonalAccount] = useState(true);
  const [businessAccount, setBusinessAccount] = useState(false);

  const accountChoice = (account: number): void => {
    if (account === 1) {
      setPersonalAccount(true);
      setBusinessAccount(false);
    } else {
      setPersonalAccount(false);
      setBusinessAccount(true);
    }
  };
  return (
    <>
      <h4>Chose your account type</h4>
      <button onClick={() => accountChoice(1)}>Personal Account</button>
      <button onClick={() => accountChoice(2)}>Business Account</button>
    </>
  );
};

export default Page1;
