import React, {useState} from 'react';
import styles from './count.module.css'

const Counter = () => {
    const [count, setCount] = useState(0)

    const onClick = () => setCount(prevState => prevState + 1)

    return (
        <div className="flex w-full">
            {count}
            <div className={styles.buttonA}>asca</div>
            <button className="buttonA" onClick={onClick}>AAAAA</button>
        </div>
    );
};

export default Counter;
