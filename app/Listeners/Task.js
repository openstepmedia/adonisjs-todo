'use strict'

const Task = exports = module.exports = {}

Task.created = async (data) => {
    console.log("EventListener: Task Created id:" + data.id)
}
Task.updated = async (data) => {
    console.log("EventListener: Task Updated id:", data.id)
}
Task.deleted = async (data) => {
    console.log("EventListener: Task Deleted id:", data.id)
}
Task.completed = async (data) => {
    console.log("EventListener: Task Completed id:", data.id)
}
