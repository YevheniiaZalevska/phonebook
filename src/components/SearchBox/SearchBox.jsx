import s from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectFilterValue } from '../../redux/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  };

  return (
    <div className={s.box}>
      <label htmlFor="search" className={s.label}>
        Find contacts by name
      </label>
      <input
        id="search"
        name="search"
        type="text"
        value={filter}
        onChange={handleChange}
        className={s.input}
        autoComplete="off"
      />
    </div>
  );
};

export default SearchBox;