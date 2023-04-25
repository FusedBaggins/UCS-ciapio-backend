import Permissao from "../classes/permissao";

export default {
    convertAclPermissao(acl: any) {
        let permissao = new Permissao();
        permissao.nome = acl.name;
        permissao.action = acl.action;
        permissao.url = acl.resource;
        permissao.visivel = acl.visible;
        return permissao;
    }
};