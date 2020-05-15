export default function(fullname){
    const hexCode = fullname.split('')
    .reduce((result , char) => (result * char.charCodeAt(0)) % 0xFFFFFF , 1)
    .toString(16);

    return `#${'0'.repeat(6 - hexCode.length) + hexCode}`;
}