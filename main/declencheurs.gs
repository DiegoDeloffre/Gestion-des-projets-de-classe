//fonction à déclencher lors de l'ajout d'une ligne
//récupère et calcule les lignes du groupe
//teste les valeurs à évaluer et envoie les mails
function testGroupe(){
  var groupe = mysheet.getRange(mysheet.getLastRow(),1);
  getLignesGroupe(groupe);
  testAvancement(groupe);
  testPreparation(groupe);
  testGroupeComplet(groupe);
  testContacts(groupe);
}

//Rapport mensuel envoyé en deux fois car l'envoie de mail est limité à 100 par jour
//Fonction à déclendher les deux derniers jours du mois

//fonction qui établit toutes les moyennes du mois en cours
//et envoie un mail aux étudiants concernés
//à déclencher à la fin du mois
function rapportMensuel(){
  var objet= "RapportMensuel";
  for(var i=0;i<= groupes.length/2;i++){
    getLignesGroupeMensuel(groupes[i]);
    var message = "Au cours de ce mois ci, vous avez pris"+dest.getRange(i+2,2).getValue()+" rendez-vous, "+dest.getRange(i+2,4).getValue()+" avec le tuteur et "+dest.getRange(i+2,3).getValue()+" avec le client."
    "Ceux-ci ont noté votre avancement à "+ dest.getRange(i+2,5).getValue()+ " sur 10 et votre niveau de préparation à "+dest.getRange(i+2,6).getValue()+" sur 10."
    "Le groupe était également incomplet lors de "+dest.getRange(i+2,7).getValue()+" rendez-vous et vous avez pris contact "+dest.getRange(i+2,8).getValue()+"fois avec le client ou le tuteur." 
    envoieMail(objet, message, groupes[i]);
  }
}

//fonction qui établit toutes les moyennes du mois en cours
//et envoie un mail aux étudiants concernés
//à déclencher à la fin du mois
function rapportMensuel2(){
  var objet= "RapportMensuel";
  for(var i=groupes.length/2; i<= groupes.length;i++){
    getLignesGroupeMensuel(groupes[i]);
    var message = "Au cours de ce mois ci, vous avez pris"+dest.getRange(i+2,2).getValue()+" rendez-vous, "+dest.getRange(i+2,4).getValue()+" avec le tuteur et "+dest.getRange(i+2,3).getValue()+" avec le client."
    "Ceux-ci ont noté votre avancement à "+ dest.getRange(i+2,5).getValue()+ " sur 10 et votre niveau de préparation à "+dest.getRange(i+2,6).getValue()+" sur 10."
    "Le groupe était également incomplet lors de "+dest.getRange(i+2,7).getValue()+" rendez-vous et vous avez pris contact "+dest.getRange(i+2,8).getValue()+"fois avec le client ou le tuteur." 
    envoieMail(objet, message, groupes[i]);
  }
}

function rapportAnnuel(){
  getLignesGroupeAnnuel(groupeA);
  getLignesGroupeAnnuel(groupeB);
  getLignesGroupeAnnuel(groupeC);
  getLignesGroupeAnnuel(groupeD);
  getLignesGroupeAnnuel(groupeE);
}


function envoiRapportAnnuel(){
  var objet = 'Rapport Annuel';
  for(var i = 0;i<groupes.length/2; i++){
    var message = "Le rapport annuel est disponible sur le site du suivi des projets tuteurés. http://sites.google.com";
    envoieMail(objet, message, groupes[i]);
  }
}
  
function envoiRapportAnnuel2(){
  var objet = 'Rapport Annuel';
  for(var i = groupes.length/2;i<groupes.length; i++){
    var message = "Le rapport annuel est disponible sur le site du suivi des projets tuteurés. https://sites.google.com/view/sitesptut/rapport-annuel";
    envoieMail(objet, message, groupes[i]);
  }
}
