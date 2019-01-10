export default {
  name: 'MoveButton',
  props: {
    turnNumber: Number,
    onClick: Function
  },
  computed: {
    message: function() {
      if (this.turnNumber ==- 0) return 'Go to game start';
      return 'Go to turn #' + this.turnNumber;
    }
  },
  methods: {
    clickHandler: function() {
      this.onClick(this.turnNumber);
    }
  }
}
