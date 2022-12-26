"use strict";
// Enums
// Numeric Enums - Default
var StateDefaults;
(function (StateDefaults) {
    StateDefaults[StateDefaults["Pending"] = 0] = "Pending";
    StateDefaults[StateDefaults["Resolved"] = 1] = "Resolved";
    StateDefaults[StateDefaults["Rejected"] = 2] = "Rejected";
})(StateDefaults || (StateDefaults = {}));
console.log(StateDefaults);
let state = StateDefaults.Pending;
console.log(`state type : ${typeof state} value: ${state}`);
// Numeric Enums - Initialized
var StateInitialized;
(function (StateInitialized) {
    StateInitialized[StateInitialized["Pending"] = 0] = "Pending";
    StateInitialized[StateInitialized["Resolved"] = 5] = "Resolved";
    StateInitialized[StateInitialized["Rejected"] = 6] = "Rejected";
})(StateInitialized || (StateInitialized = {}));
console.log(StateInitialized);
state = StateInitialized.Rejected;
console.log(`state type : ${typeof state} value: ${state}`);
// Numeric Enums - Fully Initialized
var HttpResponse;
(function (HttpResponse) {
    HttpResponse[HttpResponse["Ok"] = 200] = "Ok";
    HttpResponse[HttpResponse["Created"] = 201] = "Created";
    HttpResponse[HttpResponse["Accepted"] = 202] = "Accepted";
})(HttpResponse || (HttpResponse = {}));
// String Enums
var StateString;
(function (StateString) {
    StateString["Pending"] = "Pending";
    StateString["Resolved"] = "Resolved";
    StateString["Rejected"] = "Rejected";
})(StateString || (StateString = {}));
