export const useUtils = () => {
    const sayHello = (word: string) => console.log(word)
    return {
        sayHello
    }
}