if (wfTask == "SR Intake" && wfStatus == "Assigned") {
newAppL1 = "Enforcement";
newAppL2 = "Incident";
newAppL3 = "Building";
newAppL4 = "Illegal Occupancy";
newAppDesc = "Created by " + capId.getCustomID();
include("SR Create Child Cases");
}