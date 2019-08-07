import React from 'react';
import { Link } from 'react-router-dom';
import { MdModeEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';
import { Container, Card, Information } from './styles';

export default function InfoMeetup() {
  return (
    <Container>
      <header>
        <strong>Meetup de React Native</strong>
        <div>
          <Link to="/edit">
            <button type="button">
              <MdModeEdit size={24} />
              <span>Editar</span>
            </button>
          </Link>
          <Link to="/dashboard">
            <button type="button">
              <MdDeleteForever size={24} />
              <span>Cancelar</span>
            </button>
          </Link>
        </div>
      </header>
      <Card>
        <img
          src="https://camunda.com/img/events/meetup-example.jpg"
          alt="Meetup"
        />
        <p>
          O Meetup de React Native é um evento que reúne a comunidade de
          desenvolvimento mobile utilizando React a fim de compartilhar
          conhecimento. Todos são convidados. Caso queira participar como
          palestrante do meetup envie um e-mail para
          organizacao@meetuprn.com.br.
        </p>
        <Information>
          <div>
            <MdEvent size={24} color="#ffff" />
            <span>24 de Junho, às 20h</span>
          </div>
          <div>
            <MdPlace size={24} color="#ffff" />
            <span>Rua Guilherme Gembala, 260</span>
          </div>
        </Information>
      </Card>
    </Container>
  );
}
