const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(require('cors')())
app.use(express.json())

app.get('/', async(req, res) => {
    res.send('a')
})

app.listen(5616, () => {
        console.log('success!!!');
    })
    //录入学生
app.post('/api/students', async(req, res) => {
        const student = await Student.create(req.body)
        res.send(student)
    })
    //删除学生
app.post('/api/students/:id', async(req, res) => {
        await Student.findByIdAndDelete(req.params.id)
        res.send({
            status: true
        })
    })
    //修改学生信息
app.get('/api/update/:id', async(req, res) => {
        const student = await Student.findById(req.params.id)
        res.send(student)
    })
    //进行信息更新
app.put('/api/confirmUpdate/:id', async(req, res) => {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body)
        res.send(student)
    })
    //根据学号查询
app.get('/api/findBynumber/:Snum', async(req, res) => {
        const student = await Student.find({ 'number': req.params.Snum })
        res.send(student)
    })
    //根据姓名查询
app.get('/api/findByname/:Sname', async(req, res) => {

        result = {
            data: [],
            total: ''
        }

        var confident = new RegExp(req.query.name)
        var query = Student.find({ $or: [{ "name": confident }] });
        query.count({}, function(err, count) {
                if (err) {
                    res.json(err)
                } else {
                    result.total = count;
                }
            })
            //第几页
        pageSize = parseInt(req.query.pageSize)
        currentPage = parseInt(req.query.currentPage)
        Student.find({}, (err, data) => {
            result.data = data
            res.send(result)
        }).where({ $or: [{ 'name': confident }] }).skip((currentPage - 1) * pageSize).limit(pageSize);
    })
    //学生分页列表
app.all('/api/studentlist', (req, res) => {
    result = {
        data: [],
        total: ''
    }

    var confident = new RegExp(req.query.name)
    var query = Student.find({});
    query.count({}, function(err, count) {
        if (err) {
            res.json(err)
        } else {
            result.total = count;
        }
    })
    pageSize = parseInt(req.query.pageSize)
    currentPage = parseInt(req.query.currentPage)
    Student.find({}, (err, data) => {
        result.data = data
        res.send(result)
    }).skip((currentPage - 1) * pageSize).limit(pageSize);
})

mongoose.connect('mongodb://localhost:27017/studentdata', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true
})
const Student = mongoose.model('Student', new mongoose.Schema({
    name: { type: String },
    number: { type: Number },
    class: { type: String },
    sex: { type: String },
}))