const aclRules = [
  {
    group: "usuarioCIAP",
    permissions: [
      {
        resource: "/menu/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "Menus",
        visible: false,
      },
      {
        resource: "/processo/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "Processos",
        visible: false,
      },
      {
        resource: "/ciap/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "CIAP",
        visible: true,
      },
      {
        resource: "/prestador/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "Prestador",
        visible: true,
      } 
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
        methods: ["POST"],
        action: "allow",
        name: "Criar usuário",
        visible: false,
      },
    ],
  }
];
export default aclRules;