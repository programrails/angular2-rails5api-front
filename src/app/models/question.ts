export class Question {
  // Here (and only here) is described the Question model structure received from
  // (sent to) Ruby on Rails.
  // n: number; // integer type field example
  id: string;
  title: string;  
  createdAt: Date;
  updatedAt: Date;
// http://stackoverflow.com/questions/332422/how-do-i-get-the-name-of-an-objects-type-in-javascript  
  className: string = "Question"; // an easy and simple workaround to get the class name at the JS runtime

  // constructor(data: any) {
  constructor(obj: any) {    

    // this.n      = obj && obj.n          || 0;
    // this.id        = data && data.id         || '';
    this.id        = obj && obj.id         || '';    

    // let obj = data["attributes"];

    this.title     = obj && obj.title      || '';
    this.createdAt = obj && obj.created_at || null;
    this.updatedAt = obj && obj.updated_at || null;
  }
}