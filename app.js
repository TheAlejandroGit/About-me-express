const express = require("express");

const app = express();

app.get('/me', (request, response) => {
    console.log(request.method)
    response.status(200).json({
        name: 'Manuel Mijangos',
        age: '26',
        pais: 'Mexico',
        verb:request.method
    })
    
})

app.post('/metas',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        hobbies:
        ['Programar','Video juegos','Juegos de mesa'],
        verb:req.method
    })
})

app.patch('/metas',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        metas:
        ['Trabajar de programador','Ganar mucho dinero'],
        verb:req.method
    })
})

app.put('/business',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        business:
        ['Google','Facebook','Amazon'],
        verb:req.method
    })
})



app.listen(8000, () => {
    console.log('Server started at port 8000')
})
