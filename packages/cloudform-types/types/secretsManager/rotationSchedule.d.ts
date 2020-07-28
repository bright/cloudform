import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class RotationRules {
    AutomaticallyAfterDays?: Value<number>;
    constructor(properties: RotationRules);
}
export declare class HostedRotationLambda {
    RotationType: Value<string>;
    RotationLambdaName?: Value<string>;
    KmsKeyArn?: Value<string>;
    MasterSecretArn?: Value<string>;
    VpcSecurityGroupIds?: Value<string>;
    MasterSecretKmsKeyArn?: Value<string>;
    VpcSubnetIds?: Value<string>;
    constructor(properties: HostedRotationLambda);
}
export interface RotationScheduleProperties {
    SecretId: Value<string>;
    HostedRotationLambda?: HostedRotationLambda;
    RotationLambdaARN?: Value<string>;
    RotationRules?: RotationRules;
}
export default class RotationSchedule extends ResourceBase<RotationScheduleProperties> {
    static RotationRules: typeof RotationRules;
    static HostedRotationLambda: typeof HostedRotationLambda;
    constructor(properties: RotationScheduleProperties);
}
