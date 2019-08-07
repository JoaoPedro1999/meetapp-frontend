import produce from 'immer';

const INITIAL_STATE = {
  meetups: [],
  loanding: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/CREATE_MEETUP_SUCCESS': {
        state.meetups = [...INITIAL_STATE, action.payload.meetups];
        break;
      }
      default:
    }
  });
}
