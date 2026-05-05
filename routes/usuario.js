import  express  from 'express'
const router = express.Router();
import Usuario from '../models/usuario.js'

router.get('/', async (req, res) => {
    try {
        const usuario = await Usuario.findAll()
        res.json(usuario)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao buscar usuários '});
    }
})

router.post('/', async (req, res) => {
    try{
        const { email, senha } = req.body

        const novoUsuario = await Usuario.create({
            email,
            senha
        })

        res.status(201).json(novoUsuario)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao criar usuário '})
    }
})

export default router