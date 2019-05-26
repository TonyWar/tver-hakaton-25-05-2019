export interface UserSignIn {
    phone: string;
    password: string;
}

export enum UserRole {
    HELPER = 'HELPER',
    ADMIN = 'ADMIN',
    OLDER = 'OLDER'
}

export interface UserProfile {
    id: string;
    photo?: string;
    name: string;
    secondName: string;
    lastName: string;
    phone: string;
    role: UserRole;
    birthday?: string;
    address?: string;
    categoryIds?: string[];
    helperId?: string;
}
