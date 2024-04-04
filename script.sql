create database senai
use senai

CREATE TABLE Agendamentos (
    id INT PRIMARY KEY IDENTITY,
    data_agendamento VARCHAR(10) NOT NULL,
    horario VARCHAR(10) NOT NULL,
    reserva VARCHAR(50) NOT NULL
);
