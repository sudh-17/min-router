export default {
  functional: true,
  props: {
    item: {
      type: String,
      required: false
    }
  },
  render: (h, ctx) => {
    return h("button", ctx.props.item);
  }
};
