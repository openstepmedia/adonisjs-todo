'use strict'

const Setting = exports = module.exports = {}

Setting.beforeCreate = async (data) => {
    console.log("EventListener: Setting beforeCreate id:" + data.id)
}
Setting.afterCreate = async (data) => {
    console.log("EventListener: Setting afterCreate id:", data.id)
}
Setting.beforeDelete = async (data) => {
    console.log("EventListener: Setting beforeDelete id:", data.id)
}
Setting.afterDelete = async (data) => {
    console.log("EventListener: Setting afterDelete id:", data.id)
}
