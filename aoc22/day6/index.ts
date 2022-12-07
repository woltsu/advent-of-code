import { uniq } from "lodash";
import { parseLines } from "../inputs";

const buffer = parseLines("input_6", "");

// Part 1
let window: string[] = [];
let found: number = -1;
buffer.forEach((char, i) => {
    if (found !== -1) return;

    if (window.length >= 4) {
        window.shift();
        window.push(char);
    } else {
        window.push(char);
    }

    if (uniq(window).length === 4) {
        found = i + 1;
    }
});

console.log(found);

// Part 2
window = [];
found = -1;
buffer.forEach((char, i) => {
    if (found !== -1) return;

    if (window.length >= 14) {
        window.shift();
        window.push(char);
    } else {
        window.push(char);
    }

    if (uniq(window).length === 14) {
        found = i + 1;
    }
});

console.log(found)
