## Component Communication

In this lesson we will talk about advanced topics regarding angular components. 
We will talk how components communicate in an angular app.

### Lesson Plan
- data from class to template
- from template to class
- @Input to child component
- DoCheck, OnChanges, OnInit
- @Output
- communication with services
- Template Reference Variable
- @ViewChild
- AfterViewInit, AfterViewChecked
- Transclusion
- @ContentChild
- AfterContentInit, AfterContentChecked
- OnDestroy
- encapsulation

### Student EX

The pyramid of communication. 
You will have to create the following pyramid:
- AppComponent
- Child1, Child2
- Grand1, Grand2

child1 and child2 will be placed in the app component template. 
Grand1 will be placed in child1 through transclusion. 
Grand2 will be placed in the child2 template and the instance will be grabbed in child2 and a method will be called to get a string from grand2. 
App component will pass message input to child 1 and child1 will display that message.
Child2 will emit an output event that happens every interval of 1 second with a counter. AppComponent will print that counter. 
Grand1 and Grand2 will communicate with a service that will pass string data between them which every one of them can alter and send the other. 
child1 will print with content child a property from the grand1