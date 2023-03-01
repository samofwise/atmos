import { AuthService } from "../services/auth.service";

export function initServicesFactory(
  authService: AuthService,
) {
  return async () => {
    console.log('initServicesFactory - started');
    const config = await authService.loadAuthentication();
    console.log('initServicesFactory - completed');
  };
}