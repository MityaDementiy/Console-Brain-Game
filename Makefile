install: 
	npm install

start: 
	npx babel-node -- src/bin/brain-games.js

even:
	npx babel-node -- src/bin/braineven.js

calc: 
	npx babel-node -- src/bin/braincalc.js

gsd:
	npx babel-node -- src/bin/braingsd.js

progression:
	npx babel-node -- src/bin/brainprogression.js

prime:
	npx babel-node -- src/bin/brainprime.js
	
publish: 
	npm publish

lint:
	npx eslint .
