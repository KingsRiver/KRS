/*------------------------------------------------------------------------------------------------------/
| Accela Automation
| Accela, Inc.
| Copyright (C): 2012
|
| Program : INCLUDES_CUSTOM.js
| Event   : N/A
|
| Usage   : Custom Script Include.  Insert custom EMSE Function below and they will be 
|	    available to all master scripts
|
| Notes   :
|
/------------------------------------------------------------------------------------------------------*/
function getLatestScheduledDate()
{	
	var inspResultObj = aa.inspection.getInspections(capId);
	if (inspResultObj.getSuccess())
	{
		inspList = inspResultObj.getOutput();
        var array=new Array();  
        var j=0;		
		for (i in inspList)
        {		    			 				
			if (inspList[i].getInspectionStatus().equals("Scheduled"))
			{	                   					
				array[j++]=aa.util.parseDate(inspList[i].getInspection().getScheduledDate());				
			}
		}
		
		var latestScheduledDate=array[0];
		for (k=0;k<array.length;k++)
        {		          	
			temp=array[k];
			if(temp.after(latestScheduledDate))
			{
				latestScheduledDate=temp;
			} 
		}
		return latestScheduledDate;
	}
	return false;
}