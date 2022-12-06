<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Poscosecha 
    
    .row.justify-content-center 
      .col-md-8.mt-5
        .bloque-texto-b.color-bloque-texto
          .bloque-texto-b__texto
            p Existen dos sistemas de cosecha: manual y mecanizada, aunque en algunos cultivos se utilizan combinaciones de ambos. La elección de un sistema u otro depende, fundamentalmente, del cultivo considerado, del destino y, de manera muy especial, del tamaño del predio a ser cosechado. Teniendo en cuenta que la recolección manual es el sistema predominante para la recolección de frutas y hortalizas, mientras que la mecánica es preferida para hortalizas con fines industriales o que requieren cultivarse en grandes lotes. 
      .col-md-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/img2.png', alt='') 

      TabsC.color-acento-botones.mt-5
        .py-3.py-md-4.px-5(titulo="Recolección manual")
          .row
            .col-md-6.mb-4.mb-md-0
              p Esta recolección la realizan las personas, sean los mismos productores u operadores, que conocen e identifican las características de las plantas que se encuentran listas para la recolección. Se recomienda que el proceso sea con rapidez y en el menor tiempo, para evitar la exposición del producto al sol, al viento seco y a la lluvia. 
              .row.align-items-end.bg6 
                p.mx-3 El personal de cosecha debe estar con las manos limpias las uñas cortas, el pelo recogido y no fumar ni beber durante la cosecha.
              .row.align-items-end.bg6 
                p.mx-3 En los arboles frutales no debe recogerse fruto del suelo.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/img3.png', alt='')
        .py-3.py-md-4.px-5(titulo="Recomendaciones en la recolección manual")
          .row
            .col-md-6.mb-4.mb-md-0              
              p Los equipos y utensilios empleados para la recolección (cestos o canastos de mimbre, bolsas de fique o lona) deben ser adecuados según el tipo de planta, para que no se lesione ni se maltrate el producto. También se pueden utilizar plataformas o escaleras para alcanzar los árboles más altos.
              .row.align-items-end.bg6 
                p.mx-3 Juntar los productos con cuidado evitando los golpes.  
              .row.align-items-end.bg6 
                p.mx-3 Las frutas y verduras cosechadas deben colocarse en recipientes limpios (lavado o nuevos) sin tocar el suelo.  
              .row.align-items-end.bg6 
                p.mx-3 No utilizar recipientes de los químicos y fertilizantes para acopiar la cosecha.
              .row.align-items-end.bg6 
                p.mx-3 Las frutas y verduras cosechadas deben ser colocadas a la sombra y lejos de animales o deposito de químicos o fertilizantes.
              .row.align-items-end.bg6 
                p.mx-3 Registrar la cosecha utilizando una planilla de cosecha. Identificar el producto comercial. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/img4.png', alt='')    

        .py-3.py-md-4.px-5(titulo="Recolección mecánica")
          .row
            .col-md-6.mb-4.mb-md-0              
              p Ofrece una mayor ventaja al productor ya que es rápida y genera un menor costo por tonelada recolectada. Se utiliza en cultivos de maduración concentrada, por ejemplo: arroz, limón, mango, guayaba; además, involucra costos de mantenimiento y del equipo durante todo el ciclo de siembra debido a que el cultivo se debe adaptar para que su producción sea de esta manera. Dicha adaptación tiene que ver con distancias entre hileras, nivelación del terreno, pulverizaciones, labores culturales y un cultivo resistente a un manipuleo más rudo. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/img5.png', alt='')

    .row.justify-content-center.mt-5 
      .col-md-8.mt-5
        p Además, de que estas actividades ayudan a la conservación, permiten cumplir con las normas de la calidad del producto y minimizar o evitar las pérdidas de producción (directas e indirectas) que a su vez generan pérdidas económicas, debido a que los productos son susceptibles al deterioro por su fisiología, también debido a la inadecuada manipulación o factores microbiológicos, biológicas, químicas, físicos o mecánicas, las cuales se agudizan al implementar o realizar un mal manejo poscosecha.
        h4.mt-4.mb-5 Manejo de poscosecha 
        p.mt-4.mb-5 Es importante conocer algunos factores que deterioran la calidad de los productos derivados de una inadecuada manipulación durante la poscosecha.
      .col-md-4
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema2/img6.png', alt='') 

    .bg4.px-5.py-3.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="01")
              h4.ps-4 Recolección manejo de poscosecha
              p.ps-4.mb-0 Por tanto, el manejo poscosecha no solo busca llevar el producto desde el cultivo hasta su venta, sino que involucra procedimientos técnicos de acondicionamiento y transformación enfocados a mejorar su presentación e higiene, proteger la integridad y preservar la calidad nutricional con base en factores extrínsecos e intrínsecos, entre ellos lo perecedero de cada producto o el tiempo que tarda en deteriorarse. 
          .col-6.col-lg-4.mt-5
            figure
              img(src='@/assets/curso/temas/tema2/img7.png')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="02")
              h4.ps-4 Calidad del producto 
              p.ps-4.mb-0 Lo que favorece y facilita la comercialización e incrementa la obtención de buenos precios y ganancias durante el mercadeo. Importante resaltar que son indispensables las buenas prácticas de precosecha y cosecha debido a que estas fases iniciales influyen directamente en la calidad del producto, mientras que en  la poscosecha lo que se hace es mantener la calidad y proporcionar un valor agregado que contribuya a la obtención de buenos precios y ganancias durante el mercadeo.
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img8.png')  

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="03")
              h4.ps-4 Etapas del manejo poscosecha 
              p.ps-4.mb-0 Las principales etapas del manejo poscosecha, orientadas al acondicionamiento del producto, son recepción, separación, limpieza, selección y clasificación. También se encuentran: procedimientos de desinfección, empaque, embalaje, transporte y almacenamiento. Es importante indicar que el orden de estas actividades puede variar según cada cultivo; también se pueden realizar de forma parcial, total o unificadamente.
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img9.png')   

    p.mt-5.mb-5 En el proceso de poscosecha es importante aplicar buenas prácticas de manufactura (BPM), que son herramientas que permiten obtener productos inocuos y seguros para el consumo debido a que se enfocan en la higiene, la manipulación y la seguridad de los alimentos, por tanto, tienen gran relevancia y van de la mano con las diferentes actividades que se desarrollan.

    <Separador></Separador>
    #t_2_1.titulo-segundo.color-acento-contenido.mt-5
      h2 2.1. Buenas prácticas de manufactura (BPM)   

    .row.justify-content-center.mb-5 
      .bloque-texto-b1.color-bloque-texto
        .bloque-texto-b__texto.mx-4
          p De acuerdo con el Decreto 2674 de 2013 las buenas prácticas de manufactura hacen alusión a los principios básicos y normas de higiene en los diferentes procesos: manipulación, preparación, procesamiento, envasado, almacenamiento, transporte y distribución, lo que favorece la obtención de productos inocuos, sanos y de buena calidad, al tiempo que se genera una mejor productividad. 

    .row.justify-content-center    
      .col-md-7
        p Estas prácticas deben ser aplicadas desde el inicio y durante todo el proceso de poscosecha debido a que una vez cosechado el producto existen diversos factores que aumentan el riesgo de contaminación, entre ellos: presentar daños físicos y mecánicos (cortes, lesiones, magulladuras y heridas en general), la manipulación por diversas personas, la higiene del personal, la limpieza, desinfección y condiciones de las instalaciones y áreas de procesamiento, los insumos y equipos empleados, etc. 
        p Es importante resaltar y acoger las recomendaciones que se dan en las BPM para garantizar la higiene.
        p La primera actividad del proceso de poscosecha es la recepción. Después de la recolección los productos cosechados son enviados a centros de acopio ―también conocidos como plantas de beneficio― donde son recibidos para inspección teniendo en cuenta factores como color, olor, apariencia, textura, consistencia, daños y demás propiedades organolépticas que se pueden percibir a simple vista y dar una primera impresión de cómo llega el producto, además de cómo ha sido el proceso de cosecha, recolección y manipulación.
      .col-md-5.mt-3
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema2/img10.png') 

    <Separador></Separador>
    #t_2_2.titulo-segundo.color-acento-contenido.mt-5
      h2 2.2. Recepción

    p El proceso de recepción implica algunos aspectos importantes a tener en cuenta para conservar la calidad y sanidad de los productos.      
    .row.justify-content-center 
      .col-md-5.mt-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema2/img11.png')     
      .col-md-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-gris").mt-5
          .row(titulo="Proceso de recepción").px-5.py-2
            .row
              p.text-justify Durante este proceso es importante no solo inspeccionar las características físicas del producto, sino que también se debe obtener información de la cantidad de producto recibido, el lugar de procedencia y fechas de recolección, además se deben inspeccionar los vehículos y las condiciones de transporte. 
          div(titulo="Condiciones de entrada ").px-5.py-3
            .row
              p.text-justify Luego de la inspección y verificación de condiciones de entrada del producto cosechado, y para continuar su manejo poscosecha, se realiza separación básica o preliminar, eliminado de productos deformes, pasados de maduración, faltos de madurez o con daños por hongos, bacterias, insectos, residuos químicos. Solo aquellos que cumplen con características de calidad, condiciones de sanidad y madurez son aptos para recibirse.              

    p.mt-5.mb-5 Una vez entra el producto al centro de recepción se hace un proceso de limpieza y desinfección con el fin de retirar propiedades extrañas.               

    <Separador></Separador>
    #t_2_3.titulo-segundo.color-acento-contenido.mt-5
      h2 2.3. Limpieza

    p Cuando hablamos de limpieza en el centro de recepción, se hace referencia a las actividades de descarte en productos que no reúnen las condiciones necesarias para la distribución y comercialización final.

    TabsC.color-acento-botones.mt-5
      .py-3.py-md-4.px-5(titulo="Acondicionamiento")
        .row
          .col-md-6.mb-4.mb-md-0
            p Una vez recibido el producto, se debe iniciar el proceso de acondicionamiento por medio de una limpieza basada en la eliminación de materiales y partículas extrañas que estén adheridos o mezclados con el producto y generan contaminación, afectan la calidad, la presentación y alteran su volumen y su peso.
            p Por ejemplo, se descartan aquellos que tienen restos animales: insectos, larvas, excreciones; vegetales: hojas, tallo, flores, raíces, arvenses, cáscaras; químicos: fertilizantes, agroquímicos; minerales: piedras, tierra, polvo.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img12.png', alt='')
      .py-3.py-md-4.px-5(titulo="Realizar la limpieza")
        .row
          .col-md-7.mb-4.mb-md-0.mt-5              
            p Es necesario, para realizar la limpieza, contar con un lugar, personal y equipos con condiciones adecuadas de higiene y, en algunas ocasiones, agua potable, pues hay diversos métodos que varían de acuerdo con las características del producto, los cuales se pueden emplear de forma individual o combinada, por ejemplo, los métodos húmedos y secos.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img13.png', alt='')  

    p.mt-5.mb-5 El método de limpieza de frutas y verduras es fundamental para la prevención de enfermedades que pueden transmitir los alimentos. 

    h3 Métodos de limpieza   
    p.mt-5.mb-5 Para la asepsia de las frutas y verduras se usan métodos de limpieza en seco y en húmedo, como veremos a continuación.

    .bg2.px-5.py-3.mb-5
      LineaTiempoC.color-acento-contenido(text-small)(data-aos="fade-right")
        .row(titulo="Métodos de limpieza húmedos")
          .col-md-10.mb-4.mb-md-0.mt-3
            p Son aquellos empleados cuando se requiere del agua y, en algunas ocasiones, de soluciones o productos químicos con propiedades desinfectantes que mejoran el resultado. Por tanto, mediante este método no solo se logran eliminar materiales extraños y contaminantes, sino que también se pueden remover los residuos de fertilizantes y agroquímicos. 
            p Son los métodos húmedos más utilizados la aspersión, la inmersión y la flotación.
            figure.mx-5
              img(src='@/assets/curso/temas/tema2/img14.png', alt='')

        .row(titulo="Métodos de limpieza secos")
          .col-md-10.mb-4.mb-md-0.mt-3
            p Mientras que los métodos secos se caracterizan por ser más económicos y se emplean cuando las características del producto no permiten efectuar la limpieza con agua o sustancias líquidas. 
            p Dentro de estos se encuentran: abrasión, aspiración o soplado, cepillado, tamizado y separación magnética.
            figure.mx-5
              img(src='@/assets/curso/temas/tema2/img15.png', alt='')

    p.mt-5.mb-5 En seguida se verá la importancia de aprender a seleccionar, clasificar y desinfectar los productos recolectados con el fin de garantizar su calidad e inocuidad.
    h4.mb-5 Actividades de selección, clasificación y desinfección               
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video   
    
    p.mt-5.mb-5 Algunos factores a considerar a la hora de realizar la desinfección, y que mejoran el rendimiento en la eliminación de plagas o vectores, dependen de la concentración, temperatura, tiempo o complementación. Veámoslo en seguida:
    h4 Factores a considerar en la desinfección
    p.mt-5.mb-5 Los agentes empleados para la desinfección se clasifican en desinfectantes físicos con características de eliminación rápida de la carga microbiana. Son fáciles de dosificar, no son corrosivos ni requieren enjuague ni tiempo de exposición largo ni costos altos.

    .tarjeta--container.row.justify-content-center
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema2/img16.png', alt='')
        .tarjeta.he-tarjetas.color-tarjeta-avatar.p-3
          h4.text-center.mt-5 Concentración
          p.text-center La acción es directamente proporcional a la concentración.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema2/img17.png' alt='')
        .tarjeta.he-tarjetas.color-tarjeta-avatar.p-3
          h4.text-center.mt-5 Tempreratura
          p.text-center La temperatura establece el límite de estabilidad del desinfectante.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema2/img18.png' alt='')
        .tarjeta.he-tarjetas.color-tarjeta-avatar.p-3
          h4.text-center.mt-5 Tiempo
          p.text-center El tiempo de contacto o exposición de la superficie debe ser acorde con la concentración del desinfectante.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema2/img19.png' alt='')
        .tarjeta.he-tarjetas.color-tarjeta-avatar.p-3
          h4.text-center.mt-5 Complementación
          p.text-center Algunos desinfectantes son compatibles, por tanto, se pueden mezclar para garantizar una acción total.

    p.mt-5.mb-5 Para la aplicación de desinfectantes es importante conocer cuáles existen y cómo se usan. Veamos algunos:

    .row.justify-content-center
      .col-md-9
        .bloque-texto-b2.color-bloque-texto
          .bloque-texto-b__texto.mx-4
            h4 Aplicación de desinfectantes

        p.mt-2 Para la aplicación de desinfectantes hay diversos procedimientos como inmersión, pulverización, nebulización, termonebulización, #[i ultra low volume] (ULV). La dosificación varía según la superficie, tipo de desinfectante y su presentación, entonces, para conocer la concentración que se debe emplear es indispensable determinar qué se va a desinfectar (frutas, hortalizas, pared, piso, etc.), qué producto se va a emplear (propiedades, clasificación, presentación, concentración) y el volumen de agua requerido para la disolución.     
      .col-md-3
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema2/img20.png', alt='')   


    .row.justify-content-center.mt-5
      .col-md-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.bloque-img-left.w-bloque-3(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img21.png')})`}"
          )                             
          .bloque-texto-g__texto.bloque-text-rigth.p-4
            p Entre los desinfectantes físicos los más conocidos son los rayos ultravioleta, tratamientos térmicos ―inmersión, curado―, la electricidad y ondas ultrasónicas.<br/><br/>
            p Los desinfectantes químicos se subdividen en halógenos, como el yodo y el cloro, que son los más conocidos en la desinfección de frutas y hortalizas; los amonios cuaternarios, que tienen acción selectiva sobre las levaduras o bacterias y permiten ser mezclados; los fenoles (cresol); los reductores (formaldehído y glutaraldehído); oxidantes (permanganato de potasio y peróxido de hidrógeno); ozono (amplio espectro); formol (usado para destruir levaduras); agua oxigenada (usada para destruir bacterias esporuladas); caseros (vinagre y bicarbonato de sodio). 

    p.mt-5.mb-5 Culminada la fase de acondicionamiento, los productos requieren ser protegidos de factores que generan deterioro durante el almacenamiento y la comercialización. Una protección que se busca mediante empaques y envases que eviten al máximo daños físicos como roturas, humedad, pérdidas de peso; daños químicos como contaminación microbiana, respiración y migración de gases; daños térmicos como cambios de temperatura; y daños mecánicos como golpes, deslizamientos y vibraciones. 

    <Separador></Separador>
    #t_2_6.titulo-segundo.color-acento-contenido.mt-5
      h2 2.6. Envase y empaque

    p Esto se logra a través del envase y el empaque, dos elementos distintos cuya diferencia radica en el grado de contacto que tienen con el producto. Es el envase la pieza que está en contacto directo, es decir, el recipiente que contiene al producto; mientras que el empaque es la envoltura o material que lo protege y tiene fines comerciales. No todos los productos cuentan con envases, muchos solo tienen empaque.

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde").mt-5
      .row(titulo="Empaques ").px-5.py-2
        .row
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img22.png', alt='')    
          .col-md-7
            p.mt-texto.text-justify Cada empaque es único. Se conoce una gran variedad de materiales como papel, cartón, madera, vidrio, textil, metal, fibras vegetales (yute, fique, bambú) y plástico (polietileno PE, poliéster PET, polipropileno PP, policloruro de vinilo PVC, poliestireno PS, policarbonato PS); y de formas, tamaños, colores, diseños y estilos que varían dependiendo del producto que se desee empacar. 
      div(titulo="Tipos de empaques").px-5.py-3
        .row
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img23.png', alt='')    
          .col-md-7
            p.mt-texto.text-justify Por tanto, a la hora de seleccionarlo es importante tener en cuenta el comportamiento fisiológico y las características físicas: forma, volumen, peso, tamaño, firmeza del producto a empacar; al igual que la temperatura, la humedad, la luz y demás condiciones ambientales que puedan influir.
             
      div(titulo="Envases").px-5.py-3
        .row
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img24.png', alt='')    
          .col-md-7
            p.mt-texto.text-justify Sin embargo, cabe resaltar que ni los empaques ni los envases mejoran la calidad, sino que la conservan ya que sus principales funciones son contener, proteger, y distribuir. Es indispensable empacar productos limpios, seleccionados, clasificados y desinfectados. 
               
      div(titulo="Tipos de envases").px-5.py-3
        .row
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img25.png', alt='')    
          .col-md-7
            p.mt-texto.text-justify Tampoco estos sustituyen los tratamientos para conservar como la refrigeración. Hay que tener en cuenta que la adecuada conservación se logra con un empaque apropiado y un almacenamiento en condiciones idóneas según los requerimientos de cada producto.
               
    p.mt-5.mb-5 Los empaques cumplen diferentes funciones. Por ejemplo:

    h4 Funciones de los empaques 

    p.mb-5 Los empaques cumplen la función de presentar, conservar y preservar el producto.

    ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
          .row.justify-content-center
            .col-sm-10  
              figure 
                img(src='@/assets/curso/temas/tema2/img26.png', alt='alt') 

        .tarjeta.color-tarjeta-punto-caliente(x="31%" y="22%" numero="1" )  
          .row.justify-content-center.p-4
            p #[span.text-bold Contención] del producto para mostrarlo en condiciones y cantidades demandadas por el consumidor. 
             
        .tarjeta.color-tarjeta-punto-caliente(x="53%" y="44%" numero="2" )  
          .row.justify-content-center.p-4
            p #[span.text-bold Protección ] del producto de diferentes daños y factores externos que puedan generar deterioro de la calidad.
        
        .tarjeta.color-tarjeta-punto-caliente(x="78%" y="10%" numero="3" )  
          .row.justify-content-center.p-4
            p #[span.text-bold Conservación ] de la calidad y propiedades.

        .tarjeta.color-tarjeta-punto-caliente(x="84%" y="52%" numero="4" )  
          .row.justify-content-center.p-4
            p #[span.text-bold Distribución, ]  al facilitar la manipulación y mejorar la distribución y el transporte. 

        .tarjeta.color-tarjeta-punto-caliente(x="14%" y="14%" numero="5" )  
          .row.justify-content-center.p-4
            p #[span.text-bold Comercialización, ]   ya que posibilitan la exhibición, exposición y localización en los diversos puntos de venta.    

        .tarjeta.color-tarjeta-punto-caliente(x="63%" y="32%" numero="6" )  
          .row.justify-content-center.p-4
            p #[span.text-bold Comunicación, ]  al brindar información de sus características y motivar así la promoción, el mercadeo y la compra.  

        .tarjeta.color-tarjeta-punto-caliente(x="14%" y="79%" numero="7" )  
          .row.justify-content-center.p-4
            p #[span.text-bold Ecológica, ]  al hacer uso de la tecnología o desarrollo para elaborarlos con materiales menos contaminantes.    


        .tarjeta.color-tarjeta-punto-caliente(x="40%" y="22%" numero="8" )  
          .row.justify-content-center.p-4
            p #[span.text-bold Social, ]  por medio de campañas de educación ambiental enfocadas a la adecuada disposición final que minimice el impacto negativo sobre el ambiente.                                                   


    p.mt-5.mb-5 Para lograr que los empaques y envases cumplan con la función comercial y se logre la aceptación y diferenciación del producto, se lleva a cabo un proceso de etiquetado. 


    <Separador></Separador>
    #t_2_7.titulo-segundo.color-acento-contenido.mt-5
      h2 2.7. Etiquetado

    p.mt-5.mb-5 Etiquetar o rotular consiste en incluir la información más relevante de los productos para que sea conocida por el consumidor.

    figure(data-aos="fade-left") 
      img(src='@/assets/curso/temas/tema2/img27.png', alt='alt')

    p.mt-5.mb-5 La información del etiquetado puede estar registrada en uno o más idiomas. Es común el uso de símbolos o pictogramas regulados y empleados a nivel internacional y que proporcionan indicaciones para la manipulación acordes con  las características físicas y químicas del producto. 

    h4.mt-5.mb-5 Información en la etiqueta

    .bg4.px-5.py-3.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="01").mt-5
              h4.ps-4 Métodos de identificación
              p.ps-4.mb-0 Se usan métodos de identificación como códigos que pueden ser de barras lineales o bidimensionales, chips o bandas magnéticas y están compuestos por un símbolo gráfico (barras) y el código, que son los números. En ocasiones se emplea un código alfanumérico, que varía según el producto, clase de etiqueta y mercado.
          .col-6.col-lg-4.mt-5
            figure
              img(src='@/assets/curso/temas/tema2/img28.png')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="02")
              h4.ps-4 Información del producto
              p.ps-4.mb-0 El etiquetado de los productos genera ventajas para la empresa y el consumidor debido a que es multifuncional y permite un diálogo al proporcionar información del producto, la cual es indispensable para facilitar la elección por parte del comprador. Dicha información también facilita el control y vigilancia por parte de los organismos y entidades encargadas.
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img29.png')  

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="03")
              p.ps-4.mb-0 Además, se pueden impulsar las compras por medio de promociones y cupones, incluir recetas y diferentes modos de uso, fortalecer la imagen de la empresa, presentar los distintos sellos de calidad o resaltar los atributos que dan un valor agregado al producto.
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img30.png')   

    p.mt-5.mb-5 La  información del etiquetado puede estar registrada en uno o más idiomas. Es común el uso de símbolos o pictogramas regulados y empleados a nivel internacional que proporcionan indicaciones para la manipulación según las características físicas y químicas del producto. 

    <Separador></Separador>
    #t_2_8.titulo-segundo.color-acento-contenido.mt-5
      h2 2.8. Almacenamiento

    p El almacenamiento, al igual que las demás actividades de poscosecha, tiene la finalidad de alargar la vida útil y conservar la calidad de los productos. Existen diversas técnicas de almacenamiento, a saber:       

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde").mt-5
      .row(titulo="Almacenamiento común").px-5.py-2
        .row
          .col-md-8
            p.text-justify Por medio de técnicas de almacenamiento se permite regular la respiración y la pérdida de agua (transpiración), factores de deterioro de la calidad que se agudizan en medio de condiciones ambientales extremas porque se aceleran los procesos fisiológicos.
            h4.mx-4 Común
            p.mx-4.text-justify Donde los productos se conservar bajo condiciones ambientales naturales, durante el tiempo que se mantengan las características propias (sensoriales, nutricionales, físicas, químicas) o se produzcan alteraciones mínimas, por medio el aprovechamiento de la ventilación natura. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/img31.png', alt='')    
      div(titulo="Almacenamiento con refrigeración y congelamiento").px-5.py-3
        .row
          .col-md-8
            p.text-justify El almacenamiento también permite estabilizar y regular los procesos de oferta y demanda porque hace posible un control en la comercialización, pues al guardarse el producto se pueden tener provisiones para el tiempo de no cosecha. 
            h4.mx-4 Refrigeración y congelamiento
            p.mx-4.text-justify Se provee las condiciones de temperatura y humedad ideales y requeridas para prolongar la vida de anaquel, mediante el control de forma artificial de la temperatura, es decir por medio del almacenamiento con enfriamiento 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/img32.png', alt='')    
             
      div(titulo="Almacenamiento en atmósferas controladas y modificadas").px-5.py-3
        .row
          .col-md-8
            p.text-justify No obstante, se deben tener presentes y proveer las condiciones adecuadas durante el almacenamiento para evitar la continuidad de los procesos de desarrollo propios de los productos como brotado, alargamiento, enraizamiento, reverdecimiento, germinación de semillas y endurecimiento. 
            h4.mx-4 Atmósferas controladas y modificadas
            p.mx-4.text-justify Permiten adicionar, extraer o cambiar la concentración de gases que la componen. como el dióxido de carbono (CO2), oxígeno (02). etileno (C2H4). nitrógeno (N). con la finalidad de generar un retraso en los cambios fisiológicos, biológicos y químicos propios del ciclo de vida de los productos 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/img33.png', alt='')    

    p.mt-5.mb-5 Durante este proceso de poscosecha es necesario tener en cuenta diversas variables y factores para lograr resultados adecuados: 

    h4 Técnicas de almacenamiento
    p El almacenamiento, al igual que las demás actividades de poscosecha, tiene la finalidad de alargar la vida útil y conservar la calidad de los productos.
    p Las siguientes son algunas de las diversas técnicas de almacenamiento:
    .row.justify-content-center.mt-5    
      .col-md-6.align-self-end
        figure
          img(src='@/assets/curso/temas/tema2/img34.png', alt='')         
      .col-md-6
        .row.align-items-end.bg6 
          p.mx-3 Los sistemas de información en la empresa  La temperatura y humedad que deben estar monitoreadas y controladas  
        .row.align-items-end.bg6 
          p.mx-3 El diseño adecuado que permite la circulación de aire 
        .row.align-items-end.bg6 
          p.mx-3 La de higiene y desinfección del lugar 
        .row.align-items-end.bg6 
          p.mx-3 Las condiciones con que ingresa el producto
        .row.align-items-end.bg6 
          p.mx-3 La rotación de los productos   
        .row.align-items-end.bg6 
          p.mx-3 La forma de organizarlos y acomodarlos (no pegados a la pared ni al techo)   
        .row.align-items-end.bg6 
          p.mx-3 El uso de estibas o plataformas para evitar colocar los productos directamente en el piso 
        .row.align-items-end.bg6 
          p.mx-3 La distancia entre arrume y arrume, entre arrume y pared y entre arrume y techo   
        .row.align-items-end.bg6 
          p.mx-3 Las medidas de seguridad y elementos de protección personal 
    
    .row.justify-content-center.mt-5  
      .col-md-6
        p.mt-4 El transporte consiste en movilizar los productos, ya sea a nivel interno ―desde el lugar de cultivo hasta el lugar donde se va a llevar a cabo el proceso de poscosecha― o de forma externa ―hacia la comercialización y el consumidor. Para ello se emplean vehículos y embalajes que deben proporcionar condiciones idóneas de comodidad, higiene e inocuidad, a fin de evitar daños, deterioro, pérdidas de producto o contaminación física, química y microbiana.  
      .col-md-6  
        figure
          img(src='@/assets/curso/temas/tema2/img35.png', alt='')            


    <Separador></Separador>
    #t_2_9.titulo-segundo.color-acento-contenido.mt-5
      h2 2.9. Transporte y comercialización

    p.mt-5.mb-5 Los métodos de transporte existentes más empleados son:

    .row
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-tarjeta-animada.tarjeta-animada-tamano(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-3
              h5.mt-5.text-center Transporte aéreo
              p.text-center Este medio permite la realización de desplazamientos a nivel nacional e internacional. La rapidez es una de las ventajas de este medio de transporte, pero sus costos son elevados. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img36.png')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-tarjeta-animada.tarjeta-animada-tamano(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-3
              h5.mt-5.text-center Transporte fluvial y marítimo
              p.text-center Es el que utiliza las vías acuáticas (mares, ríos, canales). Se emplea a nivel internacional, barcos de carga; y a nivel local, desplazamientos  en canoas y lanchas.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img37.png')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-tarjeta-animada.tarjeta-animada-tamano(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-3
              h5.mt-5.text-center Transporte ferroviario
              p.text-center Requiere de vías férreas y de vagones, confiere la ventaja de ser de menor costo y permitir el transporte de productos a distancias largas.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img38.png')})`}")

    .row.justify-content-center.mt-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-tarjeta-animada.tarjeta-animada-tamano(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-3
              h5.text-center Cumplir con los requisitos y normas
              p.text-center Tener presente a la hora de transportar: que todo debe estar limpio y cumplir con los requisitos y normas, no mezclar productos ni transportar junto a animales o agroquímicos. El proceso de cargue debe ser cuidadoso y, en caso de ser en un medio de transporte abierto, se debe de cubrir la carga para protegerla del sol, el polvo y la lluvia. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img40.png')})`}")     

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-tarjeta-animada.tarjeta-animada-tamano(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-3
              h5.mt-5.text-center Costos
              p.text-center Se requiere determinar el costo de transporte, analizar el estado de las vías, determinar el tiempo de recorrido, conocer el tipo de empaque y embalaje.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img41.png')})`}")  

    .row.justify-content-center.mt-5
      .col-md-9
        .cajon.color-cajon
          .row.justify-content-center.p-3 
            p Estimado aprendiz: para desarrollar el componente denominado Cosecha y poscosecha se trataron temas relacionados con las actividades realizadas en las fases de precosecha, cosecha y poscosecha, las cuales influyen directamente en la obtención de productos agrícolas inocuos y seguros para el consumo. Tales fases son de gran importancia debido a que permiten reducir las pérdidas mediante la realización adecuada de procesos que requieren de buenas prácticas agrícolas y de manufactura. 
            p De esta manera damos fin al componente y le invitamos a leer detenidamente el capítulo y realizar las actividades incluidas para que afiance sus conocimientos.            
      .col-md-3
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema2/img42.png', alt='')  

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
