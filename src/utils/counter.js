import { reactive, computed } from "vue";

export default () => {
  const state = reactive({
    count: 0,
    doubledCount: computed(() => state.count * 2),
  });

  const incrementCount = () => {
    state.count += 1;
  };

  return [state, incrementCount];
};
