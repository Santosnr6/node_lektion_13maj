import express from 'express';

// Här skapar vi en server i app
const app = express();
const PORT = 8000;

// Middleware för att tillååta appen att läsa JSON från request body
app.use(express.json());

app.get('/', (request, response) => {
    response.send('Hello Klassen!');
});

// GET request for all insults
app.get('/insults/', (request, response) => {
    response.send(insults);
});

// GET request for random insult
app.get('/insults/random', (request, response) => {
    const randomIndex = Math.floor(Math.random() * insults.length);
    const insult = insults[randomIndex];

    if(insult) {
        response.send(insult);
    } else {
        response.status(400).send('Random insult not found');
    }
});

// GET request for specific insult
app.get('/insults/:id', (request, response) => {
    const id = request.params.id;
    const insult = insults[id];

    if(insult) {
        response.send(insult);
    } else {
        response.status(400).send('Insult not found');
    }
});

// POST request to add new insult
app.post('/insults/', (request, response) => {
    const newInsult = request.body;

    if(newInsult) {
        insults.push(newInsult);
        response.status(201).json(newInsult);
    } else {
        response.status(400).send('Insult could not be created');
    }
});

// PUT request to update an insult
app.put('/insults/:id', (request, response) => {
    const id = request.params.id;
    const updatedInsult = request.body;

    if(insults[id]) {
        insults[id] = updatedInsult;
        response.json(updatedInsult);
    } else {
        response.status(400).send('Insult not found');
    }
});

// DELETE request to delete specific insult
app.delete('/insults/:id', (request, response) => {
    const id = request.params.id;
    const deletedInsult = insults.splice(id, 1);
    response.status(200).json(deletedInsult);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


const insults = [
    {
      "insult": "Or have we eaten on the insane root That takes the reason prisoner?",
      "play": "Macbeth"
    },
    {
      "insult": "Never hung poison on a fouler toad",
      "play": "Richard III"
    },
    {
      "insult": "He thinks too much: such men are dangerous.",
      "play": "Julius Caesar"
    },
    {
      "insult": "Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs.",
      "play": "The Merchant of Venice"
    },
    {
      "insult": "Give me your hand...I can tell your fortune. You are a fool.",
      "play": "The Two Noble Kinsmen"
    },
    {
      "insult": "He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish!",
      "play": "The Tempest"
    },
    {
      "insult": "It is a tale Told by an idiot, full of sound and fury, Signifying nothing.",
      "play": "Macbeth"
    },
    {
      "insult": "Alas, poor heart, that kiss is comfortless As frozen water to a starved snake.",
      "play": "Titus Andronicus"
    },
    {
      "insult": "He hath eaten me out of house and home; he hath put all substance into that fat belly of his.",
      "play": "Henry IV, Part 2"
    },
    {
      "insult": "Out, you green-sickness carrion! Out, you baggage! You tallow-face!",
      "play": "Romeo and Juliet"
    }
  ];