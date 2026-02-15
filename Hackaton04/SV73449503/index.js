function suma(a, b) {
  return a + b;
}

function potencia(base, exponente) {
  return base ** exponente;
}

function sumOfCubes(...nums) {
  return nums.reduce((acc, n) => acc + n ** 3, 0);
}

function triArea(base, altura) {
  return (base * altura) / 2;
}

function calculator(num1, op, num2) {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num2 === 0 ? "No se puede dividir por cero" : num1 / num2;
    case "x":
    case "*":
      return num1 * num2;
    case "%":
      return num1 % num2;
    default:
      return "El parámetro no es reconocido";
  }
}

function tipoDeValor(valor) {
  if (valor === null) return "null";
  if (Array.isArray(valor)) return "array";
  return typeof valor;
}

function sumarTodos(...args) {
  return args.reduce((acc, n) => acc + n, 0);
}

function filtrarNoStrings(arr) {
  return arr.filter((v) => typeof v !== "string");
}

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

function formatPhoneNumber(arr) {
  return `(${arr.slice(0, 3).join("")}) ${arr.slice(3, 6).join("")}-${arr.slice(6).join("")}`;
}

function findLargestNums(matriz) {
  return matriz.map((sub) => Math.max(...sub));
}

function charIndex(palabra, char) {
  const first = palabra.indexOf(char);
  const last = palabra.lastIndexOf(char);
  return first === -1 ? [-1, -1] : [first, last];
}

function toArray(obj) {
  return Object.entries(obj);
}

function getBudgets(personas) {
  return personas.reduce((acc, p) => acc + p.budget, 0);
}

function getStudentNames(alumnos) {
  return alumnos.map((a) => a.name);
}

function squaresSum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) total += i ** 2;
  return total;
}

function multiplyByLength(arr) {
  return arr.map((n) => n * arr.length);
}

function countdown(n) {
  const out = [];
  for (let i = n; i >= 0; i--) out.push(i);
  return out;
}

function diffMaxMin(arr) {
  return Math.max(...arr) - Math.min(...arr);
}

function filterList(arr) {
  return arr.filter((v) => Number.isInteger(v));
}

function repeat(elemento, veces) {
  return Array(veces).fill(elemento);
}

String.prototype.vreplace = function (vocal) {
  return this.replace(/[aeiou]/gi, vocal);
};

function findNemo(texto) {
  const words = texto.split(" ");
  const idx = words.indexOf("Nemo");
  return idx === -1 ? "No encontré a Nemo" : `I found Nemo at ${idx + 1}!`;
}

function capLast(texto) {
  return texto
    .split(" ")
    .map((p) => (p ? p.slice(0, -1) + p.slice(-1).toUpperCase() : p))
    .join(" ");
}

function quizFuncionYArgumentos(definicion, limiteArgumentos) {
  const opcionesDefinicion = [
    "Las funciones son objetos de primera clase, es decir, se pueden manipular y transmitir como cualquier otro objeto.",
    "Una función solo sirve para imprimir texto.",
    "Una función no se puede pasar como argumento."
  ];
  const opcionesArgumentos = ["Solo 2", "Hasta 255 argumentos", "Solo 10"];

  const definicionCorrecta =
    "Las funciones son objetos de primera clase, es decir, se pueden manipular y transmitir como cualquier otro objeto.";
  const limiteCorrecto = "Hasta 255 argumentos";

  const definicionValida = definicion === definicionCorrecta;
  const argumentosValidos = limiteArgumentos === limiteCorrecto;

  return {
    preguntas: [
      {
        pregunta: "¿Cómo defines una función?",
        opciones: opcionesDefinicion
      },
      {
        pregunta: "¿Hasta cuántos argumentos puedes declarar en una función?",
        opciones: opcionesArgumentos
      }
    ],
    respuestasUsuario: {
      definicion,
      limiteArgumentos
    },
    resultado: definicionValida && argumentosValidos ? "Correcto" : "Incorrecto"
  };
}

function showOutput() {
  const output = document.getElementById("output");
  const quiz = document.getElementById("quiz25");
  if (output) output.style.display = "block";
  if (quiz) quiz.style.display = "none";
}

function showQuiz25() {
  const output = document.getElementById("output");
  const quiz = document.getElementById("quiz25");
  if (output) output.style.display = "none";
  if (quiz) quiz.style.display = "block";
}

function printResult(title, input, output) {
  showOutput();
  const el = document.getElementById("output");
  el.textContent = `${title}\nEntrada: ${input}\nSalida: ${JSON.stringify(output, null, 2)}`;
}

function openQuiz25() {
  showQuiz25();
  const result = document.getElementById("quiz25-result");
  const definicion = document.getElementById("q25-definicion");
  const args = document.getElementById("q25-args");
  if (definicion) definicion.value = "";
  if (args) args.value = "";
  if (result) result.textContent = "Selecciona tus respuestas y presiona Validar.";
}

