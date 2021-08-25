function Cancel() {
  var SS = SpreadsheetApp.getActiveSpreadsheet();
  var ui = SpreadsheetApp.getUi();

  // first prompt
  var presult = ui.prompt("Rentrez le mot de passe pour accéder au document",ui.ButtonSet.OK_CANCEL);
  var password = "groupec5";
  var pbutton = presult.getSelectedButton();
  var ptext = presult.getResponseText();

  // User clicked "OK" on first prompt
  if (pbutton == ui.Button.CANCEL) {
    Cancel();
    } else if (pbutton == ui.Button.CLOSE) {
      Cancel();
    } else if (ptext != password) {
      Password();   
    } else {
      "Insert whatever action you would want them to do after the password works here"
    }
  }

function Password() {
  var SS = SpreadsheetApp.getActiveSpreadsheet();
  var ui = SpreadsheetApp.getUi();
  var response = ui.alert("Mot de passe incorrect",ui.ButtonSet.OK_CANCEL);

  if (response == ui.Button.CANCEL) {
    Cancel();
  } else if (response == ui.Button.CLOSE) {
    Cancel();
    ui.Button.CLOSE;
  } else {
    Cancel();
  }
}