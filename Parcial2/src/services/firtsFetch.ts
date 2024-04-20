export const getImage = async (text: any) => {
    try {
        const dataImage = await fetch(`https://cataas.com/cat/says/${text}`).then((res) => res.json());
        console.log(dataImage)
        return dataImage
    } catch (error) {
        console.log('error', error)
        return error
    }
};