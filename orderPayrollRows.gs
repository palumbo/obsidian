function orderPayrollRows() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(); 
  let lastRow = sheet.getLastRow(); 

  for (var i = 1; i < lastRow; i++) {
    let check1 = sheet.getRange(i+7,2).getValue(); // GETS FIRST VALUE IN COLUMN B
    let check2 = sheet.getRange(i+6,2).getValue(); // GETS SECOND VALUE

    if (check1 == check2) {
      let amount = sheet.getRange(i+7,33).getValue();
      let percent = sheet.getRange(i+7,34).getValue(); 

      if (amount != "" || percent != "") {
        Logger.log(i+7 + " | " + amount); Logger.log(i+7 + " | " + percent);
        let rowToMove = sheet.getRange(i+7,1,1,35);
        rowToMove.setBackground('red');
        sheet.moveRows(rowToMove,i+6);
      }
    }
  }

}
