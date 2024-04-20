export const getWord = async () => {
    try {
        const dataWord = await fetch('https://catfact.ninja/fact').then((res) => res.json());
        console.log(dataWord)
        return dataWord.fact
    } catch (error) {
        console.log('error', error)
        return error
    }
};