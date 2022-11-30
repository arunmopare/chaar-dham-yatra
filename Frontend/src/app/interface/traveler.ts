export interface Traveler {
    userId?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    auth?: Auth;
}

interface Auth {
    idToken?: string;
    expiresIn?: string;
    refreshToken?: string;
    role?: string;
}
