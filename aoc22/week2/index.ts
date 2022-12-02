import { sum } from "lodash";
import { parseLines } from "../inputs";
import { processRound } from "./rules";
import { processRound as pr2 } from "./rules2";

console.log(sum(parseLines("input_2", "\n").map(processRound)));
console.log(sum(parseLines("input_2", "\n").map(pr2)));
