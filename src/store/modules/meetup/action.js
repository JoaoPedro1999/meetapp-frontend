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

/*
export function updateMeetUpRequest(data) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { data },
  };
}


export function updateMeetUpSuccess(profile) {
  return {
    type: '@meetup/UPDATE_MEETUP_SUCCESS',
    payload: { profile },
  };
}

export function updateMeetUpFailure() {
  return {
    type: '@meetup/UPDATE_MEETUP_FAILURE',
  };
}
*/
