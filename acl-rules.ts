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
        {
          resource: "/login/*",
          methods: "*",
          action: "allow",
          name: "Login",
          visible: false,
        },
      ]
    },
    {
      group: "usuarioEntidade",
      permissions: [
        {
          resource: "/login/*",
          methods: "*",
          action: "allow",
          name: "Login",
          visible: false,
        },
        {
          resource: "/menu/*",
          methods: ["POST", "GET", "PUT"],
          action: "allow",
          name: "Menus",
          visible: false,
        },
      ]
    }
];
export default aclRules;