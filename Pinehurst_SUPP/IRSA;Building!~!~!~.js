showDebug = true;
showMessage = true;

if (inspType == "Final Inspection" && inspResult == "Final Inspection Complete") {
    updateTask("Permit Status", "Finaled", "Updated by Inspection Result", "Note");
}
if (inspType == "Final" && inspResult == "Passed") {
    closeTask("Final Inspection", "Finaled", "Updated by Inspection Result", "Note");
	// https://grayquarter.zendesk.com/agent/tickets/4556
	updateTask("Permit Status", "Finaled", "Updated by Inspection Result", "Note");
}
if (inspType == "Final Inspection" && inspResult == "Finaled") {
    updateTask("Permit Status", "Finaled", "Updated by Inspection Result", "Note");
}
if (inspType == "Final" && inspResult == "Passed") {
    updateTask("Permit Status", "Finaled", "Updated by Inspection Result", "Note");
}
if (inspType == "Electrical Final" && inspResult == "Passed") {
    closeTask("Final Inspection", "Finaled", "Updated by Inspection Result", "Note");
}
if (inspType == "Plumbing Final" && inspResult == "Passed") {
    closeTask("Final Inspection", "Finaled", "Updated by Inspection Result", "Note");
}
if (inspType == "Mechanical Final" && inspResult == "Passed") {
    closeTask("Final Inspection", "Finaled", "Updated by Inspection Result", "Note");
}
if (inspType == "Building Final" && inspResult == "Passed") {
    closeTask("Inspection", "Final Inspection Complete", "Updated by Inspection Result", "Note");
}
if (inspType == "Electrical Final" && inspResult == "Passed") {
    closeTask("Inspection", "Final Inspection Complete", "Updated by Inspection Result", "Note");
}
if (inspType == "Plumbing Final" && inspResult == "Passed") {
    closeTask("Inspection", "Final Inspection Complete", "Updated by Inspection Result", "Note");
}
if (inspType == "Mechanical Final" && inspResult == "Passed") {
    closeTask("Inspection", "Final Inspection Complete", "Updated by Inspection Result", "Note");
}
if (inspType == "Sign Final" && inspResult == "Passed") {
    closeTask("Inspection", "Final Inspection Complete", "Updated by Inspection Result", "Note");
}
if (inspType == "Roof Final" && inspResult == "Passed") {
    closeTask("Inspection", "Final Inspection Complete", "Updated by Inspection Result", "Note");
}
if (inspType == "Fence Final" && inspResult == "Passed") {
    closeTask("Inspection", "Final Inspection Complete", "Updated by Inspection Result", "Note");
}
if (inspType == "Grading Final" && inspResult == "Passed") {
    closeTask("Inspection", "Final Inspection Complete", "Updated by Inspection Result", "Note");
}
if (inspType == "Solar Final" && inspResult == "Passed") {
    closeTask("Inspection", "Final Inspection Complete", "Updated by Inspection Result", "Note");
}
if (inspType == "Building Final" && inspResult == "Passed") {
    updateTask("Permit Status", "Finaled", "Updated by Inspection Result", "Note");
}
if (inspType == "Electrical Final" && inspResult == "Passed") {
    updateTask("Permit Status", "Finaled", "Updated by Inspection Result", "Note");
}
if (inspType == "Plumbing Final" && inspResult == "Passed") {
    updateTask("Permit Status", "Finaled", "Updated by Inspection Result", "Note");
}
if (inspType == "Mechanical Final" && inspResult == "Passed") {
    updateTask("Permit Status", "Finaled", "Updated by Inspection Result", "Note");
}
if (inspType == "Sign Final" && inspResult == "Passed") {
    updateTask("Permit Status", "Finaled", "Updated by Inspection Result", "Note");
}
if (inspType == "Roof Final" && inspResult == "Passed") {
    updateTask("Permit Status", "Finaled", "Updated by Inspection Result", "Note");
}
if (inspType == "Fence Final" && inspResult == "Passed") {
    updateTask("Permit Status", "Finaled", "Updated by Inspection Result", "Note");
}
if (inspType == "Grading Final" && inspResult == "Passed") {
    updateTask("Permit Status", "Finaled", "Updated by Inspection Result", "Note");
}
if (inspType == "Solar Final" && inspResult == "Passed") {
    updateTask("Permit Status", "Finaled", "Updated by Inspection Result", "Note");
}
// https://grayquarter.zendesk.com/agent/tickets/4556
if (inspType == "Underground LP Tank" && inspResult == "Passed") {
    updateTask("Permit Status", "Finaled", "Updated by Inspection Result", "Note");
}
if (inspType == "Street Cut Final" && inspResult == "Passed") {
    closeTask("Inspection", "Final Inspection Complete", "Updated by Inspection Result", "Note");
}

