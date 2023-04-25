const aclRules = [
    {
      group: "usuarioCIAP",
      permissions: [
        {
          resource: "/processo/",
          methods: ["POST", "GET", "PUT"],
          action: "allow",
          name: "Processos",
          visible: true,
        },
        {
            resource: "/menu/",
            methods: ["POST", "GET", "PUT"],
            action: "allow",
            name: "Menus",
            visible: false,
          }
      ]
    },
    {
      group: "usuarioEntidade",
      permissions: [
        {
          resource: "*",
          methods: "*",
          action: "deny",
          visible: false,
        }
      ]
    }
];
export default aclRules;