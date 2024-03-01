export const SearchFormComponent = ({onChange, children}) => {
    return (
        <div>
            <select onChange={onChange}>
                {children}
            </select>
        </div>
    )
}