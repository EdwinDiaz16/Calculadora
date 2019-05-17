function operaciones(operador){
		//2 obtener los valores
		var num1 = parseInt(document.getElementById('num1').value);
		// num1 = parseInt(num1);
		var num2 = parseInt(document.getElementById('num2').value);



		var result;
		if (operador == "suma"){
			result = num1 + num2;	
		}
		document.getElementById("resultado").innerHTML = result;

		document.getElementById("resultado2").innerHTML = "Su cuenta a pagar es: " + result2;

		if (oper == "calcular") {
		result2 = num2 / num3