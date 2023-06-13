const express = require('express');
const toDoTasks = require('./data');
const { router } = require('./routes/todoRoutes')


const app = express();
console.log(toDoTasks);

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to the todo application')

})

app.get('/todos', (req, res) => {
    res.json({
        succes: true,
        massage: 'Fetched Todos successfully',
        results: toDoTasks
    })
})

app.post('/todos', (req, res) => {
    toDoTasks.push(req.body);
    res.status(201).json({
        success: true,
        message: 'Added the todo successfully',
        results: req.body
    })
    console.log(req.body)
})

// Get a single todo
app.get('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    // Find the todo in the array
    const todo = toDoTasks.find(todo => todo.id === id);
    if (todo) {
        res.json({
            success: true,
            message: 'Fetched the todo successfully',
            results: todo
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'Todo not found'
        });
    }
});


// Update a todo
app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTask = req.body;

    // Find the index of the todo in the array
    const index = toDoTasks.findIndex(todo => todo.id === id);
    if (index !== -1) {
        // Update the existing todo with the updatedTask
        toDoTasks[index] = { ...toDoTasks[index], ...updatedTask };
        res.json({
            success: true,
            message: 'Updated the todo successfully',
            results: toDoTasks[index]
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'Todo not found'
        });
    }
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    // Find the todo in the array and remove it
    const index = toDoTasks.findIndex(todo => todo.id === id);
    if (index !== -1) {
        const deletedTask = toDoTasks.splice(index, 1);
        res.json({
            success: true,
            message: 'Deleted the todo successfully',
            results: deletedTask
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'Todo not found'
        });
    }
});

app.use('*', (req, res) => {
    res.status(404).json({
        succes: false,
        message: 'Not found'
    })
})

const port = 4000;

app.listen(port, () => console.log(`Server running on port: ${port}`))