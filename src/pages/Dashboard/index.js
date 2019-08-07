import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container, Meetup } from './styles';
import api from '../../services/api';

export default function Dashboard() {
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get('organizing');

      setMeetup(response.data);
    }

    loadMeetup();
  }, []);

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
        {meetup.map(info => (
          <Link key={info.id} to="/info">
            <Meetup>
              <strong>{info.title}</strong>
              <span>{info.date}</span>
            </Meetup>
          </Link>
        ))}
      </ul>
    </Container>
  );
}
