/**
*   Swaps two array values.
*   @param {Array<number>} target The target array.
*   @param {number} from Index to swap from.
*   @param {number} to Index to swap to. 
*/
export const swap = (target: Array<Number>, from: number, to: number) => {
    let temp = target[from];
    target[from] = target[to];
    target[to] = temp;
}