import {Data} from "./Data";

export function createData(name: string, code: string, population: number, size: number): Data {
    const density = population / size;
    return {name, code, population, size, density};
}