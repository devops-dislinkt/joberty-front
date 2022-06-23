export interface Company {
    id: number;
    user_id: number;
    approved: boolean;
    name: string;
    email: string;
    location: string;
    website: string;
    description: string;
    // TODO: model comments and grades
    // comments: string
    // grades: string
}