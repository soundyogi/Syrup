### Syrup, makes Waffles tasty

You will need node.js, the grunt-cli and bower.

Get NodeJS and npm

	nodejs.org

Install grunt, bower and yo (yeoman)

	npm install -g grunt-cli yo bower

Clone the repo and cd into it

	npm install
	bower install

Start your local production server with:

~~~
grunt server
~~~~~

build / minify with:

~~~
grunt build
~~~~

F.A.Q:

* Why are all the bootstrap files in the styles dir?
  
_I like bootstrap. What I dont like is its size, so I think its nice to work with the .less files directly. yup._