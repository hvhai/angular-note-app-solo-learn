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
## Binding

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

## Validation form

In template-driven forms, you can define form validations in the template, just like with simple HTML forms.

To track the validity of the form, give it a name using the ngForm directive (e.g. #myForm="ngForm"), then access the state using myForm.form.valid.

The ng-valid and ng-invalid CSS classes can be used to style the form controls based on their state.

## Reactive form
Reactive forms are more effective to build larger forms, as the form is controlled by the class.

To create a reactive form:

- Import the ReactiveFormsModule and FormControl
- Then declare your form controls, like: color = new FormControl('red');
- Connect the control in the template
  ```HTML
  <input type="text" [formControl] = "color" />
  ```
- Access the value of the form control: color.value

### Form group
To group form controls, use the FormGroup constructor and pass it your form controls as name:constructor pair.

Then use the [formGroup] directive to bind it to your form.

To create validations, use the Validators class and pass it to your form control constructors, as the second parameter.

## ⭐ Router

Now you know how to create an app with routing! Here are the steps:

- Import the RouterModule from @angular/router
- Define the routes configuration array, in the format path: 'string', component: component class
- Launch the app with the routes config, using providers: [provideRouter(routes)]
- Define the links where applicable using the routerLink attribute.
- Use the <router-outlet /> element to display the component that corresponds to the path
- The Angular Router provides all the necessary methods to set up your app navigation
- You can set the default path using an empty set of quotes ''
- Page titles are set using the title property
- You can use a wildcard path ** for all URLs that are not matched
- The order of the paths matters, as the router starts checking from the first URL and stops when a match is found
- You can use the navigateByUrl() method of the router to navigate to a path programmatically
