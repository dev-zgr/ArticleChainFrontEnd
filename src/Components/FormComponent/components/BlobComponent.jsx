export const BlobComponent = ({label, id, error, ...props}) => {

    return (
        <div className={`form-input ${error ? 'invalid' : '' }`}>
            <label htmlFor={id}>
                <strong>{label}</strong>
            </label>
            <textarea
                id={id}
                {...props}
            />
            {error && <p className="input-error"><strong>{error}</strong> </p>}
        </div>)
}