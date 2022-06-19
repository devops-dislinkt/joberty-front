export class User {
    id: number;
    username: string;
    password:  string;
    firstName:  string;
    lastName:  string;
    role: 'admin' | 'user' | 'company_owner';
}