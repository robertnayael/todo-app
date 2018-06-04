import * as types from './types'

export function addTask() {
 	return {type: types.ADD_TASK}
}

export function removeLatestTask() {
    return {type: types.REMOVE_LATEST_TASK}
}

export function clearTasks() {
    return {type: types.CLEAR_TASKS}
}