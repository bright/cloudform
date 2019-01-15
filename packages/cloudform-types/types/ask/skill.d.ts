import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class SkillPackage {
    S3BucketRole?: Value<string>;
    S3ObjectVersion?: Value<string>;
    S3Bucket: Value<string>;
    S3Key: Value<string>;
    Overrides?: Overrides;
    constructor(properties: SkillPackage);
}
export declare class Overrides {
    Manifest?: {
        [key: string]: any;
    };
    constructor(properties: Overrides);
}
export declare class AuthenticationConfiguration {
    RefreshToken: Value<string>;
    ClientSecret: Value<string>;
    ClientId: Value<string>;
    constructor(properties: AuthenticationConfiguration);
}
export interface SkillProperties {
    AuthenticationConfiguration: AuthenticationConfiguration;
    VendorId: Value<string>;
    SkillPackage: SkillPackage;
}
export default class Skill extends ResourceBase {
    static SkillPackage: typeof SkillPackage;
    static Overrides: typeof Overrides;
    static AuthenticationConfiguration: typeof AuthenticationConfiguration;
    constructor(properties?: SkillProperties);
}
