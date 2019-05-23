# divide-bigint

A dependency-free library for dividing two numbers, where either
or both may be a BigInt, and the result should be a 64bit float.

## Usage
```javascript
import divide from 'divide-bigint'

divide(5000000000000000000000000n, 2000000000000000000000000n)
divide(5n, 2)
divide(5, 2n)
divide(5, 2)
// -> 2.5
```

## Supported environments
- Polyfilled environments.
- Webpack (through module-field).
- Node.js
- Native browser imports

## Licence

Copyright 2019 Adrian Helvik

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
