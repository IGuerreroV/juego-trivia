export const categories = {
  hardware: 'Hardware',
  software: 'Software'
}

const {
  hardware,
  software
} = categories

export const question = [
  {
    id: 1,
    category: hardware,
    question: '¿Qué componente de hardware es conocido como el "cerebro" de la computadora?',
    correct_answer: 'CPU (Unidad Central de Procesamiento)',
    incorrect_answer: [
      'GPU (Unidad de Procesamiento Gráfico)',
      'RAM (Memoria de Acceso Aleatorio)',
      'PSU (Unidad de Suministro de Energía)'
    ]
  },
  {
    id: 2,
    category: software,
    question: '¿Cuál de los siguientes es un sistema operativo de código abierto?',
    correct_answer: 'Linux',
    incorrect_answer: [
      'Windows',
      'macOS',
      'Android'
    ]
  },
  {
    id: 3,
    category: hardware,
    question: '¿Qué tipo de dispositivo de almacenamiento utiliza discos magnéticos para almacenar datos de forma permanente?',
    correct_answer: 'Disco duro',
    incorrect_answer: [
      'SSD (Unidad de Estado Sólido)',
      'Pendrive',
      'Tarjeta de memoria'
    ]
  },
  {
    id: 4,
    category: software,
    question: '¿Qué función realiza un firewall en un sistema informático?',
    correct_answer: 'Proteger la red al filtrar el tráfico no autorizado',
    incorrect_answer: [
      'Mejorar el rendimiento del sistema operativo',
      'Optimizar la velocidad de internet',
      'Resguardar la integridad de los datos'
    ]
  },
  {
    id: 5,
    category: hardware,
    question: '¿Qué tipo de conexión de red inalámbrica permite a los dispositivos conectarse a internet dentro de un área limitada?',
    correct_answer: 'Wi-Fi',
    incorrect_answer: [
      'Bluetooth',
      'NFC (Near Field Communication)',
      'Ethernet'
    ]
  },
  {
    id: 6,
    category: hardware,
    question: '¿Cuál de los siguientes es un dispositivo de entrada comúnmente utilizado para apuntar y hacer clic en elementos en la pantalla de la computadora?',
    correct_answer: 'Ratón',
    incorrect_answer: [
      'Teclado',
      'Joystick',
      'Tableta gráfica'
    ]
  },
  {
    id: 7,
    category: hardware,
    question: '¿Qué componente de hardware se utiliza para mostrar información visual en la pantalla de la computadora?',
    correct_answer: 'Tarjeta gráfica',
    incorrect_answer: [
      'CPU (Unidad Central de Procesamiento)',
      'RAM (Memoria de Acceso Aleatorio)',
      'Fuente de alimentación'
    ]
  },
  {
    id: 8,
    category: software,
    question: '¿Cuál de los siguientes es un sistema operativo ampliamente utilizado en servidores?',
    correct_answer: 'Windows Server',
    incorrect_answer: [
      'macOS',
      'Linux',
      'Android'
    ]
  },
  {
    id: 9,
    category: software,
    question: '¿Qué tipo de software se utiliza para crear y editar presentaciones multimedia?',
    correct_answer: 'Software de presentación',
    incorrect_answer: [
      'Software de hoja de cálculo',
      'Software de procesamiento de textos',
      'Software de diseño gráfico'
    ]
  },
  {
    id: 10,
    category: software,
    question: '¿Cuál de los siguientes es un ejemplo de un software de edición de imágenes?',
    correct_answer: 'Adobe Photoshop',
    incorrect_answer: [
      'Microsoft Word',
      'Google Chrome',
      'Mozilla Firefox'
    ]
  },
  {
    id: 11,
    category: software,
    question: '¿Qué tipo de software se utiliza para proteger una computadora contra virus y otras amenazas de seguridad?',
    correct_answer: 'Antivirus',
    incorrect_answer: [
      'Navegador web',
      'Reproductor multimedia',
      'Software de hoja de cálculo'
    ]
  },
  {
    id: 12,
    category: 'Hardware',
    question: '¿Qué función cumple la memoria RAM en una computadora?',
    correct_answer: 'Almacenar temporalmente datos y programas que están en uso',
    incorrect_answer: [
      'Almacenar permanentemente todos los datos y programas de la computadora',
      'Controlar la velocidad de procesamiento de la computadora',
      'Administrar la conexión a internet de la computadora'
    ]
  },
  {
    id: 13,
    category: hardware,
    question: '¿Qué componente de hardware se utiliza para conectar una computadora a una red Ethernet?',
    correct_answer: 'Tarjeta de red',
    incorrect_answer: [
      'Router',
      'Cable HDMI',
      'Antena Wi-Fi'
    ]
  },
  {
    id: 14,
    category: software,
    question: '¿Qué tipo de software se utiliza para gestionar y organizar información en forma de tablas?',
    correct_answer: 'Hoja de cálculo',
    incorrect_answer: [
      'Procesador de texto',
      'Software de presentación',
      'Antivirus'
    ]
  },
  {
    id: 15,
    category: software,
    question: '¿Cuál de los siguientes es un ejemplo de un software de mensajería instantánea?',
    correct_answer: 'WhatsApp',
    incorrect_answer: [
      'Microsoft Excel',
      'Adobe Photoshop',
      'Google Chrome'
    ]
  },
  {
    id: 16,
    category: software,
    question: '¿Cuál de los siguientes es un ejemplo de un software de sistema operativo para dispositivos móviles?',
    correct_answer: 'Android',
    incorrect_answer: [
      'Windows 10',
      'macOS',
      'Linux'
    ]
  },
  {
    id: 17,
    category: hardware,
    question: '¿Qué componente de hardware se utiliza para almacenar datos de forma permanente en una computadora portátil?',
    correct_answer: 'SSD (Unidad de Estado Sólido)',
    incorrect_answer: [
      'RAM (Memoria de Acceso Aleatorio)',
      'Disco duro externo',
      'Tarjeta de memoria'
    ]
  },
  {
    id: 18,
    category: software,
    question: '¿Cuál de los siguientes es un ejemplo de un navegador web?',
    correct_answer: 'Google Chrome',
    incorrect_answer: [
      'Microsoft Word',
      'Adobe Photoshop',
      'Windows Media Player'
    ]
  },
  {
    id: 19,
    category: software,
    question: '¿Qué función realiza el sistema operativo de una computadora?',
    correct_answer: 'Administrar los recursos de hardware y proporcionar interfaces para el usuario y las aplicaciones',
    incorrect_answer: [
      'Proteger la computadora contra virus y malware',
      'Crear y editar documentos de texto',
      'Conectar la computadora a internet'
    ]
  },
  {
    id: 20,
    category: software,
    question: '¿Cuál de los siguientes es un ejemplo de un software de diseño asistido por computadora (CAD)?',
    correct_answer: 'AutoCAD',
    incorrect_answer: [
      'Adobe Illustrator',
      'Final Cut Pro',
      'Sony Vegas'
    ]
  },
  {
    id: 21,
    category: hardware,
    question: '¿Qué tipo de dispositivo de entrada se utiliza para ingresar texto y comandos en una computadora?',
    correct_answer: 'Teclado',
    incorrect_answer: [
      'Ratón',
      'Micrófono',
      'Escáner'
    ]
  },
  {
    id: 22,
    category: software,
    question: '¿Cuál de los siguientes es un ejemplo de un software de reproducción de medios?',
    correct_answer: 'VLC Media Player',
    incorrect_answer: [
      'Microsoft Excel',
      'Adobe Photoshop',
      'Google Chrome'
    ]
  },
  {
    id: 23,
    category: hardware,
    question: '¿Qué función realiza la tarjeta madre en una computadora?',
    correct_answer: 'Conectar y comunicar entre todos los componentes de hardware de la computadora',
    incorrect_answer: [
      'Procesar datos y ejecutar programas',
      'Almacenar datos de forma permanente',
      'Conectar la computadora a internet'
    ]
  },
  {
    id: 24,
    category: hardware,
    question: '¿Cuál de los siguientes es un ejemplo de un dispositivo de almacenamiento externo?',
    correct_answer: 'Unidad flash USB',
    incorrect_answer: [
      'Disco duro interno',
      'SSD (Unidad de Estado Sólido)',
      'RAM (Memoria de Acceso Aleatorio)'
    ]
  },
  {
    id: 25,
    category: software,
    question: '¿Qué tipo de software se utiliza para escribir y formatear documentos de texto?',
    correct_answer: 'Procesador de texto',
    incorrect_answer: [
      'Hoja de cálculo',
      'Software de presentación',
      'Software de edición de imágenes'
    ]
  },
  {
    id: 26,
    category: hardware,
    question: '¿Qué componente de hardware se utiliza para conectar una computadora a una red inalámbrica?',
    correct_answer: 'Tarjeta de red inalámbrica (Wi-Fi)',
    incorrect_answer: [
      'Cable Ethernet',
      'Tarjeta gráfica',
      'Disco duro'
    ]
  },
  {
    id: 27,
    category: software,
    question: '¿Cuál de los siguientes es un ejemplo de un software de correo electrónico?',
    correct_answer: 'Microsoft Outlook',
    incorrect_answer: [
      'Google Chrome',
      'Adobe Photoshop',
      'VLC Media Player'
    ]
  },
  {
    id: 28,
    category: software,
    question: '¿Qué es un controlador de dispositivo?',
    correct_answer: 'Un programa que permite que el sistema operativo interactúe con un hardware específico',
    incorrect_answer: [
      'Un programa que mejora el rendimiento general de la computadora',
      'Un programa que protege la computadora contra virus y malware',
      'Un programa que crea y edita documentos de texto'
    ]
  },
  {
    id: 29,
    category: software,
    question: '¿Cuál de los siguientes es un ejemplo de un software de videoconferencia?',
    correct_answer: 'Zoom',
    incorrect_answer: [
      'Adobe Illustrator',
      'Microsoft Word',
      'Spotify'
    ]
  },
  {
    id: 30,
    category: software,
    question: '¿Qué tipo de software se utiliza para realizar cálculos numéricos y análisis de datos?',
    correct_answer: 'Software de hoja de cálculo',
    incorrect_answer: [
      'Procesador de texto',
      'Navegador web',
      'Reproductor multimedia'
    ]
  }
]
