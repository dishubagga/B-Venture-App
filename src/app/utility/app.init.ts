import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<Boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://ec2-18-195-130-123.eu-central-1.compute.amazonaws.com:8080/auth/realms/mixit/protocol/openid-connect/token',
        realm: 'mixit',
        clientId: 'mixit-webapp-01',
      },
    });
}
