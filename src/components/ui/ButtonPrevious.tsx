type ButtonPreviousProps = {
  previousPage?: () => void;
};

const ButtonPrevious = ({ previousPage }: ButtonPreviousProps) => {
  return (
    <button
      onClick={previousPage}
      className=" text-colorGrey w-fit px-3 py-2 text-sm rounded-sm"
    >
      Previous
    </button>
  );
};

export default ButtonPrevious;
