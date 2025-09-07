declare namespace Express {
  //inserting user prop in the existing Request interface in Express
  export interface Request {
    user?: {
      id: string;
      role: string;
    };
  }
}
