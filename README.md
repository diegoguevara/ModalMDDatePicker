# ModalMDDatePicker
Angular Material Design DatePicker Component

## Installing

1. bower

```sh
    bower install ModalMDDatePicker --save
```

1. Add library in page

```html
<script src="bower_components/ModalMDDatePicker/modal-md-datepicker.min.js"></script>
```

2. Include directives in angular app

`mdThemeColors`

`ModalDatePicker`

```js
var app_ = angular.module('app',[
    'ngAnimate',
    'ngMaterial',
    ...
    'mdThemeColors', 
    'ModalDatePicker'
]);
```

## Use

```html
<modal-md-datepicker ng-model="fecha" placeholder="Seleccione la fecha "></modal-md-datepicker>
```

## Demo 

[live demo](https://jsfiddle.net/diegoguevara/7fatr9go/)
