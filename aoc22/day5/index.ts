import { clone, cloneDeep } from "lodash";
import { parseLines } from "../inputs";
import { isLetter, lastN, removeN, toNumber } from "../util";

const [crates, operations] = parseLines("input_5", "\n\n");

const stacks = crates
    .split("\n")
    .slice(0, -1)
    .reverse()
    .reduce<Record<number, string[]>>((stacks, row) => {
        row.split("").forEach((char, i) => {
            if (isLetter(char)) {
                const stackN = Math.ceil(i / 4);
                if (!stacks[stackN]) stacks[stackN] = [];
                stacks[Math.ceil(i / 4)].push(char);
            }
        });

        return stacks;
    }, {});

// Part 1
let stackCopy = cloneDeep(stacks);
operations.split("\n").forEach((operation) => {
    const match = operation.match(/move (\d+) from (\d+) to (\d+)/);
    if (!match) return;

    const [amount, from, to] = toNumber(match.slice(1, 4));

    for (let i = 0; i < amount; i++) {
        const crate = stackCopy[from].pop();
        if (!crate) break;

        stackCopy[to].push(crate);
    }
});

console.log(
    Object.values(stackCopy)
        .map((s) => s.slice(-1)[0])
        .filter((s) => !!s)
        .join("")
);

// Part 2
stackCopy = cloneDeep(stacks);

operations.split("\n").forEach((operation) => {
    const match = operation.match(/move (\d+) from (\d+) to (\d+)/);
    if (!match) return;

    const [amount, from, to] = toNumber(match.slice(1, 4));

    const crates = lastN(stackCopy[from], amount);
    stackCopy[to].push(...crates);
    stackCopy[from] = removeN(stackCopy[from], amount);
});

console.log(
    Object.values(stackCopy)
        .map((s) => s.slice(-1)[0])
        .filter((s) => !!s)
        .join("")
);
