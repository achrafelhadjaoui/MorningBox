import { StatusCodes } from "http-status-codes";

class ValidationError extends Error {
  statusCode;

  constructor(message) {
    super(message || "The data you provided is not valid !");
    this.name = "ValidationError";
    this.statusCode = StatusCodes.CONFLICT;
  }
}

export default ValidationError;