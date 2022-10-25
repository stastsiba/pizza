import React, { useEffect, useState } from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { Card } from '../../components/Card/Card';
import { SkeletonCard } from '../../components/Card/SkeletonCard';
import styles from './styles.module.scss';
import { useContext } from 'react';
import { searchContext } from '../../App';

export const Home = () => {
  const { searchValue, setSearchValue } = useContext(searchContext);
  const [pizzasItems, setPiazzasItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [valueId, setValueId] = useState(0);
  const [valueIdSort, setValueIdSort] = useState({ name: 'популярности', sortProperty: 'rating' });
  useEffect(() => {
    setIsLoading(true);
    const sortTitle = valueIdSort.sortProperty === 'title' ? `&order=asc` : `&order=desc`;
    fetch(
      `https://62ebee40705264f263e3bbc6.mockapi.io/itmes?${
        valueId > 0 ? `category=${valueId}` : ''
      }&sortBy=${valueIdSort.sortProperty}${sortTitle}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setPiazzasItems(json);
        setIsLoading(false);
      });
  }, [valueId, valueIdSort]);
  return (
    <div>
      <Navigation
        valueId={valueId}
        setValueId={(i) => setValueId(i)}
        valueIdSort={valueIdSort}
        setValueIdSort={(i) => setValueIdSort(i)}
      />
      <div className={styles.card}>
        {isLoading
          ? [...new Array(6)].map((_, index) => <SkeletonCard key={index} />)
          : pizzasItems
              .filter((i) => {
                if (i.title.toLowerCase().includes(searchValue.toLowerCase())) {
                  return true;
                } else {
                  return false;
                }
              })
              .map((obj) => <Card key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};
