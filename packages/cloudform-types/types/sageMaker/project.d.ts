import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ProvisioningParameter {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: ProvisioningParameter);
}
export declare class ServiceCatalogProvisionedProductDetails {
    ProvisionedProductStatusMessage?: Value<string>;
    ProvisionedProductId?: Value<string>;
    constructor(properties: ServiceCatalogProvisionedProductDetails);
}
export declare class ServiceCatalogProvisioningDetails {
    PathId?: Value<string>;
    ProvisioningParameters?: List<ProvisioningParameter>;
    ProductId: Value<string>;
    ProvisioningArtifactId?: Value<string>;
    constructor(properties: ServiceCatalogProvisioningDetails);
}
export interface ProjectProperties {
    ProjectName: Value<string>;
    ServiceCatalogProvisionedProductDetails?: ServiceCatalogProvisionedProductDetails;
    ServiceCatalogProvisioningDetails: ServiceCatalogProvisioningDetails;
    ProjectDescription?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Project extends ResourceBase<ProjectProperties> {
    static ProvisioningParameter: typeof ProvisioningParameter;
    static ServiceCatalogProvisionedProductDetails: typeof ServiceCatalogProvisionedProductDetails;
    static ServiceCatalogProvisioningDetails: typeof ServiceCatalogProvisioningDetails;
    constructor(properties: ProjectProperties);
}
