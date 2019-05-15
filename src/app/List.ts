import uuid from 'uuid/v1';

export class List {
    private _id: number;
    private _name: string;

    constructor(list?: List, generateNewId?: boolean) {
        if (list) {
            if (generateNewId) {
                this.id = uuid();
            } else {
                this.id = list._id;
            }
            this.name = list._name;
        } else {
            this.id = uuid();
        }
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }


    toJSON() {
        return {
            _id: this._id,
            _name: this._name,
        };
    }
}
