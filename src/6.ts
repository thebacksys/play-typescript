// Enums

// Numeric Enums - Default
enum StateDefaults {
  Pending,
  Resolved,
  Rejected,
}

console.log(StateDefaults);

let state: number = StateDefaults.Pending;
console.log(`state type : ${typeof state} value: ${state}`);

// Numeric Enums - Initialized
enum StateInitialized {
  Pending,
  Resolved = 5,
  Rejected,
}

console.log(StateInitialized);
state = StateInitialized.Rejected;
console.log(`state type : ${typeof state} value: ${state}`);

// Numeric Enums - Fully Initialized
enum HttpResponse {
  Ok = 200,
  Created = 201,
  Accepted = 202,
}

// String Enums
enum StateString {
  Pending = "Pending",
  Resolved = "Resolved",
  Rejected = "Rejected",
}
