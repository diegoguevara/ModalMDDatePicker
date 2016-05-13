# Angular Material DatePicker 


Just another native [Angular Material-Design](https://material.angularjs.org)  DatePicker Component. [see demo](https://jsfiddle.net/diegoguevara/7fatr9go/)


## Installation

You can choose your installation method:

- bower: `bower install modal-md-datePicker --save`
- npm: `npm install modalmddatepicker --save`
- Download from github: [modal-md-datepicker](https://github.com/diegoguevara/ModalMDDatePicker/releases) 

## Requirements

- [angular-material](https://material.angularjs.org) 1.0.7+

## Usage

Include **modal-md-datepicker.min.js** in your application.

```html
<script src="bower_components/modalmddatePicker/modal-md-datepicker.min.js"></script>
```

Toolbar date language is defined by `angular-locale` library. 

Angular separates number and datetime format rule sets into different files, each file for a particular locale. You can find a list of currently supported locales [here](https://github.com/angular/angular.js/tree/master/src/ngLocale).

```html
<script src="https://code.angularjs.org/1.2.5/i18n/angular-locale_es-co.js"></script>
```

Add both `mdThemeColors` and `ModalDatePicker` modules as a dependency to your app module.

```js
var app_ = angular.module('app',[
    'ngMaterial', // angular material required 
    ...
    'mdThemeColors', 
    'ModalDatePicker'
]);
```

### Default datepicker

```html
<modal-md-datepicker ng-model="selectedDate"></modal-md-datepicker>
```


### Format date

Attribute `date-format`: `String` with plain javascript date format. Format input text result date.

```html
<modal-md-datepicker ng-model="selectedDate" date-format="dd MMMM yyyy"></modal-md-datepicker>
```


### Min Date

Attribute `min-date`: `Date` javascript date object with min date.

```html
<modal-md-datepicker ng-model="selectedDate" min-date="{{min_date}}"></modal-md-datepicker>
```

```js
$scope.min_date = new Date();
```

### Max Date

Attribute `max-date`: `Date` javascript date object with max date.

```html
<modal-md-datepicker ng-model="selectedDate" max-date="{{max_date}}"></modal-md-datepicker>
```
```js
$scope.max_date = new Date();
```

### Locked input

Attribute `locked` : `bool` Locks input field to prevent direct write.

```html
<modal-md-datepicker ng-model="selectedDate" locked="true"></modal-md-datepicker>
```

### Options

Attribute `options`: `json` Object with language attributes.

Allow to define default language or Strings with month and day names.

#### `lang` : optional
Allow to define default language for month and day names in calendar.


```html
<modal-md-datepicker ng-model="selectedDate" options="dp_options"></modal-md-datepicker>
```
```js
$scope.dp_options = {
    lang : 'en' // en, es, default:es
};
```

#### Month and day names : optional
Allow to define default language for month and day names in calendar.


```html
<modal-md-datepicker ng-model="selectedDate" options="dp_options"></modal-md-datepicker>
```
```js
$scope.dp_options = {
    sort_days : ['D', 'L', 'M', 'M', 'G', 'V', 'S'],
    months : ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    short_months : ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic']
}
```

Toolbar title date language is defined by `angular-locale` library. [More info](https://docs.angularjs.org/guide/i18n)


#### `title_date_format` : optional

Allow to format component title date, with plain javascript date format.

```html
<modal-md-datepicker ng-model="selectedDate" options="format_title_options"></modal-md-datepicker>
```
```js
$scope.format_title_options = {
    title_date_format : 'EEEE, MMMM d'
};
```



## Example 

[Live Example](https://jsfiddle.net/diegoguevara/7fatr9go/): Live simple example in jsfiddle.net.

[test/index.html](https://github.com/diegoguevara/ModalMDDatePicker/blob/master/test/index.html): Test page included in the project with all options implemented.

## License

Released under the terms of the [MIT License](https://raw.githubusercontent.com/diegoguevara/ModalMDDatePicker/master/LICENSE).