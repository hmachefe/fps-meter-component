fps-meter-component
===================


TODO: This project aims to provide a box on-the-shelf with graphic display dedicated to FPS measurements

> Maintained by [Hugo Machefer](https://github.com/hmachefe).

## Demo

> [Check it live](http://hugo.machefer.free.fr/fps-meter-component/).

## Usage

1. Import Web Components' polyfill:

	```html
	<script src="../lib/polymer.js"></script>
	<script src="../lib/Platform.js"></script>	
	```

2. Import Custom Element:

	```html
    <link rel="import" href="src/fps-meter.html">
	```

3. Start using it!

	```html
    <fps-meter></fps-meter>
    <fps-meter theme="light"></fps-meter>
    <fps-meter theme="colorful"></fps-meter>
    <fps-meter theme="transparent"></fps-meter>
	```

## Options

Attribute  | Options                   | Default             | Description
---        | ---                       | ---                 | ---
`theme`    | *string*                     | `undefined`                 | skin that shall be used to display FPS graphic

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

* v0.0.1 Jan 1, 2014
	* Started project using [polymer](https://github.com/polymer/polymer)

## License

[MIT License](http://opensource.org/licenses/MIT)
