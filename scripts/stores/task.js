import { Dispatcher } from 'flux';

import userActions from '../actions/task';
import {
  EventEmitter
} from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';

var tData = {
  tasks: []
};

var CHANGE_EVENT = 'change';
class TaskStoreClass extends EventEmitter {

  getTasks() {
    return tData.tasks;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
};

var taskStore = new TaskStoreClass();

AppDispatcher.register(function (data) {

  switch (data.action.actionType) {
    case "createTask":
    var name = {
      "name":data.action.name.name
    }
      tData.tasks.push(name);
      taskStore.emitChange();
      break;

    case "fetchTask":
      tData.tasks = [{"name": "Requirement Analysis"}];
      taskStore.emitChange();
      break;

    default:
  }
});

export default taskStore;