//New Code for Emaiing Applicant
logDebug("New Code for Emaiing Applicant");
var contacts = aa.people.getCapContactByCapID(capId).getOutput();
for (index in contacts) {
    var contact = contacts[index].getCapContactModel();
    if (contact.getContactType() == 'Applicant', 'Contact') {
        contactEmail = contact.getEmail();
        if (contactEmail != null) {
            //send email
            var templateName = 'MESSAGE_NOTICE_RESULT_INSPECTION';
            var tmpl = aa.communication.getNotificationTemplate(templateName).getOutput();
            var emailFrom = tmpl.getEmailTemplateModel().getFrom();
            var emailTo = contactEmail;
            var mailCC = "";
            var emailParameters = aa.util.newHashtable();
            addParameter(emailParameters, "$$INSPITEM$$", inspType); //inspType is Global Var
            addParameter(emailParameters, "$InspItem$", inspType); //inspType is Global Var
            addParameter(emailParameters, "$InspResult$", inspResult); //InspResult is Global Var
            addParameter(emailParameters, "$$PERMITADDR$$", getAddressInALine());
            addParameter(emailParameters, "$PERMITAPPTYP$", cap.getCapType().getAlias());
            addParameter(emailParameters, "$COMPLETEDATE$", inspResultDate);
            addParameter(emailParameters, "$$INSP$$", inspObj.getInspector().getLastName() + ", " + inspObj.getInspector().getFirstName());
            addParameter(emailParameters, "$capID$", capId.getCustomID());
            addParameter(emailParameters, "$InspComment$", inspComment);

            var b1PerId1 = capId.getID1();
            var b1PerId2 = capId.getID2();
            var b1PerId3 = capId.getID3();
            var capIDModel = aa.cap.createCapIDScriptModel(b1PerId1, b1PerId2, b1PerId3);
            var fileNames = new Array(); //[];

            aa.document.sendEmailAndSaveAsDocument(emailFrom, emailTo, mailCC, templateName, emailParameters, capIDModel, fileNames);

        }
    }
}

function getAddressInALine() {

    var capAddrResult = aa.address.getAddressByCapId(capId);
    var addressToUse = null;
    var strAddress = "";

    if (capAddrResult.getSuccess()) {
        var addresses = capAddrResult.getOutput();
        if (addresses) {
            for (zz in addresses) {
                capAddress = addresses[zz];
                if (capAddress.getPrimaryFlag() && capAddress.getPrimaryFlag().equals("Y"))
                    addressToUse = capAddress;
            }
            if (addressToUse == null)
                addressToUse = addresses[0];

            if (addressToUse) {
                strAddress = addressToUse.getHouseNumberStart();
                var addPart = addressToUse.getStreetDirection();
                if (addPart && addPart != "")
                    strAddress += " " + addPart;
                var addPart = addressToUse.getStreetName();
                if (addPart && addPart != "")
                    strAddress += " " + addPart;
                var addPart = addressToUse.getStreetSuffix();
                if (addPart && addPart != "")
                    strAddress += " " + addPart;
                var addPart = addressToUse.getCity();
                if (addPart && addPart != "")
                    strAddress += " " + addPart + ",";
                var addPart = addressToUse.getState();
                if (addPart && addPart != "")
                    strAddress += " " + addPart;
                var addPart = addressToUse.getZip();
                if (addPart && addPart != "")
                    strAddress += " " + addPart;
                return strAddress
            }
        }
    }
    return null;
}
