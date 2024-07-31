function compareCode(code1, code2) {
    // Normalize the code by removing extra spaces and new lines for a basic comparison
    const normalize = code => code.replace(/\s+/g, ' ').trim();

    code1 = normalize(code1);
    code2 = normalize(code2);

    if (code1 === code2) {
        return "The code blocks are identical.";
    } else {
        let differences = [];
        let len = Math.max(code1.length, code2.length);
        for (let i = 0; i < len; i++) {
            if (code1[i] !== code2[i]) {
                differences.push(`Difference at index ${i}: "${code1[i]}" vs "${code2[i]}"`);
            }
        }
        return differences.length ? differences.join('\n') : "No differences found.";
    }
}

let code1 = `function greet() {
    console.log("Hello, world!");
}`;

let code2 = `function greet() {
    console.log("Hello, World!");
}`;

console.log(compareCode(code1, code2));
