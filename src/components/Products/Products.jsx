import React from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import commonStyles from 'styles/commonStyles';
import Product from './Product/Product';
import Drink from './Product/Drink';
import styles from './styles';

configureAnchors({ offset: -80, scrollDuration: 800 });

function Products() {
  return (
    <div className={commonStyles.wrapper}>
      <ScrollableAnchor id="pizza">
        <div className={styles.container}>
          <Product pizza />
          <Product pizza />
          <Product pizza />
          <Product pizza />
          <Product pizza />
          <Product pizza />
          <Product pizza />
        </div>
      </ScrollableAnchor>

      <h2>Комбо</h2>
      <ScrollableAnchor id="combo">
        <div className={styles.container}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </ScrollableAnchor>

      <h2>Напитки</h2>
      <ScrollableAnchor id="drinks">
        <div className={styles.container}>
          <Drink />
          <Drink />
          <Drink />
          <Drink />
          <Drink />
          <Drink />
          <Drink />
        </div>
      </ScrollableAnchor>
    </div>
  );
}

export default Products;
