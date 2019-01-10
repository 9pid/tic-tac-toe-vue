export default {
  name: 'Space',
  props: {
    spaceNumber: Number,
    value: String,
    onClick: Function
  },
  methods: {
    clickHandler: function() {
      this.onClick(this.spaceNumber);
    }
  }
}
