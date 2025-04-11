import "../stylesheets/input.css"
export function Input({id, type, value, placeholder, onChange, onKeyDown}){
    return (
        <>
            <input id={id} className="input-field" onChange={onChange} onKeyDown={onKeyDown} type={type} value={value} placeholder={placeholder}/>
        </>
    );
};