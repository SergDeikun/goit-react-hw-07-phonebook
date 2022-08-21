import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter';

import { FilterInput } from './filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter.value);

  const handlefilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <FilterInput type="text" value={value} onChange={handlefilterChange} />
    </label>
  );
};

export default Filter;
