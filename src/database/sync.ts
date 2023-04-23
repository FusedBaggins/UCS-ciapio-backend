import { entidades } from "./constants/entidades";

export function databaseSync(): void {
    entidades.forEach((entidade: any) => {
        entidade?.sync({ alter: true });
    });
}