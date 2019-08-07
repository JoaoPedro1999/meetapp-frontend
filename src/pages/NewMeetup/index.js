/* eslint-disable no-shadow */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdDone } from 'react-icons/md';
import MeetupPhoto from '../../components/MeetupPhoto';

import { Container } from './styles';
import { createMeetUpRequest } from '../../store/modules/meetup/action';

export default function NewMeetup() {
  const user = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleSubmit({ file_id, title, description, location, date }) {
    dispatch(
      createMeetUpRequest(file_id, title, description, location, date, user.id)
    );
    console.log(user.id);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <MeetupPhoto name="file_id" />

        <Input name="title" placeholder="Titulo do Meetup" />
        <Input
          type="text"
          name="description"
          placeholder="Descrição Completa"
        />
        <Input type="text" name="date" placeholder="Data do Meetup" />
        <Input type="text" name="location" placeholder="Localização" />

        <button type="submit">
          <MdDone size={24} />
          <span>Criar Meetup</span>
        </button>
      </Form>
    </Container>
  );
}
