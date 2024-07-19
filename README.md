# Number to Words Converter

A JavaScript utility for converting numeric values into their corresponding textual representation in words. This includes both whole numbers and decimal parts, with support for currency formats.

## Features

- Converts numbers to words including handling of rupees and paise.
- Handles numbers with leading zeros and decimal values.
- Formats numbers in both singular and plural forms.

## Installation

To use this code, simply include the script in your HTML file or import it into your JavaScript project.

### HTML Integration

```html
<script src="path/to/numberToWords.js"></script>
<script>
    var number = 1234.56;
    console.log(numberToWords(number)); // Outputs: "One thousand two hundred thirty four rupees and fifty six paise only"
</script>
```

### JavaScript Module

If using as a module, you can export the function from the script:

```javascript
export function numberToWords(number) {
    // Your function implementation
}
```

Then, import it into your project:

```javascript
import { numberToWords } from './path/to/numberToWords.js';

var number = 1234.56;
console.log(numberToWords(number)); // Outputs: "One thousand two hundred thirty four rupees and fifty six paise only"
```

## Usage

### Function

```javascript
function numberToWords(number) {
    // Function implementation here
}
```

#### Parameters

- **`number`**: The numeric value to be converted. It should be a number, e.g., `1234.56`.

#### Returns

- A string representing the number in words, including the currency format. For example: `"One thousand two hundred thirty four rupees and fifty six paise only"`.

### Example

```javascript
var number = 1234.56;
console.log(numberToWords(number));
// Output: "One thousand two hundred thirty four rupees and fifty six paise only"

var zeroNumber = 0.25;
console.log(numberToWords(zeroNumber));
// Output: "Twenty five paise only"
```

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Inspired by various number-to-words utilities.
- Thanks to contributors and maintainers of open-source JavaScript libraries.
