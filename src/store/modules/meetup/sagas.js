/* eslint-disable no-console */
import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

export function* createMeetup({ payload }) {
  try {
    const { file_id, title, description, location, date, user_id } = payload;

    yield call(api.post, 'meetups', {
      file_id,
      title,
      description,
      location,
      date,
      user_id,
    });
    console.log('chegou aqui');
    toast.success('Meetup criado com sucesso!');

    history.push('/dashboard');
  } catch (err) {
    console.log(err);
    toast.error('Falha na criação do Meetup!');
  }
}

export default all([takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup)]);
