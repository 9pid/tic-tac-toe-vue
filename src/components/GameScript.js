import Board from './Board';
import MoveButton from './MoveButton';
import { GAME_CONST } from '../consts/GameConst';
import { calculateWinner } from '../utils/ScoreUtil.js';

export default {
  name: 'Game',
  components: {
    Board,
    MoveButton
  },
  data: function() {
    return {
      history: [{
        spaces: Array(9).fill(null)
      }],
      turnNumber: 0
    };
  },
  computed: {
    player: function() {
      return this.turnNumber % 2 === 0?
        GAME_CONST.PLAYER.X:
        GAME_CONST.PLAYER.O
    },
    currentSpaces: function() {
      return this.history[this.turnNumber].spaces;
    },
    winner: function() {
      return calculateWinner(this.currentSpaces);
    },
    message: function() {
      // 勝敗が決した場合、勝者を表示
      if (this.winner) return 'Winner: ' + this.winner;

      // 引き分けの場合
      const isDraw = this.currentSpaces.every((space) => {
        return space !== null;
      });
      if (isDraw) return 'Draw';

      // 現在のプレイヤーを表示
      return 'Now Player: ' + this.player;
    },
  },
  methods: {
    // マス目をマーク
    onClickSpace: function(spaceNumber) {
      // 既に記入済みのマス目の場合
      // 勝敗が決した場合
      // 何もしない
      if (this.currentSpaces[spaceNumber] ||
          this.winner) return ;

      // 新しい盤面を算出
      const newSpaces = this.history[this.turnNumber].spaces.concat();
      newSpaces[spaceNumber] = this.player;

      // dataを更新
      this.history = this.history.slice(0, this.turnNumber+1).concat([{
        spaces: newSpaces
      }]);
      this.turnNumber++;
    },

    // ターンを移動
    onClickMoveButton: function(turnNumber) {
      this.turnNumber = turnNumber;
    }
  }
}
