import { difference, range } from "lodash";
import { parseLines } from "../inputs";
import { toNumber } from "../util";

const isSubset = <A>([a, b]: A[][]) => {
    return difference(a, b).length === 0 || difference(b, a).length === 0;
};

const isDisjoint = <A>([a, b]: A[][]) => {
    return difference(a, b).length === a.length;
};

// Part 1
console.log(
    parseLines("input_4", "\n")
        .map((l) =>
            l
                .split(",")
                .map((range) => toNumber(range.split("-")))
                .map(([a, b]) => range(a, b + 1))
        )
        .filter((pair) => isSubset(pair)).length
);

// Part 2
console.log(
    parseLines("input_4", "\n")
        .map((l) =>
            l
                .split(",")
                .map((range) => toNumber(range.split("-")))
                .map(([a, b]) => range(a, b + 1))
        )
        .filter((pair) => !isDisjoint(pair)).length
);
