const aclRules = [
    {
      group: "usuarioCIAP",
      permissions: [
        {
          resource: "/processo/*",
          methods: ["POST", "GET", "PUT"],
          action: "allow",
          name: "Processos",
          visible: true,
        },
        {
            resource: "/menu/*",
            methods: ["POST", "GET", "PUT"],
            action: "allow",
            name: "Menus",
            visible: false,
        },
      ]
    },
    {
      group: "usuarioEntidade",
      permissions: [
        {
          resource: "/menu/*",
          methods: ["POST", "GET", "PUT"],
          action: "allow",
          name: "Menus",
          visible: false,
        },
      ]
    },
    {
      group: "deslogado",
      permissions: [
        {
          resource: "/login",
          methods: "*",
          action: "allow",
          name: "Login",
          visible: false,
        },
        {
          resource: "/usuario/",
          methods:  ["POST"],
          action: "allow",
          name: "Criar usuário",
          visible: false,
        },
      ],
    }
];
export default aclRules;