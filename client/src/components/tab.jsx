import '../stylesheets/tab.css'
export function Tab({name, classes, onClick}){
    return (
        <>
            <div className={`tab ${classes}`} onClick={onClick}>
                {name}
            </div>
        </>
    );
}