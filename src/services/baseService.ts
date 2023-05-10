import { Model, ModelStatic } from "sequelize";

class BaseService<T extends Model> {
  private model: ModelStatic<T>;

  constructor(model: ModelStatic<T>) {
    this.model = model;
  }

  static async getById<T extends Model>(this: new () => BaseService<T>, id: string) {
    const service = new this();
    return await service.model.findByPk(id);
  }

  static async save<T extends Model>(this: new () => BaseService<T>, campos: Record<string, any>, buildOptions?: any | null) {
    const service = new this();
    let entidade = await service.model.findByPk(campos.id);
    if (entidade) {
      await entidade.update(campos);
    } else {
      entidade = service.model.build(campos as T["_creationAttributes"], buildOptions);
      await entidade.save();
    }
    return entidade;
  }
}

export default BaseService;