import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DataLakePrincipal {
    DataLakePrincipalIdentifier?: Value<string>;
    constructor(properties: DataLakePrincipal);
}
export declare class DatabaseIdentifier {
    DatabaseName?: Value<string>;
    Region?: Value<string>;
    CatalogId?: Value<string>;
    constructor(properties: DatabaseIdentifier);
}
export declare class DatabaseInput {
    LocationUri?: Value<string>;
    CreateTableDefaultPermissions?: List<PrincipalPrivileges>;
    Description?: Value<string>;
    Parameters?: {
        [key: string]: any;
    };
    TargetDatabase?: DatabaseIdentifier;
    FederatedDatabase?: FederatedDatabase;
    Name?: Value<string>;
    constructor(properties: DatabaseInput);
}
export declare class FederatedDatabase {
    ConnectionName?: Value<string>;
    Identifier?: Value<string>;
    constructor(properties: FederatedDatabase);
}
export declare class PrincipalPrivileges {
    Permissions?: List<Value<string>>;
    Principal?: DataLakePrincipal;
    constructor(properties: PrincipalPrivileges);
}
export interface DatabaseProperties {
    DatabaseInput: DatabaseInput;
    CatalogId: Value<string>;
}
export default class Database extends ResourceBase<DatabaseProperties> {
    static DataLakePrincipal: typeof DataLakePrincipal;
    static DatabaseIdentifier: typeof DatabaseIdentifier;
    static DatabaseInput: typeof DatabaseInput;
    static FederatedDatabase: typeof FederatedDatabase;
    static PrincipalPrivileges: typeof PrincipalPrivileges;
    constructor(properties: DatabaseProperties);
}
