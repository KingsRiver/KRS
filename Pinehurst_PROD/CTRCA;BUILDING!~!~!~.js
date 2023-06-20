if (matches(currentUserID,"ADMIN")) {
showDebug = false;
showMessage= false;
}
include("EMSE:SetContactRelationshipToContactType");



if (publicUser){
logDebug("New Code for Emailing Applicant");
}


			//send email
			var templateName = lookup("EMAIL_AFTER_ACA_SUBMIT_PARAMETERS", "emailTemplateName");
			var tmpl = aa.communication.getNotificationTemplate(templateName).getOutput();
	        var emailFrom = tmpl.getEmailTemplateModel().getFrom();
	        var emailTo = lookup("EMAIL_AFTER_ACA_SUBMIT_PARAMETERS", "emailTo");
	        var mailCC = "";
			var altid = capId.getCustomID();
	        var EmailParameters = aa.util.newHashtable();
    
			EmailParameters.put("$$ALTID$$", altid);
			EmailParameters.put("$$RECORDTYPE$$", appTypeString);	
	       
	    
			var addr = aa.address.getPrimaryAddressByCapID(capId,"Y").getOutput();
			if ( ! matches(addr,null,"","undefined"))
			{
				EmailParameters.put("$$ADDR$$", addr.getAddressModel().getDisplayAddress());
			}
			else
				EmailParameters.put("$$ADDR$$", "No Address Listed on Record");
			if (appMatch("Building/Commercial/Fire/NA")){emailTo="tmorris@vopnc.org"};	
			if (appMatch("Building/Driveway/NA/NA")){emailTo="mskjellerup@vopnc.org, djohnson@vopnc.org",mailCC="kbrown@vopnc.org, kstepnoski@vopnc.org"};
			if (appMatch("Building/Commercial/Addition/NA")){mailCC="jccole@vopnc.org, dclouston@vopnc.org"};
                        if (appMatch("Building/Commercial/Alteration/NA")){mailCC="jccole@vopnc.org, dclouston@vopnc.org"};
                        if (appMatch("Building/Commercial/New/NA")){mailCC="jccole@vopnc.org, dclouston@vopnc.org"};
                        
			aa.print("altid: " + altid);
			aa.print("Email template name: " + templateName);
			aa.print(" EmailTo: " + emailTo);
			aa.print("CAPID: " + capId);
			aa.print("Record Type: " + appTypeString);
			aa.print("Address: " + addr.getAddressModel().getDisplayAddress());
			
	    	var b1PerId1 = capId.getID1();
	    	var b1PerId2 = capId.getID2();
	    	var b1PerId3 =  capId.getID3();
	    	var capIDModel = aa.cap.createCapIDScriptModel(b1PerId1, b1PerId2, b1PerId3);
	        var fileNames = new Array(); //[];
	        
			aa.document.sendEmailAndSaveAsDocument(emailFrom,emailTo,mailCC,templateName,EmailParameters,capIDModel,fileNames);