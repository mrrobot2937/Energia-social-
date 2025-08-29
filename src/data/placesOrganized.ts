// Estructura organizada de lugares por país y departamento

export type City = {
  name: string;
  query: string;
  isCapital?: boolean;
  isMajorCity?: boolean;
};

export type Department = {
  name: string;
  capital?: string;
  cities: City[];
};

export type Country = {
  name: string;
  capital: string;
  departments: Department[];
};

export const countries: Country[] = [
  {
    name: "Colombia",
    capital: "Bogotá",
    departments: [
      {
        name: "Distrito Capital",
        cities: [
          { name: "Bogotá", query: "Bogotá, Colombia", isCapital: true, isMajorCity: true }
        ]
      },
      {
        name: "Antioquia",
        capital: "Medellín",
        cities: [
          { name: "Medellín", query: "Medellín, Colombia", isCapital: true, isMajorCity: true },
          { name: "Ituango", query: "Ituango, Antioquia, Colombia" },
          { name: "Briceño", query: "Briceño, Antioquia, Colombia" },
          { name: "Necoclí", query: "Necoclí, Antioquia, Colombia" },
          { name: "Buriticá", query: "Buriticá, Antioquia, Colombia" },
          { name: "San Carlos", query: "San Carlos, Antioquia, Colombia" },
          { name: "El Bagre", query: "El Bagre, Antioquia, Colombia" },
          { name: "Segovia", query: "Segovia, Antioquia, Colombia" },
          { name: "Maceo", query: "Maceo, Antioquia, Colombia" },
          { name: "Frontino", query: "Frontino, Antioquia, Colombia" },
          { name: "Arboletes", query: "Arboletes, Antioquia, Colombia" },
          { name: "Sabanalarga", query: "Sabanalarga, Antioquia, Colombia" },
          { name: "Peque", query: "Peque, Antioquia, Colombia" },
          { name: "Apartadó", query: "Apartadó, Antioquia, Colombia" },
          { name: "Turbo", query: "Turbo, Antioquia, Colombia" },
          { name: "Puerto Berrío", query: "Puerto Berrío, Antioquia, Colombia" },
          { name: "Sabaneta", query: "Sabaneta, Antioquia, Colombia" },
          { name: "San Andrés de Cuerquia", query: "San Andrés de Cuerquia, Antioquia, Colombia" },
          { name: "San Roque", query: "San Roque, Antioquia, Colombia" },
          { name: "Toledo", query: "Toledo, Antioquia, Colombia" },
          { name: "Valdivia", query: "Valdivia, Antioquia, Colombia" }
        ]
      },
      {
        name: "Valle del Cauca",
        capital: "Cali",
        cities: [
          { name: "Cali", query: "Cali, Colombia", isCapital: true, isMajorCity: true }
        ]
      },
      {
        name: "Bolívar",
        capital: "Cartagena",
        cities: [
          { name: "Cartagena", query: "Cartagena, Bolívar, Colombia", isCapital: true, isMajorCity: true },
          { name: "Turbaco", query: "Turbaco, Bolívar, Colombia" },
          { name: "Arjona", query: "Arjona, Bolívar, Colombia" },
          { name: "María la Baja", query: "María la Baja, Bolívar, Colombia" },
          { name: "Calamar", query: "Calamar, Bolívar, Colombia" },
          { name: "San Jacinto", query: "San Jacinto, Bolívar, Colombia" },
          { name: "El Carmen de Bolívar", query: "El Carmen de Bolívar, Bolívar, Colombia" },
          { name: "Cantagallo", query: "Cantagallo, Bolívar, Colombia" }
        ]
      },
      {
        name: "Atlántico",
        capital: "Barranquilla",
        cities: [
          { name: "Barranquilla", query: "Barranquilla, Atlántico, Colombia", isCapital: true, isMajorCity: true },
          { name: "Puerto Colombia", query: "Puerto Colombia, Atlántico, Colombia" },
          { name: "Candelaria", query: "Candelaria, Atlántico, Colombia" },
          { name: "Campo de la Cruz", query: "Campo de la Cruz, Atlántico, Colombia" },
          { name: "Suan", query: "Suan, Atlántico, Colombia" },
          { name: "Repelón", query: "Repelón, Atlántico, Colombia" },
          { name: "Sabanalarga", query: "Sabanalarga, Atlántico, Colombia" },
          { name: "Santa Lucía", query: "Santa Lucía, Atlántico, Colombia" }
        ]
      },
      {
        name: "Santander",
        capital: "Bucaramanga",
        cities: [
          { name: "Bucaramanga", query: "Bucaramanga, Santander, Colombia", isCapital: true, isMajorCity: true },
          { name: "Barrancabermeja", query: "Barrancabermeja, Santander, Colombia", isMajorCity: true },
          { name: "California", query: "California, Santander, Colombia" },
          { name: "Matanza", query: "Matanza, Santander, Colombia" },
          { name: "Vetas", query: "Vetas, Santander, Colombia" },
          { name: "Suratá", query: "Suratá, Santander, Colombia" },
          { name: "Florián", query: "Florián, Santander, Colombia" },
          { name: "La Belleza", query: "La Belleza, Santander, Colombia" },
          { name: "Albania", query: "Albania, Santander, Colombia" },
          { name: "Carmen de Chucurí", query: "El Carmen de Chucurí, Santander, Colombia" },
          { name: "San Vicente de Chucurí", query: "San Vicente de Chucurí, Santander, Colombia" },
          { name: "Sabana de Torres", query: "Sabana de Torres, Santander, Colombia" },
          { name: "Puerto Wilches", query: "Puerto Wilches, Santander, Colombia" },
          { name: "Cimitarra", query: "Cimitarra, Santander, Colombia" },
          { name: "Puerto Parra", query: "Puerto Parra, Santander, Colombia" }
        ]
      },
      {
        name: "La Guajira",
        capital: "Riohacha",
        cities: [
          { name: "Riohacha", query: "Riohacha, La Guajira, Colombia", isCapital: true, isMajorCity: true },
          { name: "Maicao", query: "Maicao, La Guajira, Colombia" },
          { name: "Uribia", query: "Uribia, La Guajira, Colombia" },
          { name: "Albania", query: "Albania, La Guajira, Colombia" },
          { name: "Barrancas", query: "Barrancas, La Guajira, Colombia" },
          { name: "Manaure", query: "Manaure, La Guajira, Colombia" },
          { name: "San Juan del Cesar", query: "San Juan del Cesar, La Guajira, Colombia" },
          { name: "Urumita", query: "Urumita, La Guajira, Colombia" },
          { name: "Villanueva", query: "Villanueva, La Guajira, Colombia" }
        ]
      },
      {
        name: "Cesar",
        capital: "Valledupar",
        cities: [
          { name: "Valledupar", query: "Valledupar, Cesar, Colombia", isCapital: true, isMajorCity: true },
          { name: "Aguachica", query: "Aguachica, Cesar, Colombia" },
          { name: "El Paso", query: "El Paso, Cesar, Colombia" },
          { name: "La Gloria", query: "La Gloria, Cesar, Colombia" },
          { name: "San Alberto", query: "San Alberto, Cesar, Colombia" },
          { name: "Becerril", query: "Becerril, Cesar, Colombia" },
          { name: "Curumaní", query: "Curumaní, Cesar, Colombia" },
          { name: "Pailitas", query: "Pailitas, Cesar, Colombia" },
          { name: "La Jagua de Ibirico", query: "La Jagua de Ibirico, Cesar, Colombia" },
          { name: "Agustín Codazzi", query: "Agustín Codazzi, Cesar, Colombia" },
          { name: "La Paz", query: "La Paz, Cesar, Colombia" },
          { name: "Pelaya", query: "Pelaya, Cesar, Colombia" },
          { name: "San Martín", query: "San Martín, Cesar, Colombia" },
          { name: "La Mata", query: "La Mata, Cesar, Colombia" }
        ]
      },
      {
        name: "Córdoba",
        capital: "Montería",
        cities: [
          { name: "Montería", query: "Montería, Córdoba, Colombia", isCapital: true, isMajorCity: true },
          { name: "Cereté", query: "Cereté, Córdoba, Colombia" },
          { name: "Canalete", query: "Canalete, Córdoba, Colombia" },
          { name: "Chinú", query: "Chinú, Córdoba, Colombia" },
          { name: "Los Córdobas", query: "Los Córdobas, Córdoba, Colombia" },
          { name: "Moñitos", query: "Moñitos, Córdoba, Colombia" },
          { name: "Puerto Escondido", query: "Puerto Escondido, Córdoba, Colombia" },
          { name: "Puerto Libertador", query: "Puerto Libertador, Córdoba, Colombia" },
          { name: "San Bernardo del Viento", query: "San Bernardo del Viento, Córdoba, Colombia" },
          { name: "San Pelayo", query: "San Pelayo, Córdoba, Colombia" },
          { name: "Tierralta", query: "Tierralta, Córdoba, Colombia" },
          { name: "Tuchín", query: "Tuchín, Córdoba, Colombia" }
        ]
      },
      {
        name: "Chocó",
        capital: "Quibdó",
        cities: [
          { name: "Quibdó", query: "Quibdó, Chocó, Colombia", isCapital: true, isMajorCity: true },
          { name: "Bojayá", query: "Bojayá, Chocó, Colombia" },
          { name: "Carmen del Atrato", query: "El Carmen de Atrato, Chocó, Colombia" },
          { name: "Medio Atrato", query: "Medio Atrato, Chocó, Colombia" },
          { name: "Tadó", query: "Tadó, Chocó, Colombia" }
        ]
      },
      {
        name: "Caldas",
        capital: "Manizales",
        cities: [
          { name: "Manizales", query: "Manizales, Caldas, Colombia", isCapital: true, isMajorCity: true },
          { name: "La Dorada", query: "La Dorada, Caldas, Colombia" },
          { name: "Marmato", query: "Marmato, Caldas, Colombia" },
          { name: "Supía", query: "Supía, Caldas, Colombia" }
        ]
      },
      {
        name: "Cauca",
        capital: "Popayán",
        cities: [
          { name: "Popayán", query: "Popayán, Cauca, Colombia", isCapital: true, isMajorCity: true },
          { name: "Santander de Quilichao", query: "Santander de Quilichao, Cauca, Colombia" },
          { name: "Miranda", query: "Miranda, Cauca, Colombia" },
          { name: "Corinto", query: "Corinto, Cauca, Colombia" },
          { name: "Argelia", query: "Argelia, Cauca, Colombia" },
          { name: "Balboa", query: "Balboa, Cauca, Colombia" },
          { name: "Bolívar", query: "Bolívar, Cauca, Colombia" },
          { name: "Cajibío", query: "Cajibío, Cauca, Colombia" },
          { name: "Caldono", query: "Caldono, Cauca, Colombia" },
          { name: "Caloto", query: "Caloto, Cauca, Colombia" },
          { name: "Morales", query: "Morales, Cauca, Colombia" },
          { name: "El Tambo", query: "El Tambo, Cauca, Colombia" },
          { name: "Guachené", query: "Guachené, Cauca, Colombia" },
          { name: "La Sierra", query: "La Sierra, Cauca, Colombia" },
          { name: "Mercaderes", query: "Mercaderes, Cauca, Colombia" },
          { name: "Padilla", query: "Padilla, Cauca, Colombia" },
          { name: "Piendamó", query: "Piendamó, Cauca, Colombia" },
          { name: "Rosas", query: "Rosas, Cauca, Colombia" },
          { name: "Silvia", query: "Silvia, Cauca, Colombia" },
          { name: "Sotará", query: "Sotará, Cauca, Colombia" },
          { name: "Suárez", query: "Suárez, Cauca, Colombia" },
          { name: "Totoró", query: "Totoró, Cauca, Colombia" },
          { name: "Toribío", query: "Toribío, Cauca, Colombia" },
          { name: "Villa Rica", query: "Villa Rica, Cauca, Colombia" },
          { name: "Timbío", query: "Timbío, Cauca, Colombia" },
          { name: "La Vega", query: "La Vega, Cauca, Colombia" },
          { name: "Puracé", query: "Puracé, Cauca, Colombia" }
        ]
      },
      {
        name: "Nariño",
        capital: "Pasto",
        cities: [
          { name: "Pasto", query: "Pasto, Nariño, Colombia", isCapital: true, isMajorCity: true },
          { name: "Tumaco", query: "Tumaco, Nariño, Colombia", isMajorCity: true },
          { name: "Ipiales", query: "Ipiales, Nariño, Colombia" },
          { name: "Guachucal", query: "Guachucal, Nariño, Colombia" },
          { name: "Pupiales", query: "Pupiales, Nariño, Colombia" },
          { name: "Córdoba", query: "Córdoba, Nariño, Colombia" },
          { name: "Contadero", query: "Contadero, Nariño, Colombia" },
          { name: "Gualmatán", query: "Gualmatán, Nariño, Colombia" },
          { name: "Puerres", query: "Puerres, Nariño, Colombia" },
          { name: "Iles", query: "Iles, Nariño, Colombia" },
          { name: "El Tambo", query: "El Tambo, Nariño, Colombia" }
        ]
      },
      {
        name: "Caquetá",
        capital: "Florencia",
        cities: [
          { name: "Florencia", query: "Florencia, Caquetá, Colombia", isCapital: true, isMajorCity: true },
          { name: "San Vicente del Caguán", query: "San Vicente del Caguán, Caquetá, Colombia" },
          { name: "Cartagena del Chairá", query: "Cartagena del Chairá, Caquetá, Colombia" },
          { name: "El Doncello", query: "El Doncello, Caquetá, Colombia" },
          { name: "El Paujil", query: "El Paujil, Caquetá, Colombia" },
          { name: "Puerto Rico", query: "Puerto Rico, Caquetá, Colombia" },
          { name: "Solano", query: "Solano, Caquetá, Colombia" }
        ]
      },
      {
        name: "Amazonas",
        capital: "Leticia",
        cities: [
          { name: "Leticia", query: "Leticia, Amazonas, Colombia", isCapital: true, isMajorCity: true },
          { name: "Puerto Nariño", query: "Puerto Nariño, Amazonas, Colombia" }
        ]
      },
      {
        name: "Vaupés",
        capital: "Mitú",
        cities: [
          { name: "Mitú", query: "Mitú, Vaupés, Colombia", isCapital: true, isMajorCity: true }
        ]
      },
      {
        name: "Meta",
        capital: "Villavicencio",
        cities: [
          { name: "Villavicencio", query: "Villavicencio, Meta, Colombia", isCapital: true, isMajorCity: true },
          { name: "Acacías", query: "Acacías, Meta, Colombia" },
          { name: "San Carlos de Guaroa", query: "San Carlos de Guaroa, Meta, Colombia" },
          { name: "Cabuyaro", query: "Cabuyaro, Meta, Colombia" },
          { name: "Guamal", query: "Guamal, Meta, Colombia" },
          { name: "Puerto Gaitán", query: "Puerto Gaitán, Meta, Colombia" }
        ]
      },
      {
        name: "Magdalena",
        capital: "Santa Marta",
        cities: [
          { name: "Santa Marta", query: "Santa Marta, Magdalena, Colombia", isCapital: true, isMajorCity: true },
          { name: "Ciénaga", query: "Ciénaga, Magdalena, Colombia" },
          { name: "Aracataca", query: "Aracataca, Magdalena, Colombia" },
          { name: "Zona Bananera", query: "Zona Bananera, Magdalena, Colombia" },
          { name: "Fundación", query: "Fundación, Magdalena, Colombia" }
        ]
      },
      {
        name: "Guaviare",
        capital: "San José del Guaviare",
        cities: [
          { name: "San José del Guaviare", query: "San José del Guaviare, Colombia", isCapital: true, isMajorCity: true }
        ]
      },
      {
        name: "Putumayo",
        capital: "Mocoa",
        cities: [
          { name: "Mocoa", query: "Mocoa, Putumayo, Colombia", isCapital: true },
          { name: "Puerto Leguízamo", query: "Puerto Leguízamo, Putumayo, Colombia" },
          { name: "Orito", query: "Orito, Putumayo, Colombia" },
          { name: "Valle del Guamuez", query: "Valle del Guamuez, Putumayo, Colombia" }
        ]
      },
      {
        name: "Sucre",
        capital: "Sincelejo",
        cities: [
          { name: "Sincelejo", query: "Sincelejo, Sucre, Colombia", isCapital: true },
          { name: "Corozal", query: "Corozal, Sucre, Colombia" },
          { name: "Los Palmitos", query: "Los Palmitos, Sucre, Colombia" },
          { name: "Sampués", query: "Sampués, Sucre, Colombia" },
          { name: "Ovejas", query: "Ovejas, Sucre, Colombia" },
          { name: "Tolú Viejo", query: "Tolú Viejo, Sucre, Colombia" }
        ]
      },
      {
        name: "Boyacá",
        capital: "Tunja",
        cities: [
          { name: "Chiquinquirá", query: "Chiquinquirá, Boyacá, Colombia" },
          { name: "Briceño", query: "Briceño, Boyacá, Colombia" },
          { name: "Tununguá", query: "Tununguá, Boyacá, Colombia" },
          { name: "Saboyá", query: "Saboyá, Boyacá, Colombia" }
        ]
      },
      {
        name: "Cundinamarca",
        capital: "Bogotá",
        cities: [
          { name: "Zipaquirá", query: "Zipaquirá, Cundinamarca, Colombia" },
          { name: "Ubaté", query: "Ubaté, Cundinamarca, Colombia" },
          { name: "Funza", query: "Funza, Cundinamarca, Colombia" },
          { name: "Cogua", query: "Cogua, Cundinamarca, Colombia" },
          { name: "Cucunubá", query: "Cucunubá, Cundinamarca, Colombia" },
          { name: "Nariño", query: "Nariño, Cundinamarca, Colombia" },
          { name: "Sutatausa", query: "Sutatausa, Cundinamarca, Colombia" },
          { name: "Tausa", query: "Tausa, Cundinamarca, Colombia" },
          { name: "Tena", query: "Tena, Cundinamarca, Colombia" },
          { name: "Tenjo", query: "Tenjo, Cundinamarca, Colombia" },
          { name: "Tocancipá", query: "Tocancipá, Cundinamarca, Colombia" },
          { name: "Vianí", query: "Vianí, Cundinamarca, Colombia" },
          { name: "Villapinzón", query: "Villapinzón, Cundinamarca, Colombia" }
        ]
      },
      {
        name: "Casanare",
        capital: "Yopal",
        cities: [
          { name: "Yopal", query: "Yopal, Casanare, Colombia", isCapital: true },
          { name: "Monterrey", query: "Monterrey, Casanare, Colombia" },
          { name: "Maní", query: "Maní, Casanare, Colombia" },
          { name: "Aguazul", query: "Aguazul, Casanare, Colombia" },
          { name: "Tauramena", query: "Tauramena, Casanare, Colombia" },
          { name: "Barranca de Upía", query: "Barranca de Upía, Meta, Colombia" }
        ]
      },
      {
        name: "Arauca",
        capital: "Arauca",
        cities: [
          { name: "Arauca", query: "Arauca, Arauca, Colombia", isCapital: true },
          { name: "Arauquita", query: "Arauquita, Arauca, Colombia" },
          { name: "Saravena", query: "Saravena, Arauca, Colombia" }
        ]
      },
      {
        name: "Tolima",
        capital: "Ibagué",
        cities: [
          { name: "Ibagué", query: "Ibagué, Tolima, Colombia", isCapital: true },
          { name: "Honda", query: "Honda, Tolima, Colombia" },
          { name: "Piedras", query: "Piedras, Tolima, Colombia" },
          { name: "Chaparral", query: "Chaparral, Tolima, Colombia" },
          { name: "Ortega", query: "Ortega, Tolima, Colombia" },
          { name: "Purificación", query: "Purificación, Tolima, Colombia" },
          { name: "Coyaima", query: "Coyaima, Tolima, Colombia" },
          { name: "Natagaima", query: "Natagaima, Tolima, Colombia" }
        ]
      }
    ]
  },
  {
    name: "República Dominicana",
    capital: "Santo Domingo",
    departments: [
      {
        name: "Distrito Nacional",
        cities: [
          { name: "Santo Domingo", query: "Santo Domingo, República Dominicana", isCapital: true, isMajorCity: true }
        ]
      },
      {
        name: "La Altagracia",
        cities: [
          { name: "Punta Cana", query: "Punta Cana, República Dominicana", isMajorCity: true }
        ]
      },
      {
        name: "María Trinidad Sánchez",
        cities: [
          { name: "Nagua", query: "Nagua, María Trinidad Sánchez, República Dominicana" },
          { name: "Cabrera", query: "Cabrera, María Trinidad Sánchez, República Dominicana" }
        ]
      },
      {
        name: "Peravia",
        cities: [
          { name: "Peravia", query: "Peravia, República Dominicana" }
        ]
      },
      {
        name: "Otros",
        cities: [
          { name: "San Antonio de los Caballeros", query: "San Antonio de los Caballeros, República Dominicana" },
          { name: "Santa Clara", query: "Santa Clara, República Dominicana" }
        ]
      }
    ]
  },
  {
    name: "Ecuador",
    capital: "Quito",
    departments: [
      {
        name: "Pichincha",
        cities: [
          { name: "Quito", query: "Quito, Ecuador", isCapital: true, isMajorCity: true }
        ]
      },
      {
        name: "Guayas",
        cities: [
          { name: "Guayaquil", query: "Guayaquil, Ecuador", isMajorCity: true }
        ]
      },
      {
        name: "Manabí",
        cities: [
          { name: "Manta", query: "Manta, Ecuador", isMajorCity: true },
          { name: "Montecristi", query: "Montecristi, Ecuador" }
        ]
      },
      {
        name: "Loja",
        cities: [
          { name: "Loja", query: "Loja, Ecuador", isMajorCity: true }
        ]
      }
    ]
  },
  {
    name: "Costa Rica",
    capital: "San José",
    departments: [
      {
        name: "San José",
        cities: [
          { name: "San José", query: "San José, Costa Rica", isCapital: true, isMajorCity: true },
          { name: "Colón", query: "Colón, Mora, San José, Costa Rica" }
        ]
      },
      {
        name: "Guanacaste",
        cities: [
          { name: "Guanacaste", query: "Guanacaste, Costa Rica" }
        ]
      },
      {
        name: "Puntarenas",
        cities: [
          { name: "Puntarenas", query: "Puntarenas, Costa Rica" }
        ]
      }
    ]
  },
  {
    name: "Perú",
    capital: "Lima",
    departments: [
      {
        name: "Lima",
        cities: [
          { name: "Lima", query: "Lima, Perú", isCapital: true, isMajorCity: true },
          { name: "Callao", query: "Callao, Perú" }
        ]
      },
      {
        name: "Cusco",
        cities: [
          { name: "Cusco", query: "Cusco, Perú", isMajorCity: true }
        ]
      },
      {
        name: "Loreto",
        cities: [
          { name: "Iquitos", query: "Iquitos, Perú", isMajorCity: true }
        ]
      }
    ]
  },
  {
    name: "Venezuela",
    capital: "Caracas",
    departments: [
      {
        name: "Distrito Capital",
        cities: [
          { name: "Caracas", query: "Caracas, Venezuela", isCapital: true, isMajorCity: true }
        ]
      },
      {
        name: "Zulia",
        cities: [
          { name: "Maracaibo", query: "Maracaibo, Zulia, Venezuela", isMajorCity: true },
          { name: "Machiques de Perijá", query: "Machiques de Perijá, Zulia, Venezuela" }
        ]
      }
    ]
  }
];

// Función para obtener solo las ciudades principales
export function getMajorCities(): City[] {
  const majorCities: City[] = [];
  
  countries.forEach(country => {
    country.departments.forEach(department => {
      department.cities.forEach(city => {
        if (city.isMajorCity) {
          majorCities.push(city);
        }
      });
    });
  });
  
  return majorCities;
}

// Función para obtener las ciudades de un departamento específico
export function getCitiesByDepartment(countryName: string, departmentName: string): City[] {
  const country = countries.find(c => c.name === countryName);
  if (!country) return [];
  
  const department = country.departments.find(d => d.name === departmentName);
  if (!department) return [];
  
  return department.cities;
}

// Función para obtener los departamentos de un país
export function getDepartmentsByCountry(countryName: string): Department[] {
  const country = countries.find(c => c.name === countryName);
  return country ? country.departments : [];
}
