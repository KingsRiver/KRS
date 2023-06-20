// replaced by https://grayquarter.zendesk.com/agent/tickets/4534
/*

if (matches(AInfo["Fire Sprinklers Included in Project?"], "YES", "Yes")) {
updateFee("BLD_200", "BLD_COMM_NEW", "FINAL", 1, "Y");
}

if (matches(AInfo["Stand Pipe included in project?"], "YES", "Yes")) {
updateFee("BLD_210", "BLD_COMM_NEW", "FINAL", 1, "Y");
}

if (matches(AInfo["Fire Alarms or Detection Systems included in project?"], "YES", "Yes")) {
updateFee("BLD_220", "BLD_COMM_NEW", "FINAL", 1, "Y");
}
*/

// https://grayquarter.zendesk.com/agent/tickets/4534

switch (String(AInfo["Type of Work"])) {
case "Fire Alarm or Detections System":
    updateFee("BLD_200", "BLD_FIRE", "FINAL", 1, "Y");
    break;
case "Fire Sprinkler System":
    updateFee("BLD_220", "BLD_FIRE", "FINAL", 1, "Y");
    break;
case "Fire Standpipe System":
    updateFee("BLD_210", "BLD_FIRE", "FINAL", 1, "Y");
    break;
case "Hood Suppression System":
    updateFee("BLD_120", "BLD_FIRE", "FINAL", 1, "Y");
    break;
default: // Other
    updateFee("BLD_130", "BLD_FIRE", "FINAL", 1, "Y");
    break;
}
