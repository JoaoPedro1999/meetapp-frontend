import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdModeEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';
import { CancelMeetupRequest } from '../../store/modules/meetup/action';
import { Container, Card, Information } from './styles';

export default function InfoMeetup() {
  const dispatch = useDispatch();
  const meetup = useSelector(state => state.meetup.active);

  function handleCancelMeetup(id) {
    dispatch(CancelMeetupRequest(id));
  }

  return (
    <Container>
      <header>
        <strong>{meetup.title}</strong>
        <div>
          <Link to="/edit">
            <button type="button">
              <MdModeEdit size={24} />
              <span>Editar</span>
            </button>
          </Link>

          <button type="button" onClick={() => handleCancelMeetup(meetup.id)}>
            <MdDeleteForever size={24} />
            <span>Cancelar</span>
          </button>
        </div>
      </header>
      <Card>
        <img
          src="https://camunda.com/img/events/meetup-example.jpg"
          alt="Meetup"
        />
        <p>{meetup.description}</p>
        <Information>
          <div>
            <MdEvent size={24} color="#ffff" />
            <span>{meetup.date}</span>
          </div>
          <div>
            <MdPlace size={24} color="#ffff" />
            <span>{meetup.location}</span>
          </div>
        </Information>
      </Card>
    </Container>
  );
}
