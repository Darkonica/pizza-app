import React, { useState } from 'react';
import Button from 'components/Layout/Button/Button';
import styles from './styles';

// const StyledButton = styled(Button)`
//   color: ${props => props.theme.mainColor};
//   padding: 4px 10px;
//   border-radius: 0 15px 15px 0;
//   border-color: ${props => props.theme.mainColor};
// `;

function Promocode() {
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = () => {
  };

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Введите промокод" value={value} onChange={onChange} />
      {/* .button */}
      <Button onClick={onSubmit} secondary>Применить</Button>
    </div>
  );
}

export default Promocode;
