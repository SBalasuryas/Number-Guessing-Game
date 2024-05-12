function runCode() {
    var code = document.getElementById("codeInput").value;
    var output = document.getElementById("output");
    try {
        // Execute the user's code
        eval(code);
        // Display output
        output.innerHTML = "Output: <br>" + evaluateCode();
    } catch (error) {
        // Display error message if code contains syntax or runtime errors
        output.innerHTML = "Error: " + error.message;
    }
}

function evaluateCode() {
    // This function evaluates the user's code and returns the result
    // For demonstration purposes, let's assume the user's code returns a simple result
    return "Hello, Code Quest!";
}
