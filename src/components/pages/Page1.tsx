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
    <section className="w-full flex flex-col gap-8">
      <h4 className="text-colorGrey text-xs">Chose your account type</h4>
      <div className="flex flex-col gap-8">
        <button
          onClick={() => accountChoice(1)}
          className="w-full flex gap-2.5 hover:bg-colorblack"
        >
          <div
            className={`w-7 p-7 bg-no-repeat bg-cover ${
              PersonalAccount
                ? "bg-[url('./assets/account-select.png')]"
                : "bg-[url('./assets/account-unselect.png')]"
            }`}
          ></div>
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-colorBlack font-semibold text-sm">
              Personal Account
            </h3>
            <p className="text-colorGrey text-xs">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </button>
        <button
          onClick={() => accountChoice(2)}
          className="w-full flex gap-2.5"
        >
          <div
            className={`w-7 p-7 bg-no-repeat bg-cover ${
              businessAccount
                ? "bg-[url('./assets/account-select.png')]"
                : "bg-[url('./assets/account-unselect.png')]"
            }`}
          ></div>
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-colorBlack font-semibold text-sm">
              Business Account
            </h3>
            <p className="text-colorGrey text-xs">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Page1;
