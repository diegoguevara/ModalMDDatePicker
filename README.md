# ModalMDDatePicker
Angular Material Design DatePicker Component

## Installing

### bower

```sh
    bower install ModalMDDatePicker --save
```

### Add library in page

```html
<script src="bower_components/ModalMDDatePicker/modal-md-datepicker.min.js"></script>
```

### Include directives in angular app

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
<modal-md-datepicker ng-model="selectedDate" placeholder="Select a date "></modal-md-datepicker>
```

## Demo 

[live demo](https://jsfiddle.net/diegoguevara/7fatr9go/)
