// Multiple dos numeros cualesquiera, sin usar el simbolo *
// -Codigo
// -DDF
   
    const multipliacion = (a, b) => {
        if (b=== 0) return 0
        if (b=== 1) return a
        return a + multiplicacion(a, b - 1)
    }

    console.log(multiplicacion(2,3));

