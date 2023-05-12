import BaseError from './baseError';
import httpStatusCode from './httpStatusCode';

class Api404Error extends BaseError {
  constructor(
    name,
    statusCode = httpStatusCode.NOT_FOUND,
    description = 'NOT_FOUND'
  ) {
    super(name, statusCode, description);
  }
}

export default Api404Error;
