#!/usr/bin/node

function fibs(length) {
    if (length == 0) {
        return [];
    }
    else if (length == 1) {
        return [0];
    }
    else if (length == 2) {
        return [0, 1]
    }
    else {
        let sequence = [0, 1]; 
        for(let i = 2; i < length; ++i) {
            sequence.push(sequence[i-2] + sequence[i-1]);
        }
        return sequence;
    }
}

function fibsRec() {

}

