import { reactive, computed, toRefs } from "vue";

const state = reactive({
  count: 0,
  doubledCount: computed(() => state.count * 2),
});

const incrementCount = () => {
  state.count += 1;
};

export default {
  ...toRefs(state),
  incrementCount,
};
