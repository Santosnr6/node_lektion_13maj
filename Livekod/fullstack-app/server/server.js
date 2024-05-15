import express from 'express';
import cors from 'cors';

const app = express();
// Läser av miljövariabeln PORT OM den finns, annars 8000 :)
const PORT = process.env.PORT || 8000;

// Middleware för att ovverridea CORS policyn i webbläsaren
app.use(cors());
// Middleware för att hantera objekt i vår requests body
app.use(express.json());

let todos = [
    { id : 1, task : "Rasta katten", done : false },
    { id : 2, task : "Mata grisen", done : false },
    { id : 3, task : "Käka glass", done : false },
];

// GET request to get all todos
app.get('/api/todos', (req, res) => {
    res.send(todos);
})

// POST request to add new todos
app.post('/api/todos', (req, res) => {
    const {id, task, done} = req.body;
    console.log(req.body);

    if(!task || typeof id !== 'number' || typeof done !== 'boolean') {
        return res.status(400).json({error : "Invalid request body"});
    }
    
    todos.push({id, task, done});
    res.status(201).json({message : "Todo created successfully"});
})

// PUT request to update todo
app.put('/api/todos/:id', (req, res) => {
    const id = req.params.id;
    const {task, done} = req.body;
    const todo = todos.find(t => t.id === parseInt(id));
    console.log(todo);
    if(!todo) {
        return res.status(404).json({error : "Todo not found"});
    }

    if(task !== undefined) {
        todo.task = task;
    }

    if(done !== undefined) {
        todo.done = done;
    }

    res.json({message : "Todo updated successfully"});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`);
})
