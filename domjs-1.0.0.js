/*
	domjs 1.0.0
	Criado por Janderson Costa em 24/04/2016.
*/

var dom = {
	foreach: function(array, f) {
		/*
			descrição: percorre um array retornando elemento e índice na função f.
		*/

		for (var i = 0; i < array.length; i++) {
			f(array[i], i);
		}

		return array;
	},

	findIn: function(node, selector) {
		/*
			descrição: encontra no elemento pai (node), elementos filhos que correspondam a class ou tag especificada.
			uso:
				find(tr, ".item");
				find(tr, "td");
		*/

		if (selector.match(/\./))
			return node.getElementsByClassName(selector.replace(/\./, ""));
		else
			return node.getElementsByTagName(selector);
	},

	style: function(elements, properties) {
		/*
			uso:
				style(element, {
					"color": "red",
					"fontSize": "11pt"
				});
		*/

		if (!elements.length)
			elements = [elements];

		for (var i = 0; i < elements.length; i++) {
			for (var j = 0; j < Object.keys(properties).length; j++) {
				var p = Object.keys(properties)[j];
				elements[i].style[p] = properties[p];
			}
		}

		return elements;
	},

	attributes: function(elements, properties) {
		/*
			uso:
				attr(element, {
					"id": "red",
					"name": "11pt"
				});
		*/

		if (!elements.length)
			elements = [elements];

		for (var i = 0; i < elements.length; i++) {
			for (var j = 0; j < Object.keys(properties).length; j++) {
				var p = Object.keys(properties)[j];
				elements[i].setAttribute(p, properties[p]);
			}
		}

		return elements;
	}
};