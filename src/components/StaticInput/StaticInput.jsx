import styles from './StaticInput.module.css';

export default function StaticInput({ props = {}, handleChange }) {
    return (
        <div>
            <span>{props?.name || '{missing prop name}'}</span>
            <input
                className={styles.staticInput}
                type='text'
                name={props?.field}
                onChange={(e) => handleChange({ field: props?.field, value: e.target.value })}
            />
        </div>
    )
}