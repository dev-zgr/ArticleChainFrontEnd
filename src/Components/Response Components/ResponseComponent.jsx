import "./ResponseComponentStyles.css"

export const ResponseComponent = ({title,message, children}) => {
    return (
        <div className='response-container'>
            <h3>{title}</h3>
            <p>{message}</p>
            <div className= 'response-container__buttons'>
                {children}
            </div>
        </div>
    )
}


// export const ResponseComponent = forwardRef(function ({title,message, children}, ref){
//
//     return createPortal(
//         <>
//             <h3>{title}</h3>
//             <p>{message}</p>
//             <div className= 'response-container__buttons'>
//                 {children}
//             </div>
//         </>, document.getElementById('response-container')
//     )
//
// })
//
// export default ResponseComponent;