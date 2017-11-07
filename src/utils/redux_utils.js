export function asyncEffectConsts(type) {
  return {
    default: type,
    saga: `${type}_SAGA`,
    start: `${type}_START`,
    success: `${type}_SUCCESS`,
    failed: `${type}_FAILED`,
    timeout: `${type}_TIMEOUT`,
  };
}

export function syncEffectConsts(type) {
  return {
    default: type,
    saga: `${type}_SAGA`,
    proxy: `${type}_PROXY`,
  };
}

export function createReducer(initialState, handlers) {

  return (state = initialState, action) => {
    const hanlder = handlers[action.type];

    return hanlder ? hanlder(state, action) : state;
  }
}