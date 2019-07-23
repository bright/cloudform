import LoadBalancer_ from './loadBalancer';
import Listener_ from './listener';
import ListenerRule_ from './listenerRule';
import ListenerCertificate_ from './listenerCertificate';
import TargetGroup_ from './targetGroup';
export declare namespace ElasticLoadBalancingV2 {
    const LoadBalancer: typeof LoadBalancer_;
    const Listener: typeof Listener_;
    const ListenerRule: typeof ListenerRule_;
    const ListenerCertificate: typeof ListenerCertificate_;
    const TargetGroup: typeof TargetGroup_;
    type LoadBalancer = LoadBalancer_;
    type Listener = Listener_;
    type ListenerRule = ListenerRule_;
    type ListenerCertificate = ListenerCertificate_;
    type TargetGroup = TargetGroup_;
}
