import { entidades } from "./constants/entidades";

export function databaseSync(): void {
    entidades.forEach(async (entidade: any) => {
        await entidade?.sync({ alter: true });
    });

}