showDebug=true;
//aa.sendMail("noreply@accela.com","ktaylor@vopnc.org","","dua:somewhere/*/*/*","dua:somewhere/*/*/*"); 
showDebug=true;
//logDebug("in dua with TestLoop" + testLoop);
var params = aa.util.newHashtable();
var altid = capId.getCustomID();
addParameter(params, "$$ALTID$$", altid);
//	pamaremeters.put(key, value);
var rFiles = new Array();
//	rFiles.push(rFile);
logDebug("before: in if of PRA check testLoop");
	aa.document.sendEmailByTemplateName("noreply@accela.com", "jccole@vopnc.org", "dclouston@vopnc.org; tmorris@vopnc.org", "FIREPAYMENTMADE", params, rFiles);

logDebug("after: in PRA");