import DeploymentGroup_ from './deploymentGroup';
import DeploymentConfig_ from './deploymentConfig';
import Application_ from './application';
export declare namespace CodeDeploy {
    const DeploymentGroup: typeof DeploymentGroup_;
    const DeploymentConfig: typeof DeploymentConfig_;
    const Application: typeof Application_;
    type DeploymentGroup = DeploymentGroup_;
    type DeploymentConfig = DeploymentConfig_;
    type Application = Application_;
}
