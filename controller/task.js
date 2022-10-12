const getallItem = (req, res) => {
  res.send('all items from files')
}

const createTask = (req, res) => {
  console.log(req.body)
  res.json(req.body)
}

const getask = (req, res) => {
  res.json({ id: req.params.id })
}
const updateTask = (req, res) => {
  res.send('update task')
}
const deleteTask = (req, res) => {
  res.send('delete task')
}

module.exports = { getallItem, createTask, getask, updateTask, deleteTask }
