import Certificate_ from './certificate';
import CertificateAuthority_ from './certificateAuthority';
import CertificateAuthorityActivation_ from './certificateAuthorityActivation';
import Permission_ from './permission';
export declare namespace ACMPCA {
    const Certificate: typeof Certificate_;
    const CertificateAuthority: typeof CertificateAuthority_;
    const CertificateAuthorityActivation: typeof CertificateAuthorityActivation_;
    const Permission: typeof Permission_;
    type Certificate = Certificate_;
    type CertificateAuthority = CertificateAuthority_;
    type CertificateAuthorityActivation = CertificateAuthorityActivation_;
    type Permission = Permission_;
}
