var groupes = ['A1','A2','A3','A4','A5','A6','B1','B2','B3','B4','B5','B6','B7','C1','C2','C3','C4','C5','C6','C7','D1','D2','D3','D4','D5','D6','D7','E1','E2','E3','E4','E5','E6','E7'];
var groupeA = ['A1','A2','A3','A4','A5','A6']
var groupeB = ['B1','B2','B3','B4','B5','B6','B7']
var groupeC = ['C1','C2','C3','C4','C5','C6','C7']
var groupeD = ['D1','D2','D3','D4','D5','D6','D7']
var groupeE = ['E1','E2','E3','E4','E5','E6','E7']

var dates  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dates");
var mysheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("RDV PTUTS");
var dest = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Rapport Mensuel");
var etudiants = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Etudiants");
var feuilleAnnuel = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Rapport Annuel");