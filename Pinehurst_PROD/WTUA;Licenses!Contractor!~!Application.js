if (wfTask == "License Issuance" && wfStatus == "Issued") {
include("LIC Establish Links to Reference Contacts");
}
if (wfTask == "License Issuance" && wfStatus == "Issued") {
include("LIC Issue Business License");
}
if (wfTask == "License Issuance" && wfStatus == "Issued") {
include("EMSE:LicProfLookup");
}