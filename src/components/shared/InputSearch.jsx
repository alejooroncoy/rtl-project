import { BsSearch } from "react-icons/bs";

const InputSearch = () => {
  return (
    <form className="form form--header">
      <div className="form__input-container form__input-container--header">
        <input type="text" className="form__input" placeholder="Search" />
        <BsSearch />
      </div>
    </form>
  );
};

export default InputSearch;
