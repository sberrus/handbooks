<<<<<<< HEAD
// ANOTACIONES DEL HANDBOOK DE TYPESCRIPT OFICIAL DE MICROSOFT. REPASANDO LOS ASPECTOS MÁS GENERALES DEL COMPILADOR
// LINK: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
=======
// Curso básico de Typescript desde la documentación oficial.
>>>>>>> c7ecdbd225d85261f845605b519892213f59308a

/**
 * Typescript es un compilador de Javascript que permite incorporarle caracteristicas nuevas para
 * trabajar de manera eficiente con este.
 *
 * El contenido ha sido sacado directamente de la documentación oficial de Microsoft:
 * https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
 *
 */

// Caracteristicas que añade TS.

// TIPADOS DE DATOS.
/**
 * El tipado de datos es realmente útil para cuando trabajamos con VSCode debido a que este por debajo
 * trabaja con TS. Por lo que el tipado de variables y VSCode trabajan en sinergia para agilizar
 * nuestro proceso de desarrollo cuando trabajamos con proyectos en JS.
 */

// TIPADO POR INFERENCIA
/**
 * El tipado por inferencia significa que TS automáticamente asigna un tipo de dato a una variable
 * primitiva mediante el tipo de dato con el que inicializemos a la misma.
 */

/**Esta variable al ser inicializada como string su tipo de dato queda tipado como string */
const holaMundo = "Hola Mundo";

// TIPADO DEFINIDO
// También podemos definir a fuerza el tipo de dato que recibirá una variable
let stringVar: string;
let numberVar: number;

// TYPO
/**
 * Las TYPES nos permiten darle a las propiedades de ciertos objetos caracteristicas y tipado. Luego estas reglas las
 * podremos utilizar para ciertos objetos añadiendo una capa extra de seguridad.
 */

//DEFINICION DE UNA INTERFAZ
interface User {
	// Las propiedades que se indican en las TYPES tienen que cumplir al implementarse las reglas de tipado de datos,
	// y si esta es requerida o no.
	name: string;
	id: number;
	// Las variables que tienen el signo "?" al final del namespace indican que la variable existe pero puede omitirse.
	description?: string;
}

// Este objeto tiene asignada la interfaz User lo cual, para que el código compile tiene que cumplir con las
// reglas indicadas en la Interfaz.

// Este objeto dispararía un error debido a que al tener la Interfaz User va a requerir que asignes las propiedades
// name y id con sus respectivos datos, de lo contrario fallará y no compilará.
const userError: User = { id: 1 };

// En este caso si compilaria debido a que se estan cumpliendo con las reglas de la interfaz User.
// Al coordinarse con VSCode podemos observar que al oprimir "CTRL" + "SPACE" vemos que entre las sugerencias
// podemos ver a la propiedad description presente pero no requerida. Estas ayudas que nos brindan
// TS y VSCode nos agilizan el trabajo de desarrollo.
const userGood: User = { id: 1, name: "asd" };

// DEFINIENDO TYPES ANIDADOS
/**
 * En el siguiente caso veremos que una Interfaz puede a su vez recibir como TYPE otra interfaz, esto en el
 * caso de los objetos anidados para tener un comportamiento predictivo.
 */

//La interfaz Message da la estructura de un mensaje básico.
interface Message {
	date: number;
	text: string;
	translate?: boolean;
}

// La interface Letter contienen sus propiedades propias pero la propiedad message tiene un Typo Message lo cual,
// además de ser requerida, tiene que cumplir con las reglas de la interfaz Message.
interface Letter {
	origin: string;
	destination: string;
	message: Message;
}

// Y al asignar Letter el objeto tiene que cumplir con las reglas de la interfaz Letter y dentro de
// esta sus interfacez anidadas dentro de esta.
const letter: Letter = { origin: "Madrid", destination: "Caracas", message: { date: 0, text: "lotem ipsum" } };

// TYPOS EN LAS FUNCIONES
// Los tipos en las funciones nos permiten indicarle reglas a los parametros de la función
// o a sus valores de retorno.

interface UserDb {
	id: number;
	isActive: boolean;
	displayName: string;
}

// Al usar un objeto con la interfaz User dentro del parámetro de una función.
// Al llamar a dicha función los parámetros de la función tendran que cumplir con las reglas indicadas dentro de los parámetros
const printUser = (user: User, newDate: number, sanitize?: boolean) => {};

// En este case al indicar la interfaz a la función, indicamos que los datos que devuelve esa función tendrán si o si las propiedades
// indicadas en la interfaz.
const userSanitized = (): User => {
	return { name: "", id: 2, description: "" };
};

// TYPES

