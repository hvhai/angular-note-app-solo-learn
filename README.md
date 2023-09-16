# PhotoEditor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Command list
```shell
ng generate component Header --standalone --inline-template

```
Binding

By DOM property
<https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API>

By attribute => add prefix attr.

 Binding allows to assign dynamic values to DOM properties and HTML attributes

⭐ To bind a property, simply place its name in square brackets and assign it to the expression in double quotes

```HTML
<input [value]="someVal">
```
⭐ Attributes use a similar syntax for binding, and need to be prefixed with attr.

```HTML
<button [attr.aria-label]="btnName">Click Me</button>
```
⭐ You can also set the class of elements using `[class.name]="expression"` for a single class, or `[class]="expression"` for multiple classes
