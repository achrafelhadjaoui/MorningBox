import { StatusCodes } from "http-status-codes";

class ConflictError extends Error {
  statusCode;

  constructor(message) {
    super(message || "Conflict: This request cannot be completed due to a conflict with the current state of the resource.");
    this.name = "ConflictError";
    this.statusCode = StatusCodes.CONFLICT; // 409
  }
}

export default ConflictError;
