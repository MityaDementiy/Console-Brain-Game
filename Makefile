install: 
	npm install

start: 
	npx babel-node -- src/bin/brain-games.js

even:
	npx babel-node -- src/bin/braineven.js

calc: 
	npx babel-node -- src/bin/braincalc.js
	
publish: 
	npm publish

lint:
	npx eslint
