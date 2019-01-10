export default {
  name: 'MoveButton',
  props: {
    turnNumber: Number,
    onClick: Function
  },
  data: function() {
    return {
      message: 'hoge に移動'
    };
  },
  methods: {
    clickHandler: function() {
      this.onClick(this.turnNumber);
    }
  }
}
