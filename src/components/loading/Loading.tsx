import React from 'react';
import styles from './Loading.module.css';

const Loading: React.FC = () => {
  return (
    <div className='flex justify-center w-full py-12'>
      <div className={styles.loader}></div> 
    </div>
  );
}

export default Loading;