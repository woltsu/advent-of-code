import { parseLines } from "../inputs";
import { sum, max, sortBy, last } from "lodash";
import { toNumber, lastN } from "../util";

// Part 1
const maxFood = max(
    parseLines("input_1", "\n\n").map((g) => sum(toNumber(g.split("\n"))))
);

console.log(maxFood);

// Part 2
const maxFoods = sum(
    lastN(
        sortBy(
            parseLines("input_1", "\n\n").map((g) =>
                sum(toNumber(g.split("\n")))
            )
        ),
        3
    )
);

console.log(maxFoods);
