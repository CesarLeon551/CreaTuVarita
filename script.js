let userName = '';

window.onload = function() {
    // Solicitar el nombre del usuario al cargar la página
    userName = prompt("¿Cuál es tu nombre?");
    if (!userName) {
        alert("Por favor, ingresa tu nombre.");
        return;
    }
    
    // Verificar si el nombre contiene "Lili"
    if (userName.toLowerCase().includes("lili")) {
        alert("Vaya quien diria que la primera seria tan facil? segura que puedes con lo que se viene?");
        window.location.href = "https://cesarleon551.github.io/DiarioSecretoWeb/"; // Redirigir al usuario a GitHub
        return;
    }

    // Continuar con el resto de la lógica si el nombre es válido
};


const wandStories = [
    "Forjada en los bosques encantados de ${wood}, esta varita con núcleo de ${core} tiene una longitud de ${length} cm. Los adornos en ${decorations} revelan una historia de aventuras mágicas y valentía.",
    "Esta varita, hecha de ${wood} y con un núcleo de ${core}, destaca por su longitud de ${length} cm. Sus adornos en ${decorations} cuentan la historia de un antiguo hechicero conocido por su sabiduría.",
    "Con madera de ${wood} y un núcleo de ${core}, esta varita de ${length} cm es ideal para lanzar hechizos de protección. Los adornos en ${decorations} hablan de un legado de guardianes de magia.",
    "La elegancia de esta varita de ${wood} con núcleo de ${core} y una longitud de ${length} cm es inigualable. Los adornos en ${decorations} narran historias de batallas épicas y antiguos héroes.",
    "Cada hechizo lanzado con esta varita de ${wood} y núcleo de ${core} revela una historia mágica. Con una longitud de ${length} cm y adornos en ${decorations}, es ideal para aventuras y desafíos.",
    "Esta varita de ${wood} y núcleo de ${core} tiene una longitud de ${length} cm, adornada con ${decorations}. Es famosa por sus hechizos de transmutación y los secretos mágicos que ha desvelado.",
    "La varita de ${wood} con núcleo de ${core} y longitud de ${length} cm es conocida por sus poderosos hechizos de curación. Sus adornos en ${decorations} narran historias de sanación y magia antigua.",
    "Forjada en la madera de ${wood} con un núcleo de ${core}, esta varita de ${length} cm es ideal para hechizos de invocación. Los adornos en ${decorations} revelan un vínculo con criaturas míticas.",
    "Esta varita de ${wood} y núcleo de ${core}, con una longitud de ${length} cm, es famosa por su habilidad para controlar el fuego. Los adornos en ${decorations} cuentan leyendas de dragones y volcanes.",
    "La madera de ${wood} y el núcleo de ${core} de esta varita de ${length} cm son perfectos para hechizos de invisibilidad. Los adornos en ${decorations} narran una historia de espionaje y misterio.",
    "Con una longitud de ${length} cm y hecha de ${wood} con un núcleo de ${core}, esta varita es ideal para la transformación. Sus adornos en ${decorations} reflejan un pasado lleno de cambios y magia.",
    "Esta varita de ${wood} y núcleo de ${core} tiene una longitud de ${length} cm, ideal para hechizos de control mental. Los adornos en ${decorations} cuentan una historia de estrategias y sabiduría.",
    "La varita de ${wood} y núcleo de ${core}, con una longitud de ${length} cm y adornos en ${decorations}, es conocida por su poder sobre el tiempo. Ha sido utilizada en grandes aventuras a través de la historia.",
    "Forjada en ${wood} con un núcleo de ${core}, esta varita de ${length} cm es perfecta para hechizos de invocación. Los adornos en ${decorations} revelan una conexión con antiguos rituales mágicos.",
    "Esta varita de ${wood} y núcleo de ${core}, con una longitud de ${length} cm, es famosa por su habilidad en la defensa mágica. Los adornos en ${decorations} cuentan la historia de guardianes y protectores.",
    "La madera de ${wood} y el núcleo de ${core} de esta varita de ${length} cm son perfectos para hechizos de adivinación. Los adornos en ${decorations} reflejan un legado de sabiduría y visión mágica.",
    "Con una longitud de ${length} cm y hecha de ${wood} con un núcleo de ${core}, esta varita es ideal para el encantamiento de objetos. Sus adornos en ${decorations} narran historias de arte y magia.",
    "Esta varita de ${wood} con núcleo de ${core} tiene una longitud de ${length} cm, adornada con ${decorations}. Es conocida por su poder en la manipulación de elementos y el control de la naturaleza.",
    "La varita de ${wood} y núcleo de ${core}, con una longitud de ${length} cm, es famosa por su habilidad en los hechizos de sueño. Los adornos en ${decorations} cuentan una historia de sueños y pesadillas.",
    "Forjada en madera de ${wood} con un núcleo de ${core}, esta varita de ${length} cm es ideal para la magia de protección. Los adornos en ${decorations} revelan una conexión con antiguos protectores mágicos.",
    "Esta varita de ${wood} y núcleo de ${core}, con una longitud de ${length} cm, es famosa por su habilidad para cambiar la forma de los objetos. Los adornos en ${decorations} narran una historia de transformación y cambio.",
    "La madera de ${wood} y el núcleo de ${core} de esta varita de ${length} cm son ideales para hechizos de curación. Los adornos en ${decorations} reflejan un legado de magia sanadora y protección.",
    "Con una longitud de ${length} cm y hecha de ${wood} con un núcleo de ${core}, esta varita es perfecta para el encantamiento de seres mágicos. Sus adornos en ${decorations} cuentan historias de seres legendarios.",
    "Esta varita de ${wood} y núcleo de ${core} tiene una longitud de ${length} cm, adornada con ${decorations}. Es famosa por su habilidad para invocar tormentas y controlar el clima.",
    "La varita de ${wood} con núcleo de ${core} y longitud de ${length} cm es ideal para hechizos de levitación. Los adornos en ${decorations} cuentan la historia de vuelos mágicos y aventuras en el aire.",
    "Forjada en la madera de ${wood} con un núcleo de ${core}, esta varita de ${length} cm es ideal para la magia de los sueños. Los adornos en ${decorations} revelan historias de mundos oníricos y visiones.",
    "Esta varita de ${wood} y núcleo de ${core}, con una longitud de ${length} cm, es famosa por su poder en la magia elemental. Los adornos en ${decorations} narran una historia de los cuatro elementos.",
    "La madera de ${wood} y el núcleo de ${core} de esta varita de ${length} cm son perfectos para hechizos de comunicación. Los adornos en ${decorations} reflejan una historia de intercambios mágicos y conexiones.",
    "Con una longitud de ${length} cm y hecha de ${wood} con un núcleo de ${core}, esta varita es ideal para hechizos de invisibilidad. Sus adornos en ${decorations} cuentan historias de sigilo y misterio.",
    "Esta varita de ${wood} y núcleo de ${core} tiene una longitud de ${length} cm, adornada con ${decorations}. Es famosa por su habilidad para alterar el espacio y el tiempo, siendo utilizada en grandes hechizos.",
    "La varita de ${wood} con núcleo de ${core} y longitud de ${length} cm es ideal para hechizos de conjuración. Los adornos en ${decorations} narran una historia de creación y magia poderosa.",
    "Forjada en madera de ${wood} con un núcleo de ${core}, esta varita de ${length} cm es ideal para la magia de la protección. Los adornos en ${decorations} revelan un vínculo con antiguos hechiceros protectores.",
    "Esta varita de ${wood} y núcleo de ${core}, con una longitud de ${length} cm, es famosa por su habilidad para manipular el agua. Los adornos en ${decorations} cuentan la historia de ríos y océanos mágicos.",
    "La madera de ${wood} y el núcleo de ${core} de esta varita de ${length} cm son ideales para hechizos de iluminación. Los adornos en ${decorations} reflejan un legado de luz y claridad mágica.",
    "Con una longitud de ${length} cm y hecha de ${wood} con un núcleo de ${core}, esta varita es perfecta para el control de la tierra. Sus adornos en ${decorations} narran historias de poder y estabilidad.",
    "Esta varita de ${wood} y núcleo de ${core} tiene una longitud de ${length} cm, adornada con ${decorations}. Es conocida por su habilidad para la magia de transformación y cambio de forma.",
    "La varita de ${wood} con núcleo de ${core} y longitud de ${length} cm es ideal para hechizos de teletransportación. Los adornos en ${decorations} cuentan la historia de viajes mágicos y aventuras en el espacio.",
    "Forjada en la madera de ${wood} con un núcleo de ${core}, esta varita de ${length} cm es ideal para la magia de la naturaleza. Los adornos en ${decorations} revelan una conexión con los bosques y criaturas mágicas.",
    "Esta varita de ${wood} y núcleo de ${core}, con una longitud de ${length} cm, es famosa por su habilidad en la magia de la mente. Los adornos en ${decorations} narran historias de sabiduría y control mental.",
    "La madera de ${wood} y el núcleo de ${core} de esta varita de ${length} cm son ideales para hechizos de encantamiento. Los adornos en ${decorations} reflejan un legado de belleza y magia artística.",
    "Con una longitud de ${length} cm y hecha de ${wood} con un núcleo de ${core}, esta varita es perfecta para la magia de los animales. Sus adornos en ${decorations} cuentan historias de seres mágicos y su influencia.",
    "Esta varita de ${wood} y núcleo de ${core} tiene una longitud de ${length} cm, adornada con ${decorations}. Es conocida por su habilidad para el encantamiento de objetos y creación de artefactos mágicos.",
    "La varita de ${wood} con núcleo de ${core} y longitud de ${length} cm es ideal para hechizos de control de la mente. Los adornos en ${decorations} narran una historia de sabiduría y habilidades psíquicas.",
    "Forjada en madera de ${wood} con un núcleo de ${core}, esta varita de ${length} cm es ideal para la magia de los sueños. Los adornos en ${decorations} revelan una conexión con mundos de fantasía y sueños.",
    "Esta varita de ${wood} y núcleo de ${core}, con una longitud de ${length} cm, es famosa por su habilidad para controlar el viento. Los adornos en ${decorations} cuentan la historia de tormentas y cielos despejados.",
    "La madera de ${wood} y el núcleo de ${core} de esta varita de ${length} cm son ideales para hechizos de percepción. Los adornos en ${decorations} reflejan un legado de visión y claridad mágica.",
    "Con una longitud de ${length} cm y hecha de ${wood} con un núcleo de ${core}, esta varita es perfecta para la magia de la tierra. Sus adornos en ${decorations} narran historias de estabilidad y poder.",
    "Esta varita de ${wood} y núcleo de ${core} tiene una longitud de ${length} cm, adornada con ${decorations}. Es conocida por su habilidad para conjurar hechizos de protección y escudos mágicos.",
    "La varita de ${wood} con núcleo de ${core} y longitud de ${length} cm es ideal para hechizos de comunicación. Los adornos en ${decorations} narran una historia de intercambios y conexiones mágicas.",
    "Forjada en madera de ${wood} con un núcleo de ${core}, esta varita de ${length} cm es ideal para la magia de la luz. Los adornos en ${decorations} revelan una conexión con fuentes de luz y claridad.",
    "Esta varita de ${wood} y núcleo de ${core}, con una longitud de ${length} cm, es famosa por su habilidad para manipular la gravedad. Los adornos en ${decorations} cuentan la historia de levitación y peso.",
    "La madera de ${wood} y el núcleo de ${core} de esta varita de ${length} cm son ideales para hechizos de transformación. Los adornos en ${decorations} reflejan un legado de cambio y renovación mágica.",
    "Con una longitud de ${length} cm y hecha de ${wood} con un núcleo de ${core}, esta varita es perfecta para el encantamiento de objetos. Sus adornos en ${decorations} narran historias de arte y magia.",
    "Esta varita de ${wood} y núcleo de ${core} tiene una longitud de ${length} cm, adornada con ${decorations}. Es conocida por su habilidad para conjurar hechizos de vuelo y movimiento aéreo.",
    "La varita de ${wood} con núcleo de ${core} y longitud de ${length} cm es ideal para hechizos de encantamiento de animales. Los adornos en ${decorations} narran una historia de magia y conexión con criaturas mágicas.",
    "Forjada en la madera de ${wood} con un núcleo de ${core}, esta varita de ${length} cm es ideal para la magia de protección. Los adornos en ${decorations} revelan una conexión con antiguos hechiceros protectores.",
    "Esta varita de ${wood} y núcleo de ${core}, con una longitud de ${length} cm, es famosa por su habilidad para controlar el fuego. Los adornos en ${decorations} narran una historia de llamas y calor.",
    "La madera de ${wood} y el núcleo de ${core} de esta varita de ${length} cm son ideales para hechizos de invocación. Los adornos en ${decorations} reflejan un legado de poderosos rituales mágicos.",
    "Con una longitud de ${length} cm y hecha de ${wood} con un núcleo de ${core}, esta varita es perfecta para la magia de los sueños. Sus adornos en ${decorations} cuentan historias de sueños y visiones.",
    "Esta varita de ${wood} y núcleo de ${core} tiene una longitud de ${length} cm, adornada con ${decorations}. Es conocida por su habilidad para conjurar hechizos de visibilidad y revelación.",
    "La varita de ${wood} con núcleo de ${core} y longitud de ${length} cm es ideal para hechizos de encantamiento de objetos. Los adornos en ${decorations} narran una historia de belleza y creación mágica.",
    "Forjada en madera de ${wood} con un núcleo de ${core}, esta varita de ${length} cm es ideal para la magia de la naturaleza. Los adornos en ${decorations} revelan una conexión con los bosques y criaturas mágicas.",
    "Esta varita de ${wood} y núcleo de ${core}, con una longitud de ${length} cm, es famosa por su habilidad en la magia de la mente. Los adornos en ${decorations} narran historias de sabiduría y control mental.",
    "La madera de ${wood} y el núcleo de ${core} de esta varita de ${length} cm son ideales para hechizos de adivinación. Los adornos en ${decorations} reflejan un legado de visión y previsión mágica.",
    "Con una longitud de ${length} cm y hecha de ${wood} con un núcleo de ${core}, esta varita es perfecta para la magia del agua. Sus adornos en ${decorations} cuentan historias de ríos y mares mágicos.",
    "Esta varita de ${wood} y núcleo de ${core} tiene una longitud de ${length} cm, adornada con ${decorations}. Es conocida por su habilidad para conjurar hechizos de luz y claridad.",
    "La varita de ${wood} con núcleo de ${core} y longitud de ${length} cm es ideal para hechizos de conjuración de objetos. Los adornos en ${decorations} narran una historia de creación y magia poderosa.",
    "Forjada en la madera de ${wood} con un núcleo de ${core}, esta varita de ${length} cm es ideal para la magia de la tierra. Los adornos en ${decorations} revelan una conexión con el poder y la estabilidad.",
    "Esta varita de ${wood} y núcleo de ${core}, con una longitud de ${length} cm, es famosa por su habilidad en la magia de los sueños. Los adornos en ${decorations} narran una historia de visiones y fantasías.",
    "La madera de ${wood} y el núcleo de ${core} de esta varita de ${length} cm son ideales para hechizos de transformación. Los adornos en ${decorations} reflejan un legado de cambio y renovación mágica."
];

