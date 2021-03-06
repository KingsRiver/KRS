function editScheduledDate(scheduledDate) // option CapId
{
	var itemCap = capId
	if (arguments.length > 1) itemCap = arguments[1]; // use cap ID specified in args

	var cdScriptObjResult = aa.cap.getCapDetail(itemCap);
	if (!cdScriptObjResult.getSuccess())
		{ logDebug("**ERROR: No cap detail script object : " + cdScriptObjResult.getErrorMessage()) ; return false; }

	var cdScriptObj = cdScriptObjResult.getOutput();

	if (!cdScriptObj)
		{ logDebug("**ERROR: No cap detail script object") ; return false; }

	cd = cdScriptObj.getCapDetailModel();

	vScheduledDate = aa.date.parseDate(scheduledDate);
	
	//cd.setScheduledDate(vScheduledDate); //bug, doesn't work
	cdScriptObj.setScheduledDate(vScheduledDate);

	cdWrite = aa.cap.editCapDetail(cd);

	if (cdWrite.getSuccess())
		{ logDebug("updated scheduled date to " + scheduledDate) ; return true; }
	else
		{ logDebug("**ERROR updating scheduled date: " + cdWrite.getErrorMessage()) ; return false ; }
}
