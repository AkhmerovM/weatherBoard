export class LocalStorageService {
    static get (name: string): any {
        return JSON.parse(localStorage.getItem(name));
    }

    static set (name: string, value: any): void {
        localStorage.setItem(name, JSON.stringify(value));
    }
}
