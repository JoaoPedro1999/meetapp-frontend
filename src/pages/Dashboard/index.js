import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { Container, Meetup } from './styles';
import api from '../../services/api';
import { SelectMeetup } from '../../store/modules/meetup/action';

export default function Dashboard() {
  const dispatch = useDispatch();
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState();

  useEffect(() => {
    setDate(format(new Date(), 'MM/dd/yyyy'));

    async function loadMeetupps() {
      const response = await api.get('organizing', { params: { date } });
      const data = response.data.map(m => ({
        ...m,
        formattedDate: format(parseISO(m.date), "d 'de' MMMM', às' hh'h'mm", {
          locale: pt,
        }),
      }));
      setMeetups(data);
    }
    loadMeetupps();
  }, [date]);

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
              <span>{meetup.formattedDate}</span>
            </Meetup>
          </Link>
        ))}
      </ul>
    </Container>
  );
}
