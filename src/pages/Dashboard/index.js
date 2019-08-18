import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container, Meetup } from './styles';
import api from '../../services/api';
import { SelectMeetup } from '../../store/modules/meetup/action';

export default function Dashboard() {
  const dispatch = useDispatch();
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get('organizing');

      setMeetups(response.data);
    }

    loadMeetup();
  }, []);

  function handleSelectMeetup(meetup) {
    dispatch(SelectMeetup(meetup));
  }

  return (
    <Container>
      <header>
        <strong>Meus Meetups</strong>
        <Link to="/new">
          <button type="button">
            <MdAddCircleOutline size={24} />
            <span>Novo Meetup</span>
          </button>
        </Link>
      </header>
      <ul>
        {meetups.map(meetup => (
          <Link
            key={meetup.id}
            to="/info"
            onClick={() => handleSelectMeetup(meetup)}
          >
            <Meetup>
              <strong>{meetup.title}</strong>
              <span>{meetup.date}</span>
            </Meetup>
          </Link>
        ))}
      </ul>
    </Container>
  );
}
