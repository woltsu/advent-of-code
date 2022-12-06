import { find, intersection } from "lodash";

class Move {
    name: string;
    beats: Move | undefined;
    signature: [string, string];
    points: number;

    constructor(name: string, signature: [string, string], points: number) {
        this.name = name;
        this.signature = signature;
        this.points = points;
    }

    setBeats(move: Move) {
        this.beats = move;
    }

    doesBeat(move: Move) {
        return this.beats?.isSame(move);
    }

    isSignature(s: string) {
        return this.signature.includes(s);
    }

    isSame(m: Move) {
        return intersection(this.signature, m.signature).length > 0;
    }
}

const Rock = new Move("Rock", ["A", "X"], 1);
const Paper = new Move("Paper", ["B", "Y"], 2);
const Scissors = new Move("Scissors", ["C", "Z"], 3);

Rock.setBeats(Scissors);
Scissors.setBeats(Paper);
Paper.setBeats(Rock);

const allMoves = [Rock, Paper, Scissors];

const figureMove = (signature: string): Move => {
    const foundMove = find(allMoves, (m) => m.isSignature(signature));
    if (!foundMove) throw new Error("Couldn't find move");
    return foundMove;
};

export const processRound = (moves: string) => {
    const [signatureA, signatureB] = moves.split(" ");
    const moveA = figureMove(signatureA);
    const moveB = figureMove(signatureB);

    let roundScore = moveB.points;
    if (moveB.doesBeat(moveA)) return roundScore + 6;
    if (moveA.doesBeat(moveB)) return roundScore + 0;
    return roundScore + 3;
};
