const express = require('express')
const app = express()
const fileHandler = require('fs');


app.get('/api', function(req, res) {
    fileHandler.readFile('projects.json', (err, data) => {
        if (err) res.send('File not found. First post to create file.');
        else
            res.send(`${data}`);
    })
})

app.post('/add', (req, res) => {
    const reqData = req.body;
    // I scheme what could work taking the data and pushing the reqData on to it
    fileHandler.readFile('projects.json', (err, data) => {
        if (err) res.send('File not found.');
        else
            res.send(`${data}`);
    })
    // fileHandler.writeFile('person.json', `{"name": "${req.query.name}"}`, (err, data) => {
    //     if (err) throw err;
    //     res.send('File created!');
    // });
})

// router.post("/my-endpoint", (req, res) => {
//     // Extract the data from the request body
//     const data = req.body;
  
//     // Perform any necessary data validation
//     if (!data.name) {
//       return res.status(400).send("Name is required");
//     }
  
//     // Perform the task associated with the post request
//     // e.g. Save data to the database
  
//     // Return the appropriate response to the client
//     return res.send("Data saved successfully");
//   });
  
//   module.exports = router;

app.delete('/', (req, res) => {
    fileHandler.unlink('person.json', (err) => {
        if (err) res.send('File not found. First post to create file.');
        else
            res.send('File deleted!');
    });
})

app.put('/:name', (req, res) => {
    fileHandler.writeFile('person.json', `{"name": "${req.params.name}"}`, (err) => {
        if (err) throw err;
        res.send('File updated!');
    });
})

app.use(function(err, req, res, next) {
    console.log(err.stack)
    res.status(500).send('Something broke!')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});