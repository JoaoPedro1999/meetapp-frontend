/* eslint-disable no-console */
import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';
import { updateMeetupSuccess, updateMeetupFailure } from './action';

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

    toast.success('Meetup criado com sucesso!');

    history.push('/dashboard');
  } catch (err) {
    console.log(err);
    toast.error('Falha na criação do Meetup!');
  }
}

export function* CancelMeetup({ payload }) {
  try {
    yield call(api.delete, `meetups/${payload.id}`);

    toast.success('Meetup cancelado com sucesso!');

    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha em cancelar o Meetup!');
  }
}

export function* updateMeetup({ payload }) {
  try {
    const { file_id, title, description, location, date, user_id } = payload;

    const meetup = Object.assign({
      file_id,
      title,
      description,
      location,
      date,
      user_id,
    });

    const response = yield call(api.put, 'meetups', meetup);

    toast.success('Meetup atualizado com sucesso!');

    yield put(updateMeetupSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar o meetup, confira seus dados!');
    yield put(updateMeetupFailure());
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/CANCEL_MEETUP_REQUEST', CancelMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
]);
