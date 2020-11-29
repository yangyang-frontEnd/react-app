export default function work(
  state = {
    data: {},
    loading: true,
  },
  action
) {
  switch (action.type) {
    case "WORK_LOAD":
      return {
        ...state,
        loading: true,
      };
    case "WORK_LOADOVER":
      return {
        ...state,
        loading: false,
        data: action.data,
      };
  }
  return state;
}
