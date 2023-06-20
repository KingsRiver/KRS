showDebug=true;
//logDebug("in dua with TestLoop" + testLoop);

var params = aa.util.newHashtable();
var altid = capId.getCustomID();
addParameter(params, "$$ALTID$$", altid);

//	pamaremeters.put(key, value);
var rFiles = new Array();
//	rFiles.push(rFile);
logDebug("before: in if of DUA check testLoop");
	aa.document.sendEmailByTemplateName("noreply@accela.com", "skonstantinou@vopnc.org", "dburich@vopnc.org, mcarpenter@vopnc.org, acassidy@vopnc.org", "NEW_DOCUMENT_UPLOADED", params, rFiles);
logDebug("after: in dua");