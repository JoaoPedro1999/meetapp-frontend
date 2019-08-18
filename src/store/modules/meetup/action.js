export function createMeetUpRequest(
  file_id,
  title,
  description,
  location,
  date,
  user_id
) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: { file_id, title, description, location, date, user_id },
  };
}

export function createMeetUpSuccess({ meetups }) {
  return {
    type: '@meetup/CREATE_MEETUP_SUCCESS',
    payload: { meetups },
  };
}

export function SelectMeetup(active_meetup) {
  return {
    type: '@meetup/SELECT_MEETUP',
    payload: { active_meetup },
  };
}

export function CancelMeetupRequest(id) {
  return {
    type: '@meetup/CANCEL_MEETUP_REQUEST',
    payload: { id },
  };
}

export function updateMeetupRequest(data) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function updateMeetupSuccess(meetup) {
  return {
    type: '@meetup/UPDATE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function updateMeetupFailure() {
  return {
    type: '@meetup/UPDATE_MEETUP_FAILURE',
  };
}
