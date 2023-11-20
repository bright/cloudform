import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class HostedRotationLambda {
    Runtime?: Value<string>;
    RotationType: Value<string>;
    RotationLambdaName?: Value<string>;
    KmsKeyArn?: Value<string>;
    MasterSecretArn?: Value<string>;
    VpcSecurityGroupIds?: Value<string>;
    ExcludeCharacters?: Value<string>;
    MasterSecretKmsKeyArn?: Value<string>;
    SuperuserSecretArn?: Value<string>;
    SuperuserSecretKmsKeyArn?: Value<string>;
    VpcSubnetIds?: Value<string>;
    constructor(properties: HostedRotationLambda);
}
export declare class RotationRules {
    ScheduleExpression?: Value<string>;
    Duration?: Value<string>;
    AutomaticallyAfterDays?: Value<number>;
    constructor(properties: RotationRules);
}
export interface RotationScheduleProperties {
    SecretId: Value<string>;
    HostedRotationLambda?: HostedRotationLambda;
    RotationLambdaARN?: Value<string>;
    RotationRules?: RotationRules;
    RotateImmediatelyOnUpdate?: Value<boolean>;
}
export default class RotationSchedule extends ResourceBase<RotationScheduleProperties> {
    static HostedRotationLambda: typeof HostedRotationLambda;
    static RotationRules: typeof RotationRules;
    constructor(properties: RotationScheduleProperties);
}
