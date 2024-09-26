export class Cart {
    private items: Map<string, object> = new Map();

    get Items(): object[] {
        return [];
    }

    get Total(): number {
        return 0;
    }

    add(): void {}
    remove(): void {}
    update(id: string, quanitity: number): void {}
    clear(): void {}
}
