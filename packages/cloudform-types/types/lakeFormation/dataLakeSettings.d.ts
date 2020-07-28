import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DataLakePrincipal {
    DataLakePrincipalIdentifier?: Value<string>;
    constructor(properties: DataLakePrincipal);
}
export declare type Admins = List<DataLakePrincipal>;
export interface DataLakeSettingsProperties {
    Admins?: Admins;
}
export default class DataLakeSettings extends ResourceBase<DataLakeSettingsProperties> {
    static DataLakePrincipal: typeof DataLakePrincipal;
    constructor(properties?: DataLakeSettingsProperties);
}
