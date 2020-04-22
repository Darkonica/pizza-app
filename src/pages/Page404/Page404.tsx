import React from 'react';
import { DefaultLayout } from 'components/Layout/DefaultLayout';
import commonStyles from 'styles/commonStyles.scss';

function Page404() {
  return (
    <DefaultLayout>
      <div className={commonStyles.contentWrapper}>
        <h1>404</h1>
      </div>
    </DefaultLayout>
  );
}

export default Page404;
