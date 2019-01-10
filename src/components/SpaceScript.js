export default {
  name: 'Space',
  props: {
    spaceNumber: Number,
    spaces: Array,
    onClick: Function
  },
  computed: {
    value: function() {
      return this.spaces[this.spaceNumber];
    }
  },
  methods: {
    clickHandler: function() {
      this.onClick(this.spaceNumber);
    }
  }
}
