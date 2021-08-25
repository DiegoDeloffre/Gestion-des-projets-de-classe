// récupère et évalue toutes les lignes pour tous les groupes
// et affiche les moyennes dans les lignes correspondantes
function testGlobal(){
  for(var i =0;i<groupes.length;i++){
    getLignesGroupe(groupes[i]);
  }
}

//crée les pages des groupes si elles n'existent pas déjà
//et copie le contenu de la page de modèle
//puis affiche le nom du groupe dans la première colonne
function creationPageGroupe(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  for(var i=0;i< groupes.length;i++){
    var g =groupes[i];
    var templateSheet = ss.getSheetByName('Modele');  //récupère la page afin de l'utiliser comme modèle pour les autres
    if (ss.getSheetByName(g)==null){
      ss.insertSheet(g, {template: templateSheet});     //ajoute une nouvelle feuille portant le nom du groupe
    }
    
    //copie les données de la feuille modèle vers la feuille du groupe
    var spg = ss.getSheetByName(g).getRange(1, 1, 5, 10);
    var source = ss.getSheetByName('Modele').getRange(1, 1, 5, 10);
    source.copyTo(spg);
    
    //affiche le nom du groupe dans la première colonne
    for(var k=2;k<5;k++){
      ss.getSheetByName(g).getRange(k,1).setValue(g);
      var date = dates.getRange(k+1,2).getValue();
      ss.getSheetByName(g).getRange(k,9).setValue(date);
    }
  }
}

//Affiche les noms, prénoms et adresses mails des étudiants sur leurs pages respectives
function AfficherNomEtudiants(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  //pour tout les groupes
  for (var i = 0; i<groupes.length;i++){
    var ligne = 6;
    //parcours des noms des groupes de la feuille étudiants
    for(var q=1;q<25; q++){
      for(var j=1;j<30;j++){
        if(etudiants.getRange(j,q).getValue()==groupes[i]){
          var source = etudiants.getRange(j,q,1,4);
          var destination = ss.getSheetByName(groupes[i]).getRange(ligne,1);
          source.copyTo(destination);
          ligne++;
        }
      }
      q=q+4;
    }
  }
  
}

//initialise la feuille utilisée pour les rapports mensuels
//écrit les noms des groupes dans la première colonne
//et efface le contenu du reste de la page
function initialiserFeuilleMensuel(){
  for(var i = 0; i<groupes.length; i++){
    dest.getRange(i+2,1).setValue(groupes[i]);
  }
  var range = dest.getRange(2, 2, 36, 9);
  range.clearContent();
}

//initialise la feuille utilisée pour le rapport annuel
//efface le contenu de la page
function intitialiserFeuilleAnnuel(){
  var range = feuilleAnnuel.getRange("B2:H7");
  range.clearContent();
}

//réinitialise la page des réponses au questionnaire
function reinitialiserPagePrincipale(){
  var lastRow = mysheet.getLastRow();
  var range = mysheet.getRange(2,1,lastRow,9);
  range.clearContent();
}

//réinitialise les pages des groupes en enlevant les noms
//prénoms et adresses mails des étudiants
function reinitialiserPagesGroupes(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  for(var i = 0; i<groupes.length; i++){
    var feuilleGroupe = ss.getSheetByName("A1");
    var range = feuilleGroupe.getRange("A5:D10");
    range.clear();
  }
}

function initialisation(){
  reinitialiserPagesGroupes();
  reinitialiserPagePrincipale();
  intitialiserFeuilleAnnuel();
  initialiserFeuilleMensuel();
  creationPageGroupe();
  AfficherNomEtudiants();
}

function onOpen(e) {
  SpreadsheetApp.getUi().createMenu('Initialisation').addItem('Réinitialiser les feuilles de calcul', 'initialisation').addToUi();
}