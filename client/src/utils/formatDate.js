export function FormatDate(date){
    const formattedDate = date.toLocaleDateString("en-GB",{
        day:"numeric",
        month:"short",
        year:"numeric",
    })
    return formattedDate;
}