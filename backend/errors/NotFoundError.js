import { StatusCodes } from "http-status-codes";

class NotFoundError extends Error {
  statusCode;

  constructor(message) {
    super(message || "The resource you requested could not be found !");
    this.name = "NotFoundError";
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export default NotFoundError;
