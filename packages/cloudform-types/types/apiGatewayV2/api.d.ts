import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BodyS3Location {
    Etag?: Value<string>;
    Bucket?: Value<string>;
    Version?: Value<string>;
    Key?: Value<string>;
    constructor(properties: BodyS3Location);
}
export declare class Cors {
    AllowOrigins?: List<Value<string>>;
    AllowCredentials?: Value<boolean>;
    ExposeHeaders?: List<Value<string>>;
    AllowHeaders?: List<Value<string>>;
    MaxAge?: Value<number>;
    AllowMethods?: List<Value<string>>;
    constructor(properties: Cors);
}
export interface ApiProperties {
    RouteSelectionExpression?: Value<string>;
    BodyS3Location?: BodyS3Location;
    Description?: Value<string>;
    BasePath?: Value<string>;
    FailOnWarnings?: Value<boolean>;
    DisableExecuteApiEndpoint?: Value<boolean>;
    DisableSchemaValidation?: Value<boolean>;
    Name?: Value<string>;
    Target?: Value<string>;
    CredentialsArn?: Value<string>;
    CorsConfiguration?: Cors;
    Version?: Value<string>;
    ProtocolType?: Value<string>;
    RouteKey?: Value<string>;
    Body?: {
        [key: string]: any;
    };
    Tags?: {
        [key: string]: Value<string>;
    };
    ApiKeySelectionExpression?: Value<string>;
}
export default class Api extends ResourceBase<ApiProperties> {
    static BodyS3Location: typeof BodyS3Location;
    static Cors: typeof Cors;
    constructor(properties?: ApiProperties);
}
