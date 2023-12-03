import React from 'react';

import styles from './Portfolio.css';

export interface PortfolioProps {
  prop?: string;
}

export function Portfolio({prop = 'default value'}: PortfolioProps) {
  return <div className={styles.Portfolio}>Portfolio {prop}</div>;
  
}
