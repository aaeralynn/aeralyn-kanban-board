import { JwtPayload, jwtDecode } from "jwt-decode";

class AuthService {
  getProfile() {
    const token = this.getToken();
    return token ? (jwtDecode(token) as JwtPayload) : null;
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string) {
    const decoded: JwtPayload = jwtDecode(token);
    if (decoded.exp) {
      return decoded.exp * 1000 < Date.now(); // Convert to milliseconds
    }
    return false;
  }

  getToken(): string {
    return localStorage.getItem("id_token") || "";
  }

  login(idToken: string) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/"); // Redirect to the home page
  }

  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/login"); // Redirect to the login page
  }
}

export default new AuthService();
