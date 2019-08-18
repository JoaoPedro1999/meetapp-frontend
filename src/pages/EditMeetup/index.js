import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdDone } from 'react-icons/md';
import MeetupPhoto from '../../components/MeetupPhoto';
import { updateMeetupRequest } from '../../store/modules/meetup/action';

import { Container } from './styles';

export default function EditMeetup() {
  const meetup = useSelector(state => state.meetup.active);
  const dispatch = useDispatch();
  console.log(meetup);

  function handleSubmit(data) {
    console.log(data);
    // dispatch(updateMeetupRequest(data));
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <MeetupPhoto name="meetup_id" />

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
          <span>Salvar Meetup</span>
        </button>
      </Form>
    </Container>
  );
}
