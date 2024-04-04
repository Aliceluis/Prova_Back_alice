
import express from 'express'
import sql from 'mssql'
import { sqlConfig } from './server.js';

const pool = new sql.ConnectionPool(sqlConfig)
await pool.connect();
const routes = express.Router()
 
routes.get('/', async (req, res)=>{
    
    try{
         const { recordset } =  await pool.query`select * from Agendamentos`
         return res.status(200).json(recordset)
    }
    catch(error){
         return res.status(501).json('algo deu errado')
    }
 })

routes.post('/Agendamento/novo', async (req, res)=>{
    try{
        const { data_agendamento, horario,reserva} = req.body;
        await pool.query`insert into Agendamentos values(${data_agendamento},${horario},${reserva})`
        return res.status(201).json(`agendamento criado com sucesso`)
    }
    catch(error){
        return res.status(501).json('erro ao criar o agendamento')
    }
})

routes.delete('/agendamento/:id', async (req, res)=>{
    try {
        const { id } = req.params
        await pool.query`delete from Agendamentos where id = ${id}`
        return res.status(200).json('A gendamento excluido!')
    } catch (error) {
        console.log(error)
        return res.status(501).json('erro ao excluir...')
    }
})

export default routes
