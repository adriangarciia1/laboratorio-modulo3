interface GrupoMusical {
  nombre: string;
  anodefundación: number;
  activo: boolean;
  género: string;
}

const popRock = "🎵Pop Rock"
const rock = "🎸 Rock"
const clasica ="🎼 Clásica"
const hardrock ="🤘 Hard Rock"



const grupos: GrupoMusical[] = [
  {
    nombre: "Queen",
    anodefundación: 1970,
    activo: false,
    género: popRock,
  },

  {
    nombre: "ACDC",
    anodefundación: 1973,
    activo: true,
    género: hardrock,
  },

  {
    nombre: "Ludwig Van Beethoven",
    anodefundación: 1770,
    activo: false,
    género: clasica,
  },

  {
    nombre: "The Rolling Stones",
    anodefundación: 1962,
    activo: true,
    género: rock,
  },
];

grupos.forEach(grupo => {
    console.log(
        `%c${grupo.nombre}`, 
        'font-weight: bold; font-size: 20px; background-color: green; color: white; padding: 5px;'
    );
    console.log(`Año de fundación: ${grupo.anodefundación}`);
    console.log(`Género musical: ${grupo.género}`);
    console.log(`Activo: ${grupo.activo}`);
    console.log('--------------------------');
}); 

