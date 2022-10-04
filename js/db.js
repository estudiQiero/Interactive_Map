
// Datos tarjetas

const pins = [
    {
        // Australia
        "id": 0,
        "flag": "eu-flag-australia",
        "country": "Australia",
        "organization": "Office Asia Pacific",
        "address": "20 James Street.<br>Sydney NSW 2000.",
        "phone": "Tel: +61 430 020 469",
        "contactPerson": "Susan Wardz",
        "email": "susan.wardz@myBusiness.aus"
    },
    {
        // Spain
        "id": 1,
        "flag": "eu-flag-spain",
        "country": "Spain",
        "organization": "Spain Production Plant",
        "address": "Pol. Industrial II,<br>C/ Rioja S/N,<br>30500 Molina de Segura.",
        "phone": "Tel: +34 96 821 3456",
        "contactPerson": "Juan López",
        "email": "juan.lopez@myBusiness.es"
    },
    {
        // France
        "id": 2,
        "flag": "eu-flag-france",
        "country": "France",
        "organization": "France Office",
        "address": "2 Rue Andrée dupont, 23.<br>100 NANTES. France.",
        "phone": "Tel : +33 (0) 6 14 32 71 62",
        "contactPerson": "Marie Bruillard",
        "email": "marie.bruillard@myBusiness.fr"
    },

    {
        // Germany
        "id": 3,
        "flag": "eu-flag-germany",
        "country": "Germany",
        "organization": "Germany Office",
        "address": "Am kleinen 28.<br>53557 Bad Hönningen.",
        "phone": "Tel: + 49 (0)2455 / 918590",
        "contactPerson": "Jürgen Klopp",
        "email": ""
    },
    {
        // USA
        "id": 4,
        "flag": "eu-flag-usa",
        "country": "USA",
        "organization": "North america Offices U.S.A. Inc.- East",
        "address": "21 Emerson Lane, STE. 1304A<br>Bridgeville, PA 15017",
        "phone": "Tel: + 1-412-2984798",
        "contactPerson": "",
        "email": "usaoffices@myBusiness.com"
    },
    {
        // China
        "id": 5,
        "flag": "eu-flag-china",
        "country": "China",
        "organization": "Office China",
        "address": "Room 16, BaolandPLZ,<br>No. 122 Dalian Road, Yang Pu District,<br>Shanghai (China)",
        "phone": "Tel: 0086 21 2525 3742<br>Mob: 0012 984 1007 6426",
        "contactPerson": "",
        "email": ""
    },
    {
        // Mexico
        "id": 6,
        "flag": "eu-flag-mexico",
        "country": "Mexico",
        "organization": "Mexico Office",
        "address": "Blvd. Bolivia 7-A<br>Naucalpan, Edo de Mexico 53519<br>Mexico DF",
        "phone": "Tel +52 (55) 55 09 51 23",
        "contactPerson": "Raul Nazario",
        "email": "raul.nazario@myBusiness.mx"
    },
    {
        // Brazil
        "id": 7,
        "flag": "eu-flag-brasil",
        "country": "Brazil",
        "organization": "Brazil Office",
        "address": "Rua Alvaro Rodrigues, 100<br> São Paulo - SP",
        "phone": "Phone (55 11) 1287-6712",
        "contactPerson": "Sandra Bahia",
        "email": "sandra.bahia@myBusiness.br"
    },
    {
        // Chile
        "id": 8,
        "flag": "eu-flag-chile",
        "country": "Chile",
        "organization": "Chile Office",
        "address": "Napoleón 3<br>Las Condes, Santiago",
        "contactPerson": "Catalina Duran",
        "email": "catalina.duran@myBusiness.cl"
    },
    {
        // Argentina
        "id": 9,
        "flag": "eu-flag-argentina",
        "country": "Argentina",
        "organization": "Argentina Office",
        "address": "Segundo Sombra 2163<br>Villa Bosch (1682)<br>Buenos Aires",
        "phone": "Tel.: +54 11 0840-9221",
        "contactPerson": "Carlos Lisandro",
        "email": "carlos.lisandro@myBusiness.ar"
    },
    {
        // Egypt
        "id": 10,
        "flag": "eu-flag-egypt",
        "country": "Egypt",
        "organization": "Egypt Office",
        "address": "138 Mist Eltaamir Buildings Zone 3, Flat 5<br>Sheraton, Heliopolis<br>Cairo",
        "phone": "Tel: +202 22673499",
        "contactPerson": "Amin Adly",
        "email": "amin.adly@vaiatpharma.com"
    },
    {
        // South Korea
        "id": 11,
        "flag": "eu-flag-south-korea",
        "country": "South Korea",
        "organization": "South Korea Office",
        "address": "206, Gamasan-Ro, Yeongdeungpo-Gu<br>Goodwills Bldg,<br>150-050 Seoul.",
        "phone": "Telephone: +82 2 933 5212",
        "contactPerson": "J R Sang",
        "email": "jrsang@myBusiness.kr"
    },
    {
        // Japan
        "id": 12,
        "flag": "eu-flag-japan",
        "country": "Japan",
        "organization": "Japan Office",
        "address": "Kinsan Bldg. 341, Nihonbashi-muromachi<br>Chuo-ku, Tokyo 103-0022.",
        "phone": "Tel: 81-3-1297-0083>",
        "contactPerson": "Hidenori Asako",
        "email": "hidenori.asako@myBusiness.jp",
        "web": "https://www.mybusiness.jp"
    },
    {
        // Philipines
        "id": 13,
        "flag": "eu-flag-filipinas",
        "country": "Philipines",
        "organization": "Philipines Office",
        "address": "No 12 United Street<br>Mandaluyong City<br>Metro Manila 1550 Philippines",
        "phone": "-",
        "contactPerson": "Chenee Prin Gao",
        "email": "c.prin.gao@myBusiness.ph"
    },
    {
        // Vietnam
        "id": 14,
        "flag": "eu-flag-vietnam",
        "country": "Vietnam",
        "organization": "Vietnam Office",
        "address": "Vinamilk Tower,<br>124 Tan Trao St., Tan Phu Ward,<br>Dist. 7, HCMC, Vietnam",
        "phone": "Tel: +84 28 5416 1616<br>Fax: +84 13 6729 2224",
        "contactPerson": "",
        "email": "info@myBusiness.com",
        "web": "https://www.myBusiness.com"
    },
    {
        // Thailand
        "id": 15,
        "flag": "eu-flag-thailand",
        "country": "Thailand",
        "organization": "Thailand Office",
        "address": "289 Soi Huamark 13 Huamark<br>Bangkapi Bangkok, Thailand.",
        "phone": "Tel: 098333732",
        "contactPerson": "",
        "email": "info@myBusiness.com"
    },
    {
        // Malasia
        "id": 16,
        "flag": "eu-flag-malasia",
        "country": "Malasia",
        "organization": "Malasia Office",
        "address": "No 96 Jalan Damar SD, Bandar Sri Damansara, 52200 Kuala Lumpur. Malasia.",
        "phone": "",
        "contactPerson": "Gan Riu Lee",
        "email": "gan.riu.lee@myBusiness.my"
    },
    {
        // India
        "id": 17,
        "flag": "eu-flag-india",
        "country": "India",
        "organization": "India Office",
        "address": "Plot No SPL 34<br>Opp Estate Club <br>Veerasandra II Stage, Bangalore - 560099",
        "phone": "Tel: 0091-9532900862",
        "contactPerson": "Pushpa",
        "email": "pushpa@myBusiness.com"
    }
];