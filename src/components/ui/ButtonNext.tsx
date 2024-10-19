type ButtonNextProps = {
  nextPage?: () => void;
};

const ButtonNext = ({ nextPage }: ButtonNextProps) => {
  return (
    <button
      onClick={nextPage}
      className="bg-colorPurple text-colorWhite w-fit px-3 py-2 text-sm rounded-sm"
    >
      Next
    </button>
  );
};

export default ButtonNext;
