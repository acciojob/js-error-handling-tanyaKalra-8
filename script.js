//your code here
class OutOfRangeError extends Error {
  constructor() {
    super("Expression should only consist of integers and +-/* characters");
    this.name = "OutOfRangeError";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super("Expression should not have an invalid combination of operators");
    this.name = "InvalidExprError";
  }
}

function evalString(expression) {
  // Check for invalid combination of operators
  if (/(\+\+|--|\+\*|\+\-|\/\+|\*\+|\/\-|\-\+|\-\*|\*\/|\/\/)/.test(expression)) {
    throw new InvalidExprError();
  }

  // Check if expression starts with an invalid operator
  if (/^(\+|\*|\/)/.test(expression)) {
    throw new SyntaxError("Expression should not start with an invalid operator");
  }

  // Check if expression ends with an invalid operator
  if (/(\+|\-|\*|\/)$/.test(expression)) {
    throw new SyntaxError("Expression should not end with an invalid operator");
  }

  // Evaluate the expression here
  // ...

  // For this example, let's just return the evaluated result as a string
  return "Result: " + expression;
}

// Example usage
try {
  const expression = "+1*2-3/4"; // Replace with your desired expression

  const result = evalString(expression);
  console.log(result);
} catch (error) {
  if (error instanceof OutOfRangeError || error instanceof InvalidExprError) {
    console.error(error.name + ": " + error.message);
  } else {
    throw error;
  }
}
