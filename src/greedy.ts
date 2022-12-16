import { swap } from "./utils";

const n = 10;
let volume = 30;

const v = [5, 5, 6, 8, 10, 11, 12, 15, 15, 30];
const w = [8, 8, 6, 5, 10, 5, 20, 27, 20, 20];

let maxValue = 0;

const rating = new Float64Array(n);

/** Calculate the Weight / Value Ratio for every Item */
const rateItems = () => {
    for(let i = 0; i < n; i++) {
        rating[i] = w[i] / v[i];
    }
    console.table(rating)
}

/** Sort items by Rating */
const sortItems = () => {
    let max;
    for(let i = 0; i < n; i++) {
        max = i;
        for(let j = i + 1; j < n; j++) {
            if(rating[j] > rating[max]) {
                max = j;
            }else if(rating[j] == rating[max] && v[j] > v[max]) {
                max = j;
            }
            if(max != i) {
                swap(v, max, i);
                swap(w, max, i);
            }
        }
    }
}

/** Fill the Backpack starting with the highest Rating */
const fillBackpack = () => {
    for(let i = 0; i < n; i++) {
        if(volume - v[i] > 0) {
            maxValue += w[i];
            volume -= v[i];
        }
    }
}

rateItems();

sortItems();

fillBackpack();

console.log(maxValue)