/**
 * Los types nos permiten indicar que valores son válidos para almacenar en una variable o dentro de una interface. Typescript tiene 
 * types propias que tienen para los tipos de datos primitivos "string" "number" "boolean" etc...
 * pero ademas, podemos crear nuestros propios types con reglas propias para algun tipo de dato en concreto; además de ayudar al editor
 * mediante el autocompletado a asignar valores para los espacios en memoria con tipos especiales.
 */

// En este ejemplo podemso observar que el type indicará que solo permitirá 2 valores "true" o "false".
type MyBool = true | false;

//De la misma forma en este ejemplo podemos especificar que datos serán permitidos en esta regla.
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// En este caso como podemos observar. El editor devolverá un error debido a que estamos intentando almacenar un valor string
// en una variable de tipo MyBool.
const isAct: MyBool = "lala";

// Además como typescript funciona con buena sinergia con VSCode, este ayuda mucho en el autocompletado.
const isLocked: LockStates =   ;
// 						 ^^^Si usamos en este espacio el autocompletado de vscode, observaremos que como el type 
// contiene 2 valores "locked" | "unlocked", el autocompletado nos ayuda a saber exactamente que tipo de datos acepta este tipo de dato.

// TYPES EN LOS ARGUMENTOS DE LAS FUNCIONES.

/**
 * Como bien pudimos observar, al igual que las interfacez, podemos indicar que tipos de datos condicionales acepta un parámetro de una 
 * función.
 */

/**
 * Devuelve un array 🤷‍♂️
 * @param obj 
 * @returns 
 */
 function wrapInArray(obj: string | string[]) {
	//                     ^^^^^^^^^^^^^^^^^
	// En los parámetros podemos observar que permite pasar 
	if (typeof obj === "string") {
		//   code ...
	  return [obj];
	}
	return obj;
<<<<<<< HEAD
  }

// TYPOS GENERICOS

/**
 * Los tipos genericos nos permiten describir el tipo de dato que contiene. Son comunes cuando queremos describir los 
 * typos de los datos que contendrá algún array.
 */

// En el siguiente ejemplo se esta indicando que este type es un genérico de un array que contiene solo valores strings.
type StringArray = Array<string>;
// En este otro se esta indicando que este type es un genérico de un array que contiene solo valores number.
 type NumberArray = Array<number>;
// Este Array contiene un genérico que indica que recibirá un array de objetos que contienen la prop name de tipo string.
 type ObjectWithNameArray = Array<{ name: string }>;


// TYPE CON GENERICOS
/**
 * Los genéricos nos permiten indicar un tipo de dato de un interface y este dato será utilizado dentro de las reglas de dicha interface
 */

// En este ejemplo estamos creando un interface que contiene reglas para 2 funciones pero como podemos ver, en vez de pasar un tipo de dato,
// pasamos un Type, este type es similar a un argumento, de manera que si nosotros le pasamos un tipo de dato concreto para utilizar en este
// interface, el Type replicará las reglas de dichos datos al resto de Types dentro de la interface.

//En este ejemplo creamos una interface con un type generico
 interface Backpack<Type> {
	// Como podemos ver para la función "add" tenemos un objeto de tipo "Type" que recibirá como typo los que se indiquen al momento de usar
	// la interface.
	add: (obj: Type) => void;
	// Lo mismo ocurro con esta función que devolverá el tipo de dato que se le haya pasado a la interfaz.
	get: () => Type;
  }
   
  // declare para resumir indica que esta variable existe sin importar su procedencia, solo para ejemplificar.
  // En este caso podemos ver que la variable "backpack" tendrá 2 métodos: add y get; pero le pasamos como typo "<string>".
  // Esto esta indicando que la interface "Backpack" va a usar como type string y dentro de esta, el type "Type" que
  // se usan en el argumento de add y en el return de get van a ser a su vez "string".  
  declare const backpack: Backpack<string>;

  // Al invocar esta función debe retornar un dato string debido a que estamos indicando como debe comportarse este método.  
  const object = backpack.get(); // => string

  // En este caso veriamos en el editor que hay un error debido a que el argumento de la función add() de ese dato es un "string"
  // y estamos intentando pasarle un "number" y el compilador no lo permitirá.
  backpack.add(23);


// ANOTACIONES PERSONALES

/**
 * Hay un chiste acerca de javascript que dice asi:
 * 
 * 		"Javascript es como cruzar la calle. Miras a la derecha, miras a la izquierda; y te cae del cielo un avión."
 * 
 * Javascript es un lenguaje muy particular y muy flexible, pero esa flexibilidad que nos aporta este lenguaje, aveces es contraproducente
 * y puede erradicar en provocar bugs dificiles de encontrar hasta que directamente nuestra app revienta.
 * 
 * Por eso Typescript es un complemento que nos puede ayudar a evitar muchisimos dolores de cabeza, por lo que vale la pena dedicarle tiempo y
 * aprender a usarlo correctamente.
 */

// samdev
=======
  }
>>>>>>> c7ecdbd225d85261f845605b519892213f59308a
