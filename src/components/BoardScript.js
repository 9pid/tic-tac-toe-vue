import Space from './Space';

export default {
  name: 'Board',
  components: {
    Space
  },
  props: {
    spaces: Array,
    onClick: Function
  }
}
