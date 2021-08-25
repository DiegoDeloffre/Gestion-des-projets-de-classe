//évalue l'avancement du projet et envoie un mail s'il y a un problème
function testAvancement(groupe){
  var g = getDestGroupe(groupe);
  var sheetDest = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(groupe);
  if(sheetDest.getRange(g,5).getValue()<5 && sheetDest.getRange(g,2).getValue()>2){ //moyenne inférieure à 1 et au moins 2 rdv
        var objet = 'Problème avancement projet';
        var message = "Lors de vos rendez-vous avec le tuteur, il a estimé que l'avancement" 
        "de votre projet était insuffisant et que cela pourrait "
        "porter préjudice au bon déroulement du projet, nous vous conseillons" 
        "donc d'y remédier au plus vite";
        envoieMail(objet, message, groupe);
    }
}

//évalue la préparation des rdv et envoie un mail s'il y a un problème
function testPreparation(groupe){
  var g =getDestGroupe(groupe);
  var sheetDest = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(groupe);
    if(sheetDest.getRange(g,6).getValue()<5 && sheetDest.getRange(g,2).getValue()>2){ //moyenne inférieure à 5 et au moins 2 rdv
        var objet = 'Problème préparation rendez-vous';
        var message = "Lors de vos rendez-vous avec le tuteur, il a estimé que ceux-ci n'étaient pas assez préparé et que cela pourrait" 
        "porter préjudice au bon déroulement du projet, nous vous conseillons donc d'y remédier au plus vite";
        envoieMail(objet, message, groupe);
    }
}

//évalue le nombre d'absences lors des rdv et envoie un mail s'l y a un problème
function testGroupeComplet(groupe){
  var g =getDestGroupe(groupe);
  var sheetDest = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(groupe);
    if(sheetDest.getRange(g,7).getValue()<0.5 && sheetDest.getRange(g,2).getValue()>2){ //moyenne inférieure à 0.5 et au moins 2 rdv
        var objet = 'Problème avancement projet';
        var message = "Lors de vos rendez-vous avec le tuteur, il a constaté desabsenses récurrentes et a estimé que cela pourrait porter" 
        "préjudice au bon déroulement du projet, nous vous conseillons donc d'y remédier au plus vite";
        envoieMail(objet, message,groupe);
    }
}

//évalue le nombre de contacts avec le client en dehors des rdv et envoie un mail s'il y a un problème
function testContacts(groupe){
  var g =getDestGroupe(groupe);
  var sheetDest = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(groupe);
    if(sheetDest.getRange(g,8).getValue()<0.5 && sheetDest.getRange(g,2).getValue()>2){ //moyenne inférieure à 0.5 et au moins 2 rdv
        var objet = 'Problème Contact';
        var message = "Le tuteur a estimé qu'il n'y avait pas assez des contacts entre lui et vous et que cela pourrait porter préjudice "
        "au bon déroulement du projet, nous vous conseillons donc d'y remédier au plus vite";
        envoieMail(objet, message, groupe);
    }
}

//récupère les adresse mail des membres du groupe et leur envoie un mail 
function envoieMail(objet, message, groupe){
  var liste = [];
  // stocke les adresses mails des étudiants du groupe passé en paramètre
  for(var i=1;i<25; i++){
    for(var j=1;j<30;j++){
      if(etudiants.getRange(j, i).getValue()==groupe){
        var t = etudiants.getRange(j, i+3).getValue();
        liste.push(t);
      }
    }
    i=i+4;
  }
  
  //Envoie un mail aux adresses stockées dans la liste
  for(var k=0;k<liste.length+1;k++){
    MailApp.sendEmail(liste[k], objet, message);
  }
}

