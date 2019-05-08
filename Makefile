install: 
	npm install

start: 
	npx babel-node -- src/bin/braing-games.js

even:
	npx babel-node -- src/bin/braing-even.js

calc: 
	npx babel-node -- src/bin/braing-calc.js

gcd:
	npx babel-node -- src/bin/braing-gcd.js

progression:
	npx babel-node -- src/bin/braing-progression.js

prime:
	npx babel-node -- src/bin/braing-prime.js
	
publish: 
	npm publish

lint:
	npx eslint .
