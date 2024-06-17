const port = 4000;

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const e = require('express');

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect ('mongodb+srv://hasharanethmi2020:oLrnq67RZ0lfCGLz@cluster0.5fqolpu.mongodb.net/petparadise');

// API creation
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Image upload
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({
  storage: storage
});

// Creating Upload Endpoint for Images
app.use('/images', express.static('upload/images'));

app.post('/upload', upload.single('animal'), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`
  });
});

// Schema for creating Animals
const Animal = mongoose.model('Animal', {
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  available: {
    type: Boolean,
    default: true
  }
});

// Create a new animal
app.post('/addanimal', async (req, res) => {

  const animals = await Animal.find();
  let id;
  if (animals.length > 0) {
    let last_animal_array = animals.slice(-1);
    let last_animal = last_animal_array[0]; 
    id = last_animal.id + 1;
  } else {
    id = 1;
  }

  const animal = new Animal({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    age: req.body.age,
    price: req.body.price
  });

  console.log(animal);

  await animal.save();

  console.log('Animal added successfully');

  res.json({
    success: true,
    name: req.body.name,
  });

});



// Get all animals
app.get('/allanimals', async (req, res) => {
  const animals = await Animal.find();
  res.json(animals);
});





// Update animal by ID
app.put('/animal/:id', async (req, res) => {
  const animal = await Animal.findOne({ id: req.params.id });

  if (animal) {
    animal.name = req.body.name;
    animal.image = req.body.image;
    animal.category = req.body.category;
    animal.age = req.body.age;
    animal.price = req.body.price;

    await animal.save();

    res.json({
      success: true,
      name: req.body.name,
    });
  } else {
    res.status(404).send('Animal not found');
  }
});





// Delete animal by ID
app.post('/removeanimal', async (req, res) => {
  await Animal.findOneAndDelete({ id: req.body.id });

  console.log('Animal removed successfully');

  res.json({
    success: true,
    name: req.body.name,
  });
});














// Schema for creating Users
const Users = mongoose.model('Users', {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  cartData: {
    type: Object
  },
  date: {
    type: Date,
    default: Date.now
  }
});


// Create a new user

app.post('/register', async (req, res) => {
  let checkUser = await Users.findOne({ email: req.body.email });

  if (checkUser) {
    return res.status(400).json({
      success: false,
      message: 'User already exists'
    });
  } 

  let cart = {};

  for(let i = 0; i < 300; i++) {
    cart[i] = 0;
  }

  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart
  });

  await user.save();

  const data = {
    user: {
      id: user.id
    }
  };

  const token = jwt.sign(data, 'secret_petparadise');

  res.json({
    success: true,
    token: token
  });

});




// Login user
app.post('/login', async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });

  if (user) {
    const passCompare = req.body.password === user.password;

    if (passCompare) {
      const data = {
        user: {
          id: user.id
        }
      };

      const token = jwt.sign(data, 'secret_petparadise');

      res.json({
        success: true,
        token: token
      });

    } else {
      res.status(400).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

  } else {
    res.status(400).json({
      success: false,
      message: 'User not found'
    });
  }

});


app.listen(port, (err) => {
  if (!err) {
    console.log(`Server is running on port: ` + port);
  } else {
    console.log(err);
  }
});