import "../styles/FormStyles.css"
export const InputComponent = ({label, id, error, ...props}) => {

    return (
        <div className={`form-input ${error ? 'invalid' : '' }`}>
            <label htmlFor={id}>
                <strong>{label}</strong>
            </label>
            <input
                id={id}
                {...props}
            />
            {error && <p className="input-error"><strong>{error}</strong> </p>}
        </div>)
}