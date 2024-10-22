const express = require('express');
const cors  = require('cors');
const PORT = 5000;

const app = express();

app.use(express.json());
app.use(cors());

let movies =  [ 

    {
        title: 'Zindagi na milegi dobara',
        year: '2011',
        genre: 'drama',
        director: 'Zoya Akhtar',
        actors: 'Hrithik Roshan',
        description: 'Hindi'
    },
    {
        title: 'Avengers Endgame',
        year: '2019',
        genre: 'Heroes',
        director: 'Russo brothers',
        actors: 'Robert Downey Jr.',
        description: 'English'
    },
]


app.get('/movie' ,(req,res) => {
    res.json(movies)
})

app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})