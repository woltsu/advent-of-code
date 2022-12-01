import { toNumber as lodashToNumber } from "lodash";

export const toNumber = <T>(list: T[]) => {
    return list.map(lodashToNumber);
};

export const lastN = <T>(list: T[], n = 1) => {
    return list.slice(-n);
};
