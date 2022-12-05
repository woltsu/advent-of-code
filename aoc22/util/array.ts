import { toNumber as lodashToNumber } from "lodash";
import { chunk as lodashChunk } from "lodash";

export const toNumber = <T>(list: T[]) => {
    return list.map(lodashToNumber);
};

export const lastN = <T>(list: T[], n = 1) => {
    return list.slice(-n);
};

export const chunk = <T>(list: T[], n = 1) => {
    return lodashChunk(list, n);
};

export const split = <T>(list: T[]) => {
    return chunk(list, list.length / 2);
};
