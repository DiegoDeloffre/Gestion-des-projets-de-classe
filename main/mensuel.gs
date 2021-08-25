function getLigneDestMensuel(groupe){
  for(var i=2;i<=dest.getLastRow();i++){
    //si la période de calcul correspond à celle d'affichage
    if(dest.getRange(i,1).getValue()==groupe){
      //renvoie le numéro de la ligne
      return i;
    }
  }
}

//calcule les moyennes de toutes les colonnes à analyser d'un groupe 
//et affiche les résultats dans le tableau associé
function getLignesGroupeMensuel(groupe){
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
    //si la ligne appartient au groupe et est du mois en cours
    if(groupe == mysheet.getRange(i,1).getValue() && mysheet.getRange(i,8).getValue().getMonth()==new Date().getMonth()){
      //actualisation des variables
      part += mysheet.getRange(i,4).getValue();
      complet += calcBinaire(i,3,"Oui");
      contact += calcBinaire(i,6,"Oui");
      client += calcBinaire(i,2,"Client");
      tuteur += calcBinaire(i,2,"Tuteur");
      avancement += calcAvancement(i, 5, "Oui, très", "Dans la moyenne");
      cpt++;
    }
  }
  //récupération du numéro de la ligne où l'affichage sera effectué
  var g = getLigneDestMensuel(groupe);
  
  //afficher le nombre de rdv dans la feuille d'affichage du groupe
  dest.getRange(g,2).setValue(cpt);
  //actualisation du compteur pour éviter les divisions par 0
  if(cpt==0){
    cpt++;
  }
  
  //affiche les variables dans les colonnes correspondantes dans la feuille d'affichage du groupe
  dest.getRange(g,6).setValue(+((part/cpt)*2).toFixed(2));
  dest.getRange(g,7).setValue(+(complet/cpt).toFixed(2));
  dest.getRange(g,8).setValue(+(contact/cpt).toFixed(2));
  dest.getRange(g,3).setValue(+client.toFixed(2));
  dest.getRange(g,4).setValue(+tuteur.toFixed(2));
  dest.getRange(g,5).setValue(+(((avancement/cpt))*5).toFixed(2));
}


