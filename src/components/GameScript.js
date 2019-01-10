import Board from './Board';
import MoveButton from './MoveButton';

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
      turnNumber: 0,
      player: 'X'
    };
  },
  computed: {
    message: function() {
      return 'Now Player: ' + this.player;
    },
    currentSpaces: function() {
      return this.history[this.turnNumber].spaces;
    }
  },
  methods: {
    onClickSpace: function(spaceNumber) {
      // 既に記入済みのマス目の場合、何もしない
      if (this.currentSpaces[spaceNumber]) return ;

      const newSpaces = this.history[this.turnNumber].spaces.concat();
      newSpaces[spaceNumber] = this.player;
      this.history.push({
        spaces: newSpaces
      });
      this.turnNumber++;
      this.player = this.player === 'X'? 'O': 'X';
    },
    onClickMoveButton: function(turnNumber) {
      console.log('turnNumber:' + turnNumber);
    }
  }
}
