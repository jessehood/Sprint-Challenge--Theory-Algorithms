a)
```  
let max;

  for (let i = 0; i < values.length; i++) {
    if (typeof values[j] == 'undefined') continue;
    const result = values[j] - values[i];
    if (max < result) max = result; 
  }

  return max;
  ```

b) 