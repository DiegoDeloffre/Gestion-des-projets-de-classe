//Permet de calculer la moyenne des questions avec deux réponses possibles
function calcBinaire(compteur, colonne, valeur){
  if(mysheet.getRange(compteur,colonne).getValue()==valeur){
    return 1;
  }else{
    return 0;
  }
}

//Permet de calculer la moyenne de l'avancement
function calcAvancement(compteur, colonne, valeur1, valeur2){
  if(mysheet.getRange(compteur,colonne).getValue()==valeur1){
    return 2;
  }else if(mysheet.getRange(compteur,colonne).getValue()==valeur2){
    return 1;
  }else{
    return 0;
  }
}






