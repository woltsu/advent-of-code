export const toArray = (str: string) => {
    return str.split("");
};

export const isLetter = (char: string) => {
    const regex = new RegExp("^[A-Za-z]$");
    return regex.test(char);
};
