const express = require('express')
const app = express()

app.use(require('cors')())
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/studentdata', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true
})
const Student = mongoose.model('Student', new mongoose.Schema({
    name: { type: String },
    number: { type: String },
    class: { type: String },
    Math: { type: String },
    Physics: { type: String },
    cProgramming: { type: String },
    DataBase: { type: String },
    OperatingSystem: { type: String },
    Java: { type: String },
}))

app.get('/', async(req, res) => {
    res.send('index')
})

//录入学生
app.post('/api/students', async(req, res) => {
        const student = await Student.create(req.body)
        res.send(student)
    })
    //学生列表
app.get('/api/students', async(req, res) => {
        const students = await Student.find()
        res.send(students)
    })
    //删除学生
app.post('/api/students/:id', async(req, res) => {
        await Student.findByIdAndDelete(req.params.id)
        res.send({
            status: true
        })
    })
    //修改学生信息
app.get('/api/students/:id', async(req, res) => {
    const student = await Student.findById(req.params.id)
    res.send(student)
})

app.listen(5616, () => {
    console.log('http://localhost:5616/');
})