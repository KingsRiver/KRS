function getContactEmail(contactType) {
    var conEmail = "";
    var returnMsg = null;
    var capContactResult = aa.people.getCapContactByCapID(capId);
    if (capContactResult.getSuccess()) {
        var Contacts = capContactResult.getOutput();
        for (yy in Contacts)
            if (contactType.equals(Contacts[yy].getCapContactModel().getPeople().getContactType()))
                if (Contacts[yy].getEmail() != null) {
                    return Contacts[yy].getEmail();
                }
    } else
        logDebug("Couldn't find valid email for " + contactType + ".");
}
applicantEmail = getContactEmail;
var params = aa.util.newHashtable();
var altid = capId.getCustomID();
addParameter(params, "$$ALTID$$", altid);
addParameter(params, "$$TASK$$", wfTask);
addParameter(params, "$$TASKSTATUS$$", wfStatus);

// pamaremeters.put(key, value);
var rFiles = new Array();


//aa.document.sendEmailByTemplateName("noreply@accela.com", "applicantEmail", "WFSTATUSUPDATE", params, rFiles);


var internalEmails = "kbrown@vopnc.org;kstepnoski@vopnc.org";
//var internalEmails = lookup("INTERNAL_EMAILS","FIRE");

if ("Ready to Invoice".equals(wfStatus) && "Assess Inspection Fees".equals(wfTask)) {
     aa.document.sendEmailByTemplateName("noreply@accela.com", internalEmails, "", "INVOICE_FIRE_FEES", params, rFiles);
}