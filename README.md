# Practice Repository

## Technologies & Libraries

- **Languages**: JavaScript, Python
- **Runtime**: Node.js (JavaScript), Python 3.x
- **Standards**: No frameworks or external dependencies

## Project Overview

This repository contains a collection of basic algorithm implementations in JavaScript and Python. It is a practice repository intended for learning fundamental programming concepts through implementation of simple algorithms.

## Repository Structure

```
Practice/
├── JS/              JavaScript implementations
│   ├── evenodd.js
│   ├── Factorial.js
│   ├── largetnum.js
│   ├── palindrome.js
│   ├── printNum.js
│   ├── promise.js
│   ├── reverseString.js
│   ├── sum.js
│   ├── sumofNaturalnum.js
│   └── vowelsCount.js
├── python/          Python implementations
│   ├── evenodd.py
│   ├── Factorial.py
│   ├── largetnum.py
│   ├── palindrome.py
│   ├── printNum.py
│   ├── reverseString.py
│   ├── sum.py
│   ├── sumofNaturalnum.py
│   └── vowelsCount.py
└── README.md
```

Both directories contain parallel implementations of the same algorithms in their respective languages.

## Features / Implementations

- **Even/Odd classification**: Determines if an integer is even or odd using the modulo operator
- **Factorial computation**: Iteratively calculates n! for a given positive integer
- **Maximum value finder**: Identifies the largest value among a fixed set of numbers
- **Palindrome checker**: Tests if a string is identical when reversed
- **String reversal**: Reconstructs a string in reverse character order
- **Sum calculation**: Computes the arithmetic sum of predefined integers
- **Natural number sum**: Calculates the cumulative sum from 1 to n
- **Vowel counter**: Counts vowel occurrences in a string (case-insensitive, vowels: a, e, i, o, u)
- **Sequential number printer**: Prints integers from 1 to n
- **Promise examples**: Demonstrates JavaScript Promise mechanics through code examples (primarily commented)

## Setup & Requirements

- **For JavaScript**: Node.js (tested with recent versions)
- **For Python**: Python 3.x

No package installation or build steps are required.

## Usage

### Running JavaScript Scripts

Navigate to the `JS/` directory and execute files directly:

```bash
cd JS
node evenodd.js
node Factorial.js
node largetnum.js
node palindrome.js
node printNum.js
node promise.js
node reverseString.js
node sum.js
node sumofNaturalnum.js
node vowelsCount.js
```

Each script executes with hardcoded input values and outputs results to standard output.

### Running Python Scripts

Navigate to the `python/` directory and execute files directly:

```bash
cd python
python evenodd.py
python Factorial.py
python largetnum.py
python palindrome.py
python printNum.py
python reverseString.py
python sum.py
python sumofNaturalnum.py
python vowelsCount.py
```

Each script executes with hardcoded input values and outputs results to standard output.

## Scope & Intent

This repository is intended for **learning and practice purposes**. It demonstrates basic algorithm implementation in two languages to facilitate comparison of language syntax and idioms. It is not intended for production use.

## Limitations

- All scripts use hardcoded input values; no command-line arguments or user input
- No input validation or error handling
- No external dependencies or package managers
- Promise examples in `promise.js` are mostly commented; only basic patterns are demonstrated
- Algorithms are not optimized for performance or large-scale inputs
- No test suite or automated testing framework
- Some scripts contain variable names that do not generalize well (e.g., "Tanish," "iceCream" in numeric examples)

## Contributing

Contributions are welcome. Ensure any additions remain consistent with the repository's learning purpose and include implementations in both JavaScript and Python where applicable.

## License

No license is specified for this repository.
