const aclRules = [
  {
    group: "usuarioCIAP",
    permissions: [
      {
        resource: "/processo/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "Processos",
        visible: false,
      },
      {
        resource: "/menu/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "Menus",
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
        resource: "/instituicao/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "CIAP",
        visible: false,
      },
      {
        resource: "/instituicao-parceira/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "Instituição parceira",
        visible: true,
      },
      {
        resource: "/usuario",
        methods: ["POST", "GET"],
        action: "allow",
        name: "Criar usuário",
        visible: false,
      },
      {
        resource: "/prestador/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "Prestador",
        visible: true
      },
      {
        resource: "/profissional/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "Profissional",
        visible: true,
      },
      {
        resource: "/entrevistas/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "Entrevistas",
        visible: true,
      },
      {
        resource: "/visita/entidade_parceira/*",
        methods: ["POST", "GET", "PUT"],
        action: "allow",
        name: "Visitas à entidade parceira",
        visible: true,
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
        resource: "/login/*",
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
  },
  {
    group: "administrador",
    permissions: [
      {
        resource: "*",
        methods: "*",
        action: "allow",
        visible: false,
      },
    ],
  }
];
export default aclRules;