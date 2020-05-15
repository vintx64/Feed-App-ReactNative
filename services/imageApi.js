export const fetchImages = async ()=>{
    const response = await fetch ('https://unsplash.it/list')
    const images = await response.json();
    return images;
}

export const getImageByID = id =>{
 return `https://unsplash.it/${600}/${600}?image=${id}`;   
}