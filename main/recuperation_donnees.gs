//récupère la ligne d'un groupe donné dans la feuille d'affichage
function getDestGroupe(groupe){
  // récupère la feuille d'affichage du groupe
  var sheetDest = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(groupe);
  
  for(var i=2;i<=sheetDest.getLastRow();i++){
    //si la période de calcul correspond à celle d'affichage
    if(getPeriode(sheetDest.getRange(i,9).getValue())==getPeriode(new Date())){
      //renvoie le numéro de la ligne
      return i;
    }
  }
}

//compare deux dates et renvoie un numéro de période
function getPeriode(date){
  if(date.valueOf()<= dates.getRange(3,2).getValue().valueOf()){
    return 1;
  }else if(date.valueOf()<= dates.getRange(4,2).getValue().valueOf()){
    return 2;
  }else{
    return 3;
  }
}


//calcule les moyennes de toutes les colonnes à analyser d'un groupe 
//et affiche les résultats dans le tableau associé
function getLignesGroupe(groupe){
  //initialisation des variables
  var cpt=0;
  var part = 0;
  var complet = 0;
  var contact = 0;
  var client = 0;
  var tuteur = 0;
  var avancement = 0;
  
  //pour toutes les lignes de ma feuille
  for (var i=2;i<=mysheet.getLastRow();i++){
    //si la ligne a été ajoutée dans la bonne période
    if(groupe == mysheet.getRange(i,1).getValue() && getPeriode(mysheet.getRange(i,8).getValue())==getPeriode(new Date())){
      //actualisation des variables
      part += +mysheet.getRange(i,4).getValue();
      complet += calcBinaire(i,3,"Oui");
      contact += calcBinaire(i,6,"Oui");
      client += calcBinaire(i,2,"Client");
      tuteur += calcBinaire(i,2,"Tuteur");
      avancement += calcAvancement(i, 5, "Oui, très", "Dans la moyenne");
      cpt++;
    }
  }
  // récupère la feuille d'affichage du groupe
  var sheetDest = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(groupe);
  
  //récupération du numéro de la ligne où l'affichage sera effectué
  var g = getDestGroupe(groupe);
  
  //afficher le nombre de rdv dans la feuille d'affichage du groupe
  sheetDest.getRange(g,2).setValue(cpt);
  //actualisation du compteur pour éviter les divisions par 0
  if(cpt==0){
    cpt++;
  }
  
  //affiche les variables dans les colonnes correspondantes dans la feuille d'affichage du groupe
  sheetDest.getRange(g,6).setValue(+((part/cpt)*2).toFixed(2));
  sheetDest.getRange(g,7).setValue(+(complet/cpt).toFixed(2));
  sheetDest.getRange(g,8).setValue(+(contact/cpt).toFixed(2));
  sheetDest.getRange(g,3).setValue(+client.toFixed(2));
  sheetDest.getRange(g,4).setValue(+tuteur.toFixed(2));
  sheetDest.getRange(g,5).setValue(+(((avancement/cpt))*5).toFixed(2));
}