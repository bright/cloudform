import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class DatabaseInput {
    LocationUri?: Value<string>;
    Description?: Value<string>;
    Parameters?: {
        [key: string]: any;
    };
    TargetDatabase?: DatabaseIdentifier;
    Name?: Value<string>;
    constructor(properties: DatabaseInput);
}
export declare class DatabaseIdentifier {
    DatabaseName?: Value<string>;
    CatalogId?: Value<string>;
    constructor(properties: DatabaseIdentifier);
}
export interface DatabaseProperties {
    DatabaseInput: DatabaseInput;
    CatalogId: Value<string>;
}
export default class Database extends ResourceBase<DatabaseProperties> {
    static DatabaseInput: typeof DatabaseInput;
    static DatabaseIdentifier: typeof DatabaseIdentifier;
    constructor(properties: DatabaseProperties);
}
