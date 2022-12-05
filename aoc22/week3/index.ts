import { flatten, intersection, range, sum, toArray } from "lodash";
import { parseLines } from "../inputs";
import { chunk, split } from "../util/array";

// a - z: 97-122
// A - Z: 65 - 90

// Part 1

const scores = [...range(97, 123), ...range(65, 91)];

const x = sum(
    flatten(
        parseLines("input_3", "\n")
            .map(toArray)
            .map(split)
            .map(([a, b]) => intersection(a, b))
    )
        .map((s) => s.charCodeAt(0))
        .map((s) => scores.indexOf(s) + 1)
);

console.log(x);

// Part 2

const y = sum(
    flatten(
        chunk(parseLines("input_3", "\n"), 3)
            .map((c) => c.map(toArray))
            .map(([a, b, c]) => intersection(a, b, c))
    )
        .map((s) => s.charCodeAt(0))
        .map((s) => scores.indexOf(s) + 1)
);
console.log(y);
