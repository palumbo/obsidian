function deleteDuplicateFedTaxRows() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(); 
  let lastRow = sheet.getLastRow(); 

  // 17 IS WITHHOLDING ELECTION 
  // 11 IS ADDITIONAL AMOUNT 
  // 2 == KEY 

  for (var i = 0; i < lastRow; i++) {
    let firstKey = sheet.getRange(i+6,2).getValue(); 
    let secondKey = sheet.getRange(i+7,2).getValue();

    if ( firstKey == secondKey ) {
      let row = i+6;
      Logger.log("Row:" + row);
      let firstWithholding = sheet.getRange(i+6,17).getValue(); 
      let secondWithholding = sheet.getRange(i+7,17).getValue(); 
      let firstAdditionalAmount = sheet.getRange(i+6,11).getValue(); 
      let secondtAdditionalAmount = sheet.getRange(i+67,11).getValue(); 
      let firstNumberOfAllowances = sheet.getRange(i+6,10).getValue(); 
      let secondNumberOfAllowances = sheet.getRange(i+6,10).getValue(); 

      if ( firstWithholding == "" && firstAdditionalAmount == "" && firstNumberOfAllowances == "") {
        sheet.deleteRow(i+6);
        sheet.getRange(i+7,1,1,20).setBackground('red');
      } else if ( secondWithholding == "" && secondtAdditionalAmount == "" && secondNumberOfAllowances == "") {
        sheet.deleteRow(i+7); 
        sheet.getRange(i+6,1,1,20).setBackground('red'); 
      }; 
    } 
  }
}
