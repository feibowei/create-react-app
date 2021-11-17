import React, { useContext } from 'react';
import { useQuery } from 'react-query';

import { getWeather } from '../../service/weather';
import { ContextInfo } from '../../store/contextProvider';
import styles from './Content.module.less';

export function Content() {
  const { id, toggleTheme } = useContext(ContextInfo);
  console.log('id', toggleTheme());
  const { data, isLoading } = useQuery('getWeather', getWeather);

  return <div className={styles.Content}>{!isLoading && data?.aqi.cityid}</div>;
}
