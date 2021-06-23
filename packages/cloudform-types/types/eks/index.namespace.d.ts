import Nodegroup_ from './nodegroup';
import Cluster_ from './cluster';
import Addon_ from './addon';
import FargateProfile_ from './fargateProfile';
export declare namespace EKS {
    const Nodegroup: typeof Nodegroup_;
    const Cluster: typeof Cluster_;
    const Addon: typeof Addon_;
    const FargateProfile: typeof FargateProfile_;
    type Nodegroup = Nodegroup_;
    type Cluster = Cluster_;
    type Addon = Addon_;
    type FargateProfile = FargateProfile_;
}
