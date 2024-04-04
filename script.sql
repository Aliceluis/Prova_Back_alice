create database Agendamentos
use senai

CREATE TABLE Agendamentos (
    id INT PRIMARY KEY IDENTITY,
    data_agendamento VARCHAR(10) NOT NULL,
    hora VARCHAR(10) NOT NULL,
    motivo_reserva VARCHAR(50) NOT NULL
);
