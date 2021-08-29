class TicTacToe {

    constructor() {
        this.ticTac = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]

        this.currentSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.ticTac[rowIndex][columnIndex] !== null) {
            return false;
        }

        this.ticTac[rowIndex][columnIndex] = this.currentSymbol;

        if (this.currentSymbol === 'x') {
            this.currentSymbol = 'o';
        } else if (this.currentSymbol === 'o') {
            this.currentSymbol = 'x';
        }

        this.getWinner();
    }

    isFinished() {
        if (this.getWinner() !== null || this.isDraw()) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        if (this.ticTac[0][0] === this.ticTac[1][0] && this.ticTac[1][0] === this.ticTac[2][0] && this.ticTac[0][0] !== null) {
            return this.ticTac[0][0]
        } else if (this.ticTac[0][1] === this.ticTac[1][1] && this.ticTac[1][1] === this.ticTac[2][1] && this.ticTac[0][1] !== null) {
            return this.ticTac[0][1]
        } else if (this.ticTac[0][2] === this.ticTac[1][2] && this.ticTac[1][2] === this.ticTac[2][2] && this.ticTac[0][2] !== null) {
            return this.ticTac[0][2]
        } else if (this.ticTac[0][0] === this.ticTac[0][1] && this.ticTac[0][1] === this.ticTac[0][2] && this.ticTac[0][0] !== null) {
            return this.ticTac[0][0]
        } else if (this.ticTac[1][0] === this.ticTac[1][1] && this.ticTac[1][1] === this.ticTac[1][2] && this.ticTac[1][0] !== null) {
            return this.ticTac[1][0]
        } else if (this.ticTac[2][0] === this.ticTac[2][1] && this.ticTac[2][1] === this.ticTac[2][2] && this.ticTac[2][0] !== null) {
            return this.ticTac[2][0]
        } else if (this.ticTac[0][0] === this.ticTac[1][1] && this.ticTac[1][1] === this.ticTac[2][2] && this.ticTac[0][0] !== null) {
            return this.ticTac[0][0]
        } else if (this.ticTac[0][2] === this.ticTac[1][1] && this.ticTac[1][1] === this.ticTac[2][0] && this.ticTac[0][2] !== null) {
            return this.ticTac[0][2]
        } else return null;
    }

    noMoreTurns() {
        let rez = true;

        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (this.ticTac[i][j] === null) {
                    rez = false;
                }
            }
        }

        return rez;
    }

    isDraw() {
        if ((this.noMoreTurns()) && (this.getWinner() === null)) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.ticTac[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
