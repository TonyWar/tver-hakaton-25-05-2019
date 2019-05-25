export interface UserSignIn {
    phone: string;
    password: string;
}

export interface User {
    photo?: string;
    name: string;
    secondName: string;
    lastName: string;
    phone: string;
    password: string;
    role: 'HELPER' | 'ADMIN' | 'OLDER';
}
