export default {
  global: {
    componenteFormativo: 'Cosecha y poscosecha',
    descripcionCurso:
      'En este componente formativo, se abordan temáticas relacionadas con la precosecha, cosecha y poscosecha de los productos agrícolas, etapas en las que se lleva a cabo una serie de actividades con la finalidad de disminuir las pérdidas a través de un adecuado manejo técnico que permita la obtención de productos con buena calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Precosecha y cosecha',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Factores fisiológicos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Requisitos e índices',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Recolección ',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Poscosecha ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Buenas prácticas de manufactura (BPM)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Recepción ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Limpieza',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Envase y empaque',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Etiquetado',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Almacenamiento',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Transporte y comercialización',
            hash: 't_2_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Precosecha y cosecha',
      referencia:
        'Fischer, G., Melgarejo, L. M., & Cutler, J. (2018). Factores precosecha que influyen en la calidad de las frutas pasifloráceas. <i>Agronomía Colombiana,</i> 36(3), p. 217-226.',
      tipo: 'Artículo',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-99652018000300217&lng=es&nrm=iso&tlng=en',
    },
    {
      tema: 'Poscosecha',
      referencia:
        'Ecosistemas de Recursos Educativos ECORED. (2022).<i> Manejo de poscosecha</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EVrRQkGnjqs',
    },
    {
      tema: 'Poscosecha',
      referencia:
        'Food and Agriculture Organization of the United Nations FAO. (2013). <i>Manejo poscosecha, procesamiento e higiene de frutas y hortalizas</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=63aguf2YXo0',
    },
    {
      tema: 'Poscosecha',
      referencia:
        'Procolombia. (2016). <i>Manual del empaque y embalaje para exportación.</i>',
      tipo: 'Manual',
      link:
        'https://procolombia.co/sites/default/files/manual_de_empaque_y_embalaje_para_exportacion.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Buenas prácticas agrícolas BPA',
      significado:
        'conjunto de principios, normas y recomendaciones técnicas aplicables a la producción y orientados a cuidar la salud humana, proteger al medio ambiente y mejorar las condiciones de los trabajadores y su familia.',
    },
    {
      termino: 'Buenas prácticas de manufactura BPM',
      significado:
        'conjunto de medidas mínimas de higiene necesarias en poscosecha para evitar la contaminación y así lograr la obtención de productos inocuos y seguros para el consumo debido a que se enfocan en la higiene, la manipulación y la seguridad de los alimentos.',
    },
    {
      termino: 'Calidad',
      significado:
        'conjunto de cualidades físicas, propiedades organolépticas y valor nutricional de los alimentos.',
    },
    {
      termino: 'Características organolépticas',
      significado:
        'propiedades sensoriales (color, olor, aroma, textura y apariencia) que establecen el grado de madurez y daños.',
    },
    {
      termino: 'Desinfección',
      significado:
        'labor que se realiza para eliminar o destruir microorganismos y agentes patógenos que pueden causar infección, tales como bacterias, virus y hongos.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'garantía de que los alimentos no causarán daños al consumidor cuando se preparen y/o consuman.',
    },
    {
      termino: 'Limpieza',
      significado:
        'proceso u operación de eliminación de residuos de alimentos u otras materias extrañas o indeseables.',
    },
    {
      termino: 'Manejo poscosecha',
      significado:
        'conjunto de actividades realizadas a partir de la recolección de los productos y que están encaminadas a mantener la calidad de estos hasta su consumo. ',
    },
    {
      termino: 'Sanidad',
      significado:
        'integridad e inocuidad del producto que garantizan la salud del consumidor.',
    },
    {
      termino: 'Valor nutricional',
      significado: 'contenido de nutrientes en un alimento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cámara de comercio de Bogotá. (2019). <i>Seminario empaques y embalajes para exportación.</i> ',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/3049/2949_empaques_y_embalajes2.pdf;sequen',
    },
    {
      referencia:
        'García-Robles, J. M., Medina-Rodríguez, L. J., Mercado-Ruiz, J. N. & Báez-Sañudo, R. (2017). Evaluación de desinfectantes para el control de microorganismos en frutas y verduras. <i>Revista Iberoamericana de Tecnología Poscosecha, 18</i>(1), p. 9-22',
      link: 'https://www.redalyc.org/journal/813/81351597002/html/',
    },
    {
      referencia:
        'Gobernación del Tolima, Universidad de Ibagué, Universidad del Tolima y Sena Regional Tolima. (2017). <i>Protocolo de buenas prácticas para poscosecha del tomate (Solanum lycopersicum)</i>. Logística para la cadena hortofrutícola del Tolima. Convenio N°1032-2013. ',
      link:
        'https://docplayer.es/77412789-Gobernacion-del-tolima-universidad-de-ibague-universidad-del-tolima-y-sena-regional-tolima.html',
    },
    {
      referencia:
        'Martínez-González, M. E., Balois-Morales, Ro., Alia-Tejacal, I., Cortes-Cruz, M A., Palomino-Hermosillo, Y. A., & López-Gúzman, G. G. (2017). Poscosecha de frutos: maduración y cambios bioquímicos. <i>Revista Mexicana de Ciencias Agrícolas, 8</i>(19), p. 4075-4087.',
      link: 'https://doi.org/10.29312/remexca.v0i19.674',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
