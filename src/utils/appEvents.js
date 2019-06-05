import { EventEmitter } from 'fbemitter';

export const AppEvents = {
    onTaskDue: 'TaskDueNotification',
    onAddedToCaseFile: 'AddedToCaseFileNotification',
    onNewFileAdded: 'NewFileAddedNotification',
    onShowTaskDueModal: 'ShowTaskDueModal',
};

export default new EventEmitter();
