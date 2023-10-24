export class ToDo {
  private _name: string;
  private _status: boolean;

  constructor(name: string, status: boolean) {
    this._name = name;
    this._status = status;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get status(): boolean {
    return this._status;
  }

  public set status(value: boolean) {
    this._status = value;
  }
}
