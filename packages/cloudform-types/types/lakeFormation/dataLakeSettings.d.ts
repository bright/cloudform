import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare type Admins = List<DataLakePrincipal>;
export declare type CreateDatabaseDefaultPermissions = List<PrincipalPermissions>;
export declare type CreateTableDefaultPermissions = List<PrincipalPermissions>;
export declare class DataLakePrincipal {
    DataLakePrincipalIdentifier: Value<string>;
    constructor(properties: DataLakePrincipal);
}
export declare type ExternalDataFilteringAllowList = List<DataLakePrincipal>;
export declare class PrincipalPermissions {
    Permissions: List<Value<string>>;
    Principal: DataLakePrincipal;
    constructor(properties: PrincipalPermissions);
}
export interface DataLakeSettingsProperties {
    AllowExternalDataFiltering?: Value<boolean>;
    ExternalDataFilteringAllowList?: ExternalDataFilteringAllowList;
    CreateTableDefaultPermissions?: CreateTableDefaultPermissions;
    MutationType?: Value<string>;
    Parameters?: {
        [key: string]: any;
    };
    AllowFullTableExternalDataAccess?: Value<boolean>;
    Admins?: Admins;
    CreateDatabaseDefaultPermissions?: CreateDatabaseDefaultPermissions;
    AuthorizedSessionTagValueList?: List<Value<string>>;
    TrustedResourceOwners?: List<Value<string>>;
}
export default class DataLakeSettings extends ResourceBase<DataLakeSettingsProperties> {
    static DataLakePrincipal: typeof DataLakePrincipal;
    static PrincipalPermissions: typeof PrincipalPermissions;
    constructor(properties?: DataLakeSettingsProperties);
}
