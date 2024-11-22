const avg = require('../model/avg');

// Retrieve and render all tasks
exports.getAllTests = async (req, res) => {
    try {
      const tasks = await avg.find();
      res.render('index', { tasks });
    } catch (err) {
      console.error('Error fetching tasks:', err);
      res.status(500).send('Internal Server Error');
    }
};  

// Render the form to create a new task
exports.renderCreateForm = (req, res) => {
    res.render('create');
};

// Create a new task
exports.createTest = async (req, res) => {
    try {
        // Safely destructure req.body
        const { subject, mark, weight, date } = req.body;

        // Log destructured values for debugging
        console.log("Destructured:", { subject, mark, weight, date });

        // Check if any required field is missing
        if (!subject || !mark || !weight || !date) {
            throw new Error("All fields (subject, mark, weight, date) are required");
        }

        // Create a new test document and save to MongoDB
        const newTest = new avg({ subject, mark, weight, date });
        await newTest.save();

        console.log("New Test Saved:", newTest);
        res.redirect('/'); // Redirect to the main page after saving
    } catch (err) {
        console.error('Error creating test:', err.message);
        res.status(500).send('Internal Server Error');
    }
};


// Render the edit form for a task
exports.renderEditForm = async (req, res) => {
try {
    const task = await avg.findById(req.params.id);
    if (!task) {
    return res.status(404).send('Task not found');
    }
    res.render('edit', { task });
} catch (err) {
    console.error('Error fetching task for editing:', err);
    res.status(500).send('Internal Server Error');
}
};

// Update an existing task
exports.updateTest = async (req, res) => {
try {
    const { subject, mark, weight, date } = req.body;
    await avg.findByIdAndUpdate(req.params.id, { subject, mark, weight, date });
    res.redirect('/');
} catch (err) {
    console.error('Error updating task:', err);
    res.status(500).send('Internal Server Error');
}
};

// Delete a task
exports.deleteTest = async (req, res) => {
try {
    await avg.findByIdAndDelete(req.params.id);
    res.redirect('/');
} catch (err) {
    console.error('Error deleting task:', err);
    res.status(500).send('Internal Server Error');
}
};
  