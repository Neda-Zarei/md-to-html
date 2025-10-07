// ========================================
// Utility Functions
// ========================================

/**
 * Debounce utility function to limit the rate of function execution
 * @param {Function} func - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {Function} - The debounced function
 */
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// ========================================
// Core Conversion Functions
// ========================================

/**
 * Convert Markdown text to HTML using marked.js
 * @param {string} markdownText - The Markdown string to convert
 * @returns {string} - The sanitized HTML string
 */
function convertMarkdownToHTML(markdownText) {
    try {
        // Return empty string if input is empty or only whitespace
        if (!markdownText || markdownText.trim() === '') {
            return '';
        }
        
        // Use marked.parse() to convert Markdown to HTML
        // marked.js provides basic sanitization by default
        const html = marked.parse(markdownText);
        return html;
    } catch (error) {
        console.error('Error converting Markdown to HTML:', error);
        return '<p style="color: red;">Error converting Markdown. Please check your syntax.</p>';
    }
}

/**
 * Render HTML content into the output div
 * @param {string} html - The HTML string to render
 */
function renderHTML(html) {
    const outputDiv = document.getElementById('html-output');
    if (outputDiv) {
        outputDiv.innerHTML = html;
    }
}

// ========================================
// Event Handler Functions
// ========================================

/**
 * Handle textarea input and convert Markdown in real-time
 */
function handleTextareaInput() {
    const textarea = document.getElementById('markdown-textarea');
    const markdownText = textarea.value;
    
    const html = convertMarkdownToHTML(markdownText);
    renderHTML(html);
}

/**
 * Handle file upload and convert its Markdown content
 */
function handleFileUpload(event) {
    const file = event.target.files[0];
    
    if (!file) {
        return;
    }
    
    // Check if file is a Markdown file
    if (!file.name.match(/\.(md|markdown)$/i)) {
        alert('Please upload a valid Markdown file (.md or .markdown)');
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const markdownText = e.target.result;
        
        // Update textarea with file content
        const textarea = document.getElementById('markdown-textarea');
        if (textarea) {
            textarea.value = markdownText;
        }
        
        // Convert and render the Markdown
        const html = convertMarkdownToHTML(markdownText);
        renderHTML(html);
    };
    
    reader.onerror = function() {
        console.error('Error reading file');
        alert('Error reading file. Please try again.');
    };
    
    reader.readAsText(file);
}

/**
 * Handle clear/reset button click
 */
function handleClearButton() {
    const textarea = document.getElementById('markdown-textarea');
    const fileInput = document.getElementById('file-input');
    const outputDiv = document.getElementById('html-output');
    
    // Clear textarea
    if (textarea) {
        textarea.value = '';
    }
    
    // Clear file input
    if (fileInput) {
        fileInput.value = '';
    }
    
    // Clear output
    if (outputDiv) {
        outputDiv.innerHTML = '';
    }
}

// ========================================
// Initialization
// ========================================

/**
 * Initialize event listeners when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const textarea = document.getElementById('markdown-textarea');
    const fileInput = document.getElementById('file-input');
    const clearButton = document.getElementById('clear-button');
    
    // Add debounced input listener for real-time textarea conversion
    // Using 300ms debounce to avoid excessive processing
    if (textarea) {
        const debouncedHandler = debounce(handleTextareaInput, 300);
        textarea.addEventListener('input', debouncedHandler);
    }
    
    // Add file upload listener
    if (fileInput) {
        fileInput.addEventListener('change', handleFileUpload);
    }
    
    // Add clear button listener
    if (clearButton) {
        clearButton.addEventListener('click', handleClearButton);
    }
});
