# ModalMDDatePicker
Angular Material Design DatePicker Component

[live demo](https://jsfiddle.net/diegoguevara/7fatr9go/)

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
    'ngMaterial',
    ...
    'mdThemeColors', 
    'ModalDatePicker'
]);
```

## Use

```html
<modal-md-datepicker ng-model="selectedDate" ></modal-md-datepicker>
```

## Demo 

[live demo](https://jsfiddle.net/diegoguevara/7fatr9go/)

## options

**date-format:** `string` format date string Ej. 'dd MMMM yyyy'

**min-date:** `Date` Min Date 

**max-date:** `Date` Max Date 

**read-only** `bool` true or false 

Example: [test/index.html](test/index.html)

```html
<modal-md-datepicker flex ng-model="user.end_date" date-format="dd MMMM yyyy" min-date="{{user.start_date}}" max-date="{{user.max_date}}" ></modal-md-datepicker>
```
