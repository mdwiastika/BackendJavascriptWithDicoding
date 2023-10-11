class ValidationError extends error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
try {
  console.log("Aman");
  if (!errorCode) {
    throw new ValidationError("");
  }
  console.log("Double Aman");
} catch (error) {
  console.log(error.stack);
} finally {
  console.log("Tetep Dieksekusi");
}