function createWand() {
    if (!userName) {
        alert("Por favor, ingresa tu nombre antes de crear una varita.");
        return;
    }

    const wood = document.getElementById('wood').value;
    const core = document.getElementById('core').value;
    const length = document.getElementById('length').value;
    const decorations = document.getElementById('decorations').value;

    const wand = document.getElementById('wand');
    if (!wand) {
        console.error("Elemento 'wand' no encontrado.");
        return;
    }

    const handle = wand.querySelector('.handle');
    const tip = wand.querySelector('.tip');
    if (!handle || !tip) {
        console.error("Elemento 'handle' o 'tip' no encontrado.");
        return;
    }

    const storyElement = document.getElementById('wand-story');
    if (!storyElement) {
        console.error("Elemento 'wand-story' no encontrado.");
        return;
    }

    // Ajustar estilo de la varita (por ejemplo, color de los adornos)
    const colorMap = {
        oro: '#FFD700',
        plata: '#C0C0C0',
        cuero: '#A0522D',
        nada: '#8B4513' // Color base para la madera sin adornos
    };
    
    handle.style.backgroundColor = colorMap[decorations] || '#8B4513';
    tip.style.backgroundColor = colorMap[decorations] || '#8B4513';

    // Generar historia aleatoria
    const randomStory = wandStories[Math.floor(Math.random() * wandStories.length)];
    const story = randomStory
        .replace('${name}', userName)
        .replace('${wood}', wood)
        .replace('${core}', core)
        .replace('${length}', length)
        .replace('${decorations}', decorations);

    storyElement.innerHTML = story;
}
