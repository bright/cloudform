import Instance_ from './instance';
import Service_ from './service';
import PrivateDnsNamespace_ from './privateDnsNamespace';
import PublicDnsNamespace_ from './publicDnsNamespace';
import HttpNamespace_ from './httpNamespace';
export declare namespace ServiceDiscovery {
    const Instance: typeof Instance_;
    const Service: typeof Service_;
    const PrivateDnsNamespace: typeof PrivateDnsNamespace_;
    const PublicDnsNamespace: typeof PublicDnsNamespace_;
    const HttpNamespace: typeof HttpNamespace_;
    type Instance = Instance_;
    type Service = Service_;
    type PrivateDnsNamespace = PrivateDnsNamespace_;
    type PublicDnsNamespace = PublicDnsNamespace_;
    type HttpNamespace = HttpNamespace_;
}
