import produce from 'immer';

const INITIAL_STATE = {
  meetups: [],
  active: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/CREATE_MEETUP_SUCCESS': {
        state.meetups = [...INITIAL_STATE, action.payload.meetups];
        break;
      }
      case '@meetup/SELECT_MEETUP': {
        draft.active = action.payload.active_meetup;
        break;
      }
      case '@meetup/UPDATE_MEETUP_SUCCESS': {
        state.meetups = [...INITIAL_STATE, action.payload.meetups];
        break;
      }
      default:
    }
  });
}
