import { useState } from 'react';
import styles from './Navigation.module.scss';

export const Navigation = ({ valueId, setValueId, valueIdSort, setValueIdSort }) => {
  const [activeList, setActiveList] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState(0);
  const list = [
    { name: 'популярности', sortProperty: 'rating', index: 0 },
    { name: 'цене', sortProperty: 'price', index: 1 },
    { name: 'aлфавиту', sortProperty: 'title', index: 2 },
  ];
  const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const clickSortItem = (obj) => {
    setValueIdSort(obj);
    setSelected(obj.index);
    setActiveList(false);
  };
  return (
    <div className={styles.navigationWrapper}>
      <div className={styles.navigationList}>
        <ul className={styles.navigation}>
          {category.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setValueId(index)}
                className={valueId === index ? styles.active : ''}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.navigationSorting}>
        <div onClick={() => setActiveList(!activeList)} className={styles.buttonMenu}>
          Сортировка по: <img className={styles.icon} src="icon/959159.png" alt="Icon" />
        </div>
        <span onClick={() => setActiveList(!activeList)} className="active">
          {list[selected].name}
        </span>
        {activeList && (
          <div className={styles.navigationSortingChilde}>
            {list.map((obj, i) => {
              return (
                <li
                  key={i}
                  onClick={() => clickSortItem(obj)}
                  className={selected === i ? styles.active : ''}>
                  {obj.name}
                </li>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
