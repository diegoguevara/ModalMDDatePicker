# ModalMDDatePicker
Angular Material Design DatePicker Component

## Instalación

1. Incluir la librería:

```html
<script src="bower_components/ModalMDDatePicker/modal-md-datepicker.min.js"></script>
```

2. Incluir las directivas

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

## Uso

```html
<modal-md-datepicker ng-model="fecha" placeholder="Seleccione la fecha "></modal-md-datepicker>
```