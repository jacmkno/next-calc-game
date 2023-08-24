const CALC =  [
    {
            description: "Multiplication by 2",
            calculate: (n) => (2 * n),
            math: "2 * n"
    },
    {
            description: "Square of the number",
            calculate: (n) => (n * n),
            math: "n²"
    },
    {
            description: "Add 5 to the number",
            calculate: (n) => (n + 5),
            math: "n + 5"
    },
    {
            description: "Subtract 10",
            calculate: (n) => (n - 10),
            math: "n - 10"
    },
    {
            description: "Divide by 3",
            calculate: (n) => (n / 3),
            math: "n / 3"
    },
    {
            description: "Modulo 7",
            calculate: (n) => (n % 7),
            math: "n mod 7"
    },
    {
            description: "Multiply by itself minus one",
            calculate: (n) => (n * (n - 1)),
            math: "n * (n - 1)"
    },
    {
            description: "Cube of the number",
            calculate: (n) => (n * n * n),
            math: "n³"
    },
    {
            description: "Add its reverse",
            calculate: (n) => (n + parseInt(n.toString().split('').reverse().join(''))),
            math: "n + reverse(n)"
    },
    {
            description: "Subtract 3, then multiply by 4",
            calculate: (n) => ((n - 3) * 4),
            math: "(n - 3) * 4"
    },
    {
            description: "Square root",
            calculate: (n) => (Math.sqrt(n)),
            math: "√n"
    },
    {
            description: "Absolute value",
            calculate: (n) => (Math.abs(n)),
            math: "|n|"
    },
    {
            description: "Raise to the power of 5",
            calculate: (n) => (n ** 5),
            math: "n⁵"
    },
    {
            description: "Take sine of the number",
            calculate: (n) => (Math.sin(n)),
            math: "sin(n)"
    },
    {
            description: "Divide by its last digit",
            calculate: (n) => (n / (n % 10)),
            math: "n / (n % 10)"
    },
    {
            description: "Double the number, then subtract 7",
            calculate: (n) => ((2 * n) - 7),
            math: "(2 * n) - 7"
    },
    {
            description: "Divide by 2, then multiply by 3",
            calculate: (n) => ((n / 2) * 3),
            math: "(n / 2) * 3"
    },
    {
            description: "Triple the number, then add 9",
            calculate: (n) => ((3 * n) + 9),
            math: "(3 * n) + 9"
    },
    {
            description: "Raise to the power of 3, then subtract the original number",
            calculate: (n) => ((n ** 3) - n),
            math: "n³ - n"
    },
    {
            description: "Multiply by 10, then divide by 2",
            calculate: (n) => ((n * 10) / 2),
            math: "(n * 10) / 2"
    },
    {
            description: "Square, then add 1",
            calculate: (n) => ((n * n) + 1),
            math: "n² + 1"
    },
    {
            description: "Divide by 5, then add 20",
            calculate: (n) => ((n / 5) + 20),
            math: "(n / 5) + 20"
    },
    {
            description: "Multiply by itself, then subtract itself",
            calculate: (n) => ((n * n) - n),
            math: "n² - n"
    },
    {
            description: "Raise to the power of 4, then add 4",
            calculate: (n) => ((n ** 4) + 4),
            math: "n⁴ + 4"
    },
    {
            description: "Divide by itself",
            calculate: (n) => (n !== 0 ? n / n : undefined),
            math: "n / n"
    },
    {
            description: "Add its double",
            calculate: (n) => (n + (2 * n)),
            math: "n + 2n"
    },
    {
            description: "Subtract 5, then divide by 5",
            calculate: (n) => ((n - 5) / 5),
            math: "(n - 5) / 5"
    },
    {
            description: "Take cosine of the number",
            calculate: (n) => (Math.cos(n)),
            math: "cos(n)"
    },
    {
            description: "Multiply by 3, then take square root",
            calculate: (n) => (Math.sqrt(3 * n)),
            math: "√(3 * n)"
    },
    {
            description: "Divide by 4, then multiply by itself",
            calculate: (n) => ((n / 4) * (n / 4)),
            math: "(n / 4)²"
    },
    {
            description: "Subtract its reverse",
            calculate: (n) => (n - parseInt(n.toString().split('').reverse().join(''))),
            math: "n - reverse(n)"
    },
    {
            description: "Take tangent of the number",
            calculate: (n) => (Math.tan(n)),
            math: "tan(n)"
    },
    {
            description: "Add 7, then take cube root",
            calculate: (n) => (Math.cbrt(n + 7)),
            math: "∛(n + 7)"
    },
    {
            description: "Multiply by 6, then divide by 3",
            calculate: (n) => ((n * 6) / 3),
            math: "(n * 6) / 3"
    },
    {
            description: "Subtract 2, then multiply by its reverse",
            calculate: (n) => ((n - 2) * parseInt(n.toString().split('').reverse().join(''))),
            math: "(n - 2) * reverse(n)"
    },
    {
            description: "Take logarithm (base 10) of the number",
            calculate: (n) => (Math.log10(n)),
            math: "log₍₁₀₎(n)"
    },
];

export default CALC;