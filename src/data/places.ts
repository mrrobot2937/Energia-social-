// Lista de lugares (ciudades/municipios/regiones) donde hay presencia
// Se usa como entrada para geocodificación dinámica en el mapa

export type Place = {
    label: string; // nombre que se mostrará en el popup
    query: string; // texto para geocodificar (incluye país/departamento cuando aplica)
};

export const places: Place[] = [
    // Colombia - ciudades principales ya existentes en el mapa
    { label: "Bogotá", query: "Bogotá, Colombia" },
    { label: "Medellín", query: "Medellín, Colombia" },
    { label: "Cali", query: "Cali, Colombia" },
    { label: "Cartagena", query: "Cartagena, Bolívar, Colombia" },
    { label: "Barranquilla", query: "Barranquilla, Atlántico, Colombia" },
    { label: "Bucaramanga", query: "Bucaramanga, Santander, Colombia" },
    { label: "Riohacha", query: "Riohacha, La Guajira, Colombia" },
    { label: "Valledupar", query: "Valledupar, Cesar, Colombia" },
    { label: "Montería", query: "Montería, Córdoba, Colombia" },
    { label: "Quibdó", query: "Quibdó, Chocó, Colombia" },
    { label: "Manizales", query: "Manizales, Caldas, Colombia" },
    { label: "Popayán", query: "Popayán, Cauca, Colombia" },
    { label: "Pasto", query: "Pasto, Nariño, Colombia" },
    { label: "Florencia", query: "Florencia, Caquetá, Colombia" },
    { label: "Leticia", query: "Leticia, Amazonas, Colombia" },
    { label: "Mitú", query: "Mitú, Vaupés, Colombia" },
    { label: "Villavicencio", query: "Villavicencio, Meta, Colombia" },
    { label: "Santa Marta", query: "Santa Marta, Magdalena, Colombia" },
    { label: "San José del Guaviare", query: "San José del Guaviare, Colombia" },

    // República Dominicana
    { label: "Santo Domingo", query: "Santo Domingo, República Dominicana" },
    { label: "Punta Cana", query: "Punta Cana, República Dominicana" },
    { label: "Cabrera", query: "Cabrera, María Trinidad Sánchez, República Dominicana" },
    { label: "Nagua", query: "Nagua, María Trinidad Sánchez, República Dominicana" },
    { label: "Peravia", query: "Peravia, República Dominicana" },
    { label: "San Antonio de los Caballeros", query: "San Antonio de los Caballeros, República Dominicana" },
    { label: "Santa Clara (RD)", query: "Santa Clara, República Dominicana" },

    // Ecuador
    { label: "Quito", query: "Quito, Ecuador" },
    { label: "Guayaquil", query: "Guayaquil, Ecuador" },
    { label: "Manta", query: "Manta, Ecuador" },
    { label: "Montecristi", query: "Montecristi, Ecuador" },
    { label: "Loja", query: "Loja, Ecuador" },

    // Costa Rica
    { label: "San José (CR)", query: "San José, Costa Rica" },
    { label: "Guanacaste", query: "Guanacaste, Costa Rica" },
    { label: "Puntarenas", query: "Puntarenas, Costa Rica" },
    { label: "Colón (CR)", query: "Colón, Mora, San José, Costa Rica" },

    // Perú
    { label: "Lima", query: "Lima, Perú" },
    { label: "Cusco", query: "Cusco, Perú" },
    { label: "Iquitos", query: "Iquitos, Perú" },
    { label: "Callao", query: "Callao, Perú" },

    // Venezuela
    { label: "Caracas", query: "Caracas, Venezuela" },
    { label: "Zulia", query: "Zulia, Venezuela" },
    { label: "Maracaibo", query: "Maracaibo, Zulia, Venezuela" },
    { label: "Machiques de Perijá", query: "Machiques de Perijá, Zulia, Venezuela" },

    // Colombia - Santander y cercanías
    { label: "California (Santander)", query: "California, Santander, Colombia" },
    { label: "Matanza", query: "Matanza, Santander, Colombia" },
    { label: "Vetas", query: "Vetas, Santander, Colombia" },
    { label: "Suratá", query: "Suratá, Santander, Colombia" },
    { label: "Florián", query: "Florián, Santander, Colombia" },
    { label: "La Belleza", query: "La Belleza, Santander, Colombia" },
    { label: "Albania (Santander)", query: "Albania, Santander, Colombia" },
    { label: "Briceño (Boyacá)", query: "Briceño, Boyacá, Colombia" },
    { label: "Tununguá", query: "Tununguá, Boyacá, Colombia" },
    { label: "Saboyá", query: "Saboyá, Boyacá, Colombia" },
    { label: "Chiquinquirá", query: "Chiquinquirá, Boyacá, Colombia" },
    { label: "Ubaté", query: "Ubaté, Cundinamarca, Colombia" },
    { label: "Carmen de Chucurí", query: "El Carmen de Chucurí, Santander, Colombia" },
    { label: "San Vicente de Chucurí", query: "San Vicente de Chucurí, Santander, Colombia" },
    { label: "Barrancabermeja", query: "Barrancabermeja, Santander, Colombia" },
    { label: "Sabana de Torres", query: "Sabana de Torres, Santander, Colombia" },
    { label: "Puerto Wilches", query: "Puerto Wilches, Santander, Colombia" },
    { label: "Cimitarra", query: "Cimitarra, Santander, Colombia" },
    { label: "Puerto Parra", query: "Puerto Parra, Santander, Colombia" },

    // Magdalena
    { label: "Ciénaga", query: "Ciénaga, Magdalena, Colombia" },
    { label: "Aracataca", query: "Aracataca, Magdalena, Colombia" },
    { label: "Zona Bananera", query: "Zona Bananera, Magdalena, Colombia" },
    { label: "Fundación", query: "Fundación, Magdalena, Colombia" },

    // Atlántico
    { label: "Puerto Colombia", query: "Puerto Colombia, Atlántico, Colombia" },
    { label: "Candelaria (Atlántico)", query: "Candelaria, Atlántico, Colombia" },
    { label: "Campo de la Cruz", query: "Campo de la Cruz, Atlántico, Colombia" },
    { label: "Suan", query: "Suan, Atlántico, Colombia" },
    { label: "Repelón", query: "Repelón, Atlántico, Colombia" },
    { label: "Sabanalarga (Atlántico)", query: "Sabanalarga, Atlántico, Colombia" },
    { label: "Santa Lucía", query: "Santa Lucía, Atlántico, Colombia" },

    // Cesar
    { label: "El Paso", query: "El Paso, Cesar, Colombia" },
    { label: "La Gloria", query: "La Gloria, Cesar, Colombia" },
    { label: "San Alberto", query: "San Alberto, Cesar, Colombia" },
    { label: "Becerril", query: "Becerril, Cesar, Colombia" },
    { label: "Curumaní", query: "Curumaní, Cesar, Colombia" },
    { label: "Pailitas", query: "Pailitas, Cesar, Colombia" },
    { label: "La Jagua de Ibirico", query: "La Jagua de Ibirico, Cesar, Colombia" },
    { label: "Agustín Codazzi", query: "Agustín Codazzi, Cesar, Colombia" },
    { label: "La Paz (Cesar)", query: "La Paz, Cesar, Colombia" },
    { label: "Pelaya", query: "Pelaya, Cesar, Colombia" },
    { label: "San Martín (Cesar)", query: "San Martín, Cesar, Colombia" },
    { label: "Aguachica", query: "Aguachica, Cesar, Colombia" },
    { label: "La Mata", query: "La Mata, Cesar, Colombia" },

    // Meta
    { label: "San Carlos de Guaroa", query: "San Carlos de Guaroa, Meta, Colombia" },
    { label: "Acacías", query: "Acacías, Meta, Colombia" },
    { label: "Cabuyaro", query: "Cabuyaro, Meta, Colombia" },
    { label: "Guamal (Meta)", query: "Guamal, Meta, Colombia" },
    { label: "Puerto Gaitán", query: "Puerto Gaitán, Meta, Colombia" },

    // Caquetá
    { label: "Cartagena del Chairá", query: "Cartagena del Chairá, Caquetá, Colombia" },
    { label: "El Doncello", query: "El Doncello, Caquetá, Colombia" },
    { label: "El Paujil", query: "El Paujil, Caquetá, Colombia" },
    { label: "Puerto Rico (Caquetá)", query: "Puerto Rico, Caquetá, Colombia" },
    { label: "San Vicente del Caguán", query: "San Vicente del Caguán, Caquetá, Colombia" },
    { label: "Solano", query: "Solano, Caquetá, Colombia" },

    // Putumayo
    { label: "Mocoa", query: "Mocoa, Putumayo, Colombia" },
    { label: "Puerto Leguízamo", query: "Puerto Leguízamo, Putumayo, Colombia" },
    { label: "Orito", query: "Orito, Putumayo, Colombia" },
    { label: "Valle del Guamuez", query: "Valle del Guamuez, Putumayo, Colombia" },

    // Amazonas
    { label: "Puerto Nariño", query: "Puerto Nariño, Amazonas, Colombia" },

    // Cauca
    { label: "Miranda", query: "Miranda, Cauca, Colombia" },
    { label: "Corinto", query: "Corinto, Cauca, Colombia" },
    { label: "Santander de Quilichao", query: "Santander de Quilichao, Cauca, Colombia" },
    { label: "Argelia (Cauca)", query: "Argelia, Cauca, Colombia" },
    { label: "Balboa (Cauca)", query: "Balboa, Cauca, Colombia" },
    { label: "Bolívar (Cauca)", query: "Bolívar, Cauca, Colombia" },
    { label: "Cajibío", query: "Cajibío, Cauca, Colombia" },
    { label: "Caldono", query: "Caldono, Cauca, Colombia" },
    { label: "Caloto", query: "Caloto, Cauca, Colombia" },
    { label: "Morales (Cauca)", query: "Morales, Cauca, Colombia" },
    { label: "El Tambo (Cauca)", query: "El Tambo, Cauca, Colombia" },
    { label: "Guachené", query: "Guachené, Cauca, Colombia" },
    { label: "La Sierra (Cauca)", query: "La Sierra, Cauca, Colombia" },
    { label: "Mercaderes", query: "Mercaderes, Cauca, Colombia" },
    { label: "Padilla", query: "Padilla, Cauca, Colombia" },
    { label: "Piendamó", query: "Piendamó, Cauca, Colombia" },
    { label: "Rosas", query: "Rosas, Cauca, Colombia" },
    { label: "Silvia", query: "Silvia, Cauca, Colombia" },
    { label: "Sotará", query: "Sotará, Cauca, Colombia" },
    { label: "Suárez (Cauca)", query: "Suárez, Cauca, Colombia" },
    { label: "Totoró", query: "Totoró, Cauca, Colombia" },
    { label: "Toribío", query: "Toribío, Cauca, Colombia" },
    { label: "Villa Rica", query: "Villa Rica, Cauca, Colombia" },
    { label: "Timbío", query: "Timbío, Cauca, Colombia" },
    { label: "La Vega (Cauca)", query: "La Vega, Cauca, Colombia" },
    { label: "Puracé", query: "Puracé, Cauca, Colombia" },

    // Nariño
    { label: "Ipiales", query: "Ipiales, Nariño, Colombia" },
    { label: "Guachucal", query: "Guachucal, Nariño, Colombia" },
    { label: "Pupiales", query: "Pupiales, Nariño, Colombia" },
    { label: "Córdoba (Nariño)", query: "Córdoba, Nariño, Colombia" },
    { label: "Contadero", query: "Contadero, Nariño, Colombia" },
    { label: "Gualmatán", query: "Gualmatán, Nariño, Colombia" },
    { label: "Puerres", query: "Puerres, Nariño, Colombia" },
    { label: "Iles", query: "Iles, Nariño, Colombia" },
    { label: "El Tambo (Nariño)", query: "El Tambo, Nariño, Colombia" },
    { label: "Tumaco", query: "Tumaco, Nariño, Colombia" },

    // Chocó
    { label: "Bojayá", query: "Bojayá, Chocó, Colombia" },
    { label: "Carmen del Atrato", query: "El Carmen de Atrato, Chocó, Colombia" },
    { label: "Medio Atrato", query: "Medio Atrato, Chocó, Colombia" },
    { label: "Tadó", query: "Tadó, Chocó, Colombia" },

    // Antioquia
    { label: "Ituango", query: "Ituango, Antioquia, Colombia" },
    { label: "Briceño (Antioquia)", query: "Briceño, Antioquia, Colombia" },
    { label: "Necoclí", query: "Necoclí, Antioquia, Colombia" },
    { label: "Buriticá", query: "Buriticá, Antioquia, Colombia" },
    { label: "San Carlos (Antioquia)", query: "San Carlos, Antioquia, Colombia" },
    { label: "El Bagre", query: "El Bagre, Antioquia, Colombia" },
    { label: "Segovia", query: "Segovia, Antioquia, Colombia" },
    { label: "Maceo", query: "Maceo, Antioquia, Colombia" },
    { label: "Frontino", query: "Frontino, Antioquia, Colombia" },
    { label: "Arboletes", query: "Arboletes, Antioquia, Colombia" },
    { label: "Sabanalarga (Antioquia)", query: "Sabanalarga, Antioquia, Colombia" },
    { label: "Peque", query: "Peque, Antioquia, Colombia" },
    { label: "Apartadó", query: "Apartadó, Antioquia, Colombia" },
    { label: "Turbo", query: "Turbo, Antioquia, Colombia" },
    { label: "Puerto Berrío", query: "Puerto Berrío, Antioquia, Colombia" },
    { label: "Sabaneta", query: "Sabaneta, Antioquia, Colombia" },
    { label: "San Andrés de Cuerquia", query: "San Andrés de Cuerquia, Antioquia, Colombia" },
    { label: "San Roque", query: "San Roque, Antioquia, Colombia" },
    { label: "Toledo (Antioquia)", query: "Toledo, Antioquia, Colombia" },
    { label: "Valdivia", query: "Valdivia, Antioquia, Colombia" },

    // Cundinamarca
    { label: "Funza", query: "Funza, Cundinamarca, Colombia" },
    { label: "Cogua", query: "Cogua, Cundinamarca, Colombia" },
    { label: "Cucunubá", query: "Cucunubá, Cundinamarca, Colombia" },
    { label: "Nariño (Cundinamarca)", query: "Nariño, Cundinamarca, Colombia" },
    { label: "Sutatausa", query: "Sutatausa, Cundinamarca, Colombia" },
    { label: "Tausa", query: "Tausa, Cundinamarca, Colombia" },
    { label: "Tena", query: "Tena, Cundinamarca, Colombia" },
    { label: "Tenjo", query: "Tenjo, Cundinamarca, Colombia" },
    { label: "Tocancipá", query: "Tocancipá, Cundinamarca, Colombia" },
    { label: "Vianí", query: "Vianí, Cundinamarca, Colombia" },
    { label: "Villapinzón", query: "Villapinzón, Cundinamarca, Colombia" },
    { label: "Zipaquirá", query: "Zipaquirá, Cundinamarca, Colombia" },

    // La Guajira
    { label: "Maicao", query: "Maicao, La Guajira, Colombia" },
    { label: "Uribia", query: "Uribia, La Guajira, Colombia" },
    { label: "Albania (La Guajira)", query: "Albania, La Guajira, Colombia" },
    { label: "Barrancas", query: "Barrancas, La Guajira, Colombia" },
    { label: "Manaure", query: "Manaure, La Guajira, Colombia" },
    { label: "San Juan del Cesar", query: "San Juan del Cesar, La Guajira, Colombia" },
    { label: "Urumita", query: "Urumita, La Guajira, Colombia" },
    { label: "Villanueva (La Guajira)", query: "Villanueva, La Guajira, Colombia" },

    // Bolívar
    { label: "Turbaco", query: "Turbaco, Bolívar, Colombia" },
    { label: "Arjona", query: "Arjona, Bolívar, Colombia" },
    { label: "María la Baja", query: "María la Baja, Bolívar, Colombia" },
    { label: "Calamar (Bolívar)", query: "Calamar, Bolívar, Colombia" },
    { label: "San Jacinto", query: "San Jacinto, Bolívar, Colombia" },
    { label: "El Carmen de Bolívar", query: "El Carmen de Bolívar, Bolívar, Colombia" },
    { label: "Cantagallo", query: "Cantagallo, Bolívar, Colombia" },

    // Sucre
    { label: "Corozal", query: "Corozal, Sucre, Colombia" },
    { label: "Los Palmitos", query: "Los Palmitos, Sucre, Colombia" },
    { label: "Sampués", query: "Sampués, Sucre, Colombia" },
    { label: "Ovejas", query: "Ovejas, Sucre, Colombia" },
    { label: "Tolú Viejo", query: "Tolú Viejo, Sucre, Colombia" },
    { label: "Sincelejo", query: "Sincelejo, Sucre, Colombia" },

    // Córdoba
    { label: "Cereté", query: "Cereté, Córdoba, Colombia" },
    { label: "Canalete", query: "Canalete, Córdoba, Colombia" },
    { label: "Chinú", query: "Chinú, Córdoba, Colombia" },
    { label: "Los Córdobas", query: "Los Córdobas, Córdoba, Colombia" },
    { label: "Moñitos", query: "Moñitos, Córdoba, Colombia" },
    { label: "Puerto Escondido", query: "Puerto Escondido, Córdoba, Colombia" },
    { label: "Puerto Libertador", query: "Puerto Libertador, Córdoba, Colombia" },
    { label: "San Bernardo del Viento", query: "San Bernardo del Viento, Córdoba, Colombia" },
    { label: "San Pelayo", query: "San Pelayo, Córdoba, Colombia" },
    { label: "Tierralta", query: "Tierralta, Córdoba, Colombia" },
    { label: "Tuchín", query: "Tuchín, Córdoba, Colombia" },

    // Caldas
    { label: "La Dorada", query: "La Dorada, Caldas, Colombia" },
    { label: "Marmato", query: "Marmato, Caldas, Colombia" },
    { label: "Supía", query: "Supía, Caldas, Colombia" },

    // Vaupés (ya está Mitú)

    // Casanare
    { label: "Yopal", query: "Yopal, Casanare, Colombia" },
    { label: "Monterrey (Casanare)", query: "Monterrey, Casanare, Colombia" },
    { label: "Maní", query: "Maní, Casanare, Colombia" },
    { label: "Aguazul", query: "Aguazul, Casanare, Colombia" },
    { label: "Tauramena", query: "Tauramena, Casanare, Colombia" },
    { label: "Barranca de Upía", query: "Barranca de Upía, Meta, Colombia" },

    // Arauca
    { label: "Arauca", query: "Arauca, Arauca, Colombia" },
    { label: "Arauquita", query: "Arauquita, Arauca, Colombia" },
    { label: "Saravena", query: "Saravena, Arauca, Colombia" },

    // Tolima
    { label: "Ibagué", query: "Ibagué, Tolima, Colombia" },
    { label: "Piedras", query: "Piedras, Tolima, Colombia" },
    { label: "Chaparral", query: "Chaparral, Tolima, Colombia" },
    { label: "Ortega", query: "Ortega, Tolima, Colombia" },
    { label: "Honda", query: "Honda, Tolima, Colombia" },
    { label: "Purificación", query: "Purificación, Tolima, Colombia" },
    { label: "Coyaima", query: "Coyaima, Tolima, Colombia" },
    { label: "Natagaima", query: "Natagaima, Tolima, Colombia" },
];


