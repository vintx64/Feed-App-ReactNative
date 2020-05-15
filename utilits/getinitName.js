export default function getInitials(fullname){
    let words = fullname?.split(" ");
    const initFullName = words[0].substr(0,1) + words[1]?.substr(0, 1);
    return initFullName;
}