function validarQuiz25() {
  const definicion = document.getElementById("q25-definicion")?.value || "";
  const limiteArgumentos = document.getElementById("q25-args")?.value || "";
  const result = document.getElementById("quiz25-result");

  if (!definicion || !limiteArgumentos) {
    if (result) result.textContent = "Debes elegir una opción en ambas preguntas.";
    return;
  }

  const evaluacion = quizFuncionYArgumentos(definicion, limiteArgumentos);

  if (result) {
    result.textContent =
      evaluacion.resultado === "Correcto"
        ? "Correcto: elegiste las dos respuestas correctas."
        : "Incorrecto: vuelve a intentarlo.";
  }
}

function runExercise(id) {
  switch (id) {
    case 1:
      printResult("01) suma(a, b)", "suma(8, 12)", suma(8, 12));
      break;
    case 2:
      printResult("02) potencia(base, exponente)", "potencia(2, 5)", potencia(2, 5));
      break;
    case 3:
      printResult("03) sumOfCubes(...nums)", "sumOfCubes(1, 5, 9)", sumOfCubes(1, 5, 9));
      break;
    case 4:
      printResult("04) triArea(base, altura)", "triArea(3, 2)", triArea(3, 2));
      break;
    case 5:
      printResult("05) calculator(num1, op, num2)", 'calculator(2, "+", 2)', calculator(2, "+", 2));
      break;
    case 6:
      printResult(
        "06) tipoDeValor(valor)",
        "123, 'hola', true, [1], {a:1}, null",
        [tipoDeValor(123), tipoDeValor("hola"), tipoDeValor(true), tipoDeValor([1]), tipoDeValor({ a: 1 }), tipoDeValor(null)]
      );
      break;
    case 7:
      printResult("07) sumarTodos(...args)", "sumarTodos(1, 2, 3, 4, 5)", sumarTodos(1, 2, 3, 4, 5));
      break;
    case 8:
      printResult(
        "08) filtrarNoStrings(arr)",
        "filtrarNoStrings([1, 'a', true, 'x', 10])",
        filtrarNoStrings([1, "a", true, "x", 10])
      );
      break;
    case 9:
      printResult("09) minMax(arr)", "minMax([1, 2, 3, 4, 5])", minMax([1, 2, 3, 4, 5]));
      break;
    case 10:
      printResult(
        "10) formatPhoneNumber(arr)",
        "formatPhoneNumber([1,2,3,4,5,6,7,8,9,0])",
        formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
      );
      break;
    case 11:
      printResult(
        "11) findLargestNums(matriz)",
        "findLargestNums([[4,2,7,1],[20,70,40,90],[1,2,0]])",
        findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])
      );
      break;
    case 12:
      printResult("12) charIndex(palabra, char)", 'charIndex("hello", "l")', charIndex("hello", "l"));
      break;
    case 13:
      printResult("13) toArray(obj)", "toArray({a:1, b:2})", toArray({ a: 1, b: 2 }));
      break;
    case 14:
      printResult(
        "14) getBudgets(personas)",
        "lista de 3 personas",
        getBudgets([
          { name: "John", age: 21, budget: 23000 },
          { name: "Steve", age: 32, budget: 40000 },
          { name: "Martin", age: 16, budget: 2700 }
        ])
      );
      break;
    case 15:
      printResult(
        "15) getStudentNames(alumnos)",
        "getStudentNames([{name:'Steve'},{name:'Mike'},{name:'John'}])",
        getStudentNames([{ name: "Steve" }, { name: "Mike" }, { name: "John" }])
      );
      break;
    case 16:
      printResult("16) squaresSum(n)", "squaresSum(3)", squaresSum(3));
      break;
    case 17:
      printResult("17) multiplyByLength(arr)", "multiplyByLength([2,3,1,0])", multiplyByLength([2, 3, 1, 0]));
      break;
    case 18:
      printResult("18) countdown(n)", "countdown(5)", countdown(5));
      break;
    case 19:
      printResult(
        "19) diffMaxMin(arr)",
        "diffMaxMin([10,4,1,4,-10,-50,32,21])",
        diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])
      );
      break;
    case 20:
      printResult("20) filterList(arr)", "filterList([1,2,3,'x','y',10])", filterList([1, 2, 3, "x", "y", 10]));
      break;
    case 21:
      printResult("21) repeat(elemento, veces)", "repeat(13, 5)", repeat(13, 5));
      break;
    case 22:
      printResult(
        "22) 'texto'.vreplace(vocal)",
        '"apples and bananas".vreplace("u")',
        "apples and bananas".vreplace("u")
      );
      break;
    case 23:
      printResult("23) findNemo(texto)", 'findNemo("I am finding Nemo !")', findNemo("I am finding Nemo !"));
      break;
    case 24:
      printResult("24) capLast(texto)", 'capLast("hello world")', capLast("hello world"));
      break;
    case 25:
      openQuiz25();
      break;
    default:
      printResult("Ejercicio", "N/A", "No existe ese ejercicio");
  }
}
  

