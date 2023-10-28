import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user : req.user.id }).populate("user");
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const newTask = new Task({
      title,
      description,
      date,
      user: req.user.id,
    });
    await newTask.save();
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const taskFound = await Task.findById(req.params.id);

  if (!taskFound) return res.status(404).json({ message: "task not found" });

  res.json(taskFound);
  } catch (error) {
    return res.status(404).json({message: "Task not found"})
  }
};
export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask)
      return res.status(404).json({ message: "Task not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateTask = async (req, res) => {
  /* el new en true solo dice que me guarda el dato nuevo */
  const taskFound = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!taskFound) return res.status(404).json({ message: "task not found" });

  res.json(taskFound);
};
