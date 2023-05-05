export class ResponseMsg {
  public code: number;
  public message: string;
  public data: object;
  public totalElements: number;
  public totalPages: number;
  public pageNumber: number;
  public pageSize: number;
  public numberOfElements: number;

  constructor(code: number, message: string, data: any) {
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
