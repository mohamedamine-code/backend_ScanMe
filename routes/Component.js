const express = require('express');
const router = express.Router();
const Component = require('../models/Component');

// GET /components/:id
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  console.log('Fetching component:', id);
  try {
    const component = await Component.findById(id);
    if (!component) {
      console.log('Component not found:', id);
      return res.status(404).json({ error: 'Component not found' });

    }
    res.json(component);
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /components/  => get all components
router.get('/', async (req, res) => {
  try {
    const components = await Component.find({});
    console.log('All components:', components); // This should log 3 items
    res.json(components);
  } catch (err) {
    console.error('Error fetching components:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST request
router.post('/insert-data', (req, res) => {
  const { _id,
    Society_Name,
    Number_of_Floors,
    Technical_Room_Number,
    Cabinet_Number,
    Switcher,
    Port,
    State_Port, } = req.body;

  const newComponent = Component({
    _id,
    Society_Name,
    Number_of_Floors,
    Technical_Room_Number,
    Cabinet_Number,
    Switcher,
    Port,
    State_Port,
  });
  newComponent.save().then(() => {
    console.log("add sucussefuly");
    res.status(200).json({ message: "Data Saved Succesufully" })
  }).catch((e) => {
    console.log("failed to add: ", e.message || e);
    res.status(500).json({ message: "failed To add" })

  })
})


module.exports = router;
