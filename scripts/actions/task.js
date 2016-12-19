import {
  getTasks
} from '../services/task';

import AppDispatcher from '../dispatcher/AppDispatcher';

import {
  Dispatcher
} from 'flux';

var todoActions = {
  fetchTasks: function (data) {
    AppDispatcher.handleAction({
      actionType: "fetchTask",
      data: data
    })

  },
  createTask: function (data) {
    var name = data;
    AppDispatcher.handleAction({
      actionType: "createTask",
      name: name
    });
  }
};

export default todoActions;