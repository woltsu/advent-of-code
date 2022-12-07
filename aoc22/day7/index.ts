import { min } from "lodash";
import { parseLines } from "../inputs";

const lines = parseLines("input_7");

type Size = number;
type DirPointer = [Dir, Size, DirPointer | undefined];
type Dir = { [key: string]: DirPointer };

const dirs: Dir = {
    "/": [{}, 0, undefined],
};

const dirSize = (dir: DirPointer): number => {
    return (
        dir[1] +
        Object.values(dir[0]).reduce<number>(
            (sum, curr) => sum + dirSize(curr),
            0
        )
    );
};

let currDir: DirPointer = dirs["/"];
lines.forEach((cmd) => {
    const cdMatch = cmd.match(/^\$ cd ([\s\S]+)$/);

    // Is CD operation
    if (cdMatch) {
        const to = cdMatch[1];
        if (to === "/") {
            currDir = dirs["/"];
            return;
        } else if (to === "..") {
            if (currDir[2]) {
                currDir = currDir[2];
            }
            return;
        }

        if (!currDir[0][to]) {
            currDir[0][to] = [{}, 0, currDir];
        }

        currDir = currDir[0][to];
        return;
    }

    // Otherwise it must be ls operation. No need to check for that I suppose
    const fileMatch = cmd.match(/^(\d+) [\s\S]+$/);
    if (fileMatch) {
        currDir[1] += Number(fileMatch[1]);
    }
});

// Part 1
const SIZE_LIMIT = 100000;

let result = 0;
const findDirSum = (dir: DirPointer): number => {
    const size =
        dir[1] +
        Object.values(dir[0]).reduce<number>(
            (sum, curr) => sum + findDirSum(curr),
            0
        );

    if (size <= SIZE_LIMIT) {
        result += size;
    }

    return size;
};

findDirSum(dirs["/"]);
console.log(result);

// Part 2
const TOTAL_SIZE = 70000000;
const REQUIRED_SIZE = 30000000;
const USED_SPACE = TOTAL_SIZE - dirSize(dirs["/"]);

const targetDirSizes: number[] = [];
const findTargetDirs = (dir: DirPointer): number => {
    const size =
        dir[1] +
        Object.values(dir[0]).reduce<number>(
            (sum, curr) => sum + findTargetDirs(curr),
            0
        );

    if (USED_SPACE + size >= REQUIRED_SIZE) {
        targetDirSizes.push(size);
    }

    return size;
};

findTargetDirs(dirs["/"]);
console.log(min(targetDirSizes));
