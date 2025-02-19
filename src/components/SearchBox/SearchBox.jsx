import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilterValue } from '../../redux/filters/selectors';

import { FaSearch } from 'react-icons/fa'; // 🔍 Иконка поиска
import s from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  };

  return (
    <div className={s.searchContainer}>
      <FaSearch className={s.searchIcon} />
      <label htmlFor="search" className={s.label}>
        Search contacts by name or number
      </label>
      <input
        id="search"
        name="search"
        type="text"
        value={filter}
        onChange={handleChange}
        className={s.input}
        placeholder="Enter name or number ..."
        autoComplete="off"
      />
    </div>
  );
};

export default SearchBox;
