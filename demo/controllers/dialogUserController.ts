import {ComponentDemo} from '../services/availableComponentBuilder';
@ComponentDemo({
  name: 'user',
  title: 'Dialog user',
  template: require('./../views/dialog/user.html'),
  group: 'dialog',
  controller: 'demoDialogUser as vm'
})
export default class DialogUserController {
  public dialog: any;
  public showDialogData: boolean;
  public dialogDataResults: any;

  /* @ngInject */
  constructor() {
    const dialogFile = require('../data/dialog-data.json');
    this.dialog = dialogFile.resources[0].content[0];
    this.showDialogData = false;
  }
  public refreshField(field) {
    let Promise: any;
    return new Promise((resolve, reject) => {
      resolve({ 'status': 'success' });
    });
  }
  public dialogData(data) {
    this.dialogDataResults = data;
  }
  public showDialogDataResults() {
    this.showDialogData = true;
  }
}
