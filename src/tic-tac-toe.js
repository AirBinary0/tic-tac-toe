class TicTacToe {
    constructor() {
        this.symbols = {
            current:'x',
            winner:null,
            x:'x',
            o:'o'
        }
        this.players = {
            current:'first',
            first:'first',
            second:'second'
        }
        this.board = [[null,null,null],
                      [null,null,null],
                      [null,null,null]]
    }

    getCurrentPlayerSymbol() {
        return this.symbols.current;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.board[rowIndex][columnIndex] == null && !this.isFinished()) {
            this.board[rowIndex][columnIndex] = this.symbols.current;
            this.symbols.current = this.symbols.current==this.symbols.x?this.symbols.o:this.symbols.x;
        }
    }

    isFinished() {
        if (this.getWinner() != null) return true;
        if (this.isDraw()) return true;
        return false;
    }

    getWinner() {
        if (this.board[0][0] == this.symbols.x && this.board[0][1] == this.symbols.x && this.board[0][2] == this.symbols.x) this.symbols.winner = this.symbols.x;
        if (this.board[0][0] == this.symbols.o && this.board[0][1] == this.symbols.o && this.board[0][2] == this.symbols.o) this.symbols.winner = this.symbols.o;
        if (this.board[1][0] == this.symbols.x && this.board[1][1] == this.symbols.x && this.board[1][2] == this.symbols.x) this.symbols.winner = this.symbols.x;
        if (this.board[1][0] == this.symbols.o && this.board[1][1] == this.symbols.o && this.board[1][2] == this.symbols.o) this.symbols.winner = this.symbols.o;
        if (this.board[2][0] == this.symbols.x && this.board[2][1] == this.symbols.x && this.board[2][2] == this.symbols.x) this.symbols.winner = this.symbols.x;
        if (this.board[2][0] == this.symbols.o && this.board[2][1] == this.symbols.o && this.board[2][2] == this.symbols.o) this.symbols.winner = this.symbols.o;
        if (this.board[0][0] == this.symbols.x && this.board[1][0] == this.symbols.x && this.board[2][0] == this.symbols.x) this.symbols.winner = this.symbols.x;
        if (this.board[0][0] == this.symbols.o && this.board[1][0] == this.symbols.o && this.board[2][0] == this.symbols.o) this.symbols.winner = this.symbols.o;
        if (this.board[0][1] == this.symbols.x && this.board[1][1] == this.symbols.x && this.board[2][1] == this.symbols.x) this.symbols.winner = this.symbols.x;
        if (this.board[0][1] == this.symbols.o && this.board[1][1] == this.symbols.o && this.board[2][1] == this.symbols.o) this.symbols.winner = this.symbols.o;
        if (this.board[0][2] == this.symbols.x && this.board[1][2] == this.symbols.x && this.board[2][2] == this.symbols.x) this.symbols.winner = this.symbols.x;
        if (this.board[0][2] == this.symbols.o && this.board[1][2] == this.symbols.o && this.board[2][2] == this.symbols.o) this.symbols.winner = this.symbols.o;
        if (this.board[0][0] == this.symbols.x && this.board[1][1] == this.symbols.x && this.board[2][2] == this.symbols.x) this.symbols.winner = this.symbols.x;
        if (this.board[0][0] == this.symbols.o && this.board[1][1] == this.symbols.o && this.board[2][2] == this.symbols.o) this.symbols.winner = this.symbols.o;
        if (this.board[0][2] == this.symbols.x && this.board[1][1] == this.symbols.x && this.board[2][0] == this.symbols.x) this.symbols.winner = this.symbols.x;
        if (this.board[0][2] == this.symbols.o && this.board[1][1] == this.symbols.o && this.board[2][0] == this.symbols.o) this.symbols.winner = this.symbols.o;
        return this.symbols.winner;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.board[i][j] == null) return false;
            }
        }
        return true;
    }

    isDraw() {
        if (this.getWinner() == null && this.noMoreTurns()) { console.log('return true'); return true; }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
