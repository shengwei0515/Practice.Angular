# Practice.Angular

# NOTE
1. css + htlm + ts
2. generate component 
```
cd ../src/app/
ng generate component <component_name>
```

3. [ngModule] => a key word for two way finding

4. For 
```
<li *ngFor="let hero of heroes" >

```

5. css  attribute-binding
```
<li [class.selected]="hero === selectedHero" >
```
the html tag will be binded the attribute class.selected when the condiction match

6. Input
you can pass data from upper component by use @Input in ts like this
```
    @Input() hero?:Hero;
```
By declare a input attribute "hero", now you can use "hero" as a variable in template.
In the upper component, you can use  \[input_variable_name\]="value_to_pass" to bind data on it
```
    <app-hero-detail [hero]="selectedHero"></app-hero-detail>
```

if you use ngModel to set up two way binding, you will find that "selectedHero" will change when "hero" change
which means they are actuall same variable in the component.(call by reference?)