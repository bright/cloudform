import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DatastoreStorage {
    CustomerManagedS3?: CustomerManagedS3;
    ServiceManagedS3?: ServiceManagedS3;
    constructor(properties: DatastoreStorage);
}
export declare class ServiceManagedS3 {
    constructor(properties: ServiceManagedS3);
}
export declare class RetentionPeriod {
    NumberOfDays?: Value<number>;
    Unlimited?: Value<boolean>;
    constructor(properties: RetentionPeriod);
}
export declare class CustomerManagedS3 {
    Bucket: Value<string>;
    RoleArn: Value<string>;
    KeyPrefix?: Value<string>;
    constructor(properties: CustomerManagedS3);
}
export interface DatastoreProperties {
    DatastoreStorage?: DatastoreStorage;
    DatastoreName?: Value<string>;
    RetentionPeriod?: RetentionPeriod;
    Tags?: List<ResourceTag>;
}
export default class Datastore extends ResourceBase<DatastoreProperties> {
    static DatastoreStorage: typeof DatastoreStorage;
    static ServiceManagedS3: typeof ServiceManagedS3;
    static RetentionPeriod: typeof RetentionPeriod;
    static CustomerManagedS3: typeof CustomerManagedS3;
    constructor(properties?: DatastoreProperties);
}
