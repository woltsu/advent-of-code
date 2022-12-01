import { readFileSync } from "fs";
import path from "path";

export const loadInput = (inputName: string) => {
    return readFileSync(path.resolve(__dirname, `${inputName}.txt`), "utf-8");
};

export const parseLines = (inputName: string, breakChar = "\n") => {
    const contents = loadInput(inputName);
    return contents.split(breakChar);
};
