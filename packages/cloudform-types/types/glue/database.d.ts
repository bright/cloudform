import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class DatabaseInput {
    LocationUri?: Value<string>;
    Description?: Value<string>;
    Parameters?: {
        [key: string]: any;
    };
    Name?: Value<string>;
    constructor(properties: DatabaseInput);
}
export interface DatabaseProperties {
    DatabaseInput: DatabaseInput;
    CatalogId: Value<string>;
}
export default class Database extends ResourceBase<DatabaseProperties> {
    static DatabaseInput: typeof DatabaseInput;
    constructor(properties: DatabaseProperties);
}
