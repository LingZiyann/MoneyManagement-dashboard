export function getAuthToken(): string | null {
    const token: string | null = localStorage.getItem('token');
    return token;
}