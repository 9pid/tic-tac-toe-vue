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
      message: 'ゲーム状況をお知らせ',
      turns: [0, 1]
    };
  },
  methods: {
    onClickSpace: function(spaceNumber) {
      console.log('spaceNumber: ' + spaceNumber);
    },
    onClickMoveButton: function(turnNumber) {
      console.log('turnNumber:' + turnNumber);
    }
  }
}
