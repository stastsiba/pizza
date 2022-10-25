import { useContext } from 'react';
import { searchContext } from '../../App';
import styles from './Search.module.scss';

export const Search = () => {
  const { searchValue, setSearchValue } = useContext(searchContext);
  return (
    <div className={styles.searchInput}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.input}
        placeholder="Поиск..."
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue('')}
          className={styles.clearIcon}
          src="icon/3669378_clear_ic_icon.svg"
          alt="Clear"
        />
      )}
    </div>
  );
};
