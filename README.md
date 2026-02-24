1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans :- 

(A) getElementById("ID")

. Selects one elements by its unique ID
. Returns a single element, not a list 
. Fastest method
. Select ID only


(B) getElementsByClassName()

. Select all elements with a specific class name
. Returns an HTMLCollection (array-like)
. Must use index to get specific element


(C) querySelector()

. Select the first elements that matches any css selector
. can use ID, Class, tag or complex selector


(d) querySelectorAll()

. Select all elements that matches any css selector
. Returns a NODEList, it can use loop using forEach 





2. How do you create and insert a new element into the DOM?

Ans :---

--> To create an Element, We use document.createElement()
. to create a Div 
    EX :- Let newDiv = Document..createElement("div");

--> To add content to the element

. We can add text with innerText or HTML with innerHTML
    Ex:- newDiv.innerText = "Hello World";




3. What is Event Bubbling? And how does it work?

Ans:- 
Event Bubbling means when you click a child elements, the event moves upward to its parent, than to grandparent, than to document.

Steps---
--> When you click on a small element inside a big --> element, the event first works on the small --> --> element,
--> then to body,
--> then to document.
----------> IT goes bottom to top.



4. What is Event Delegation in JavaScript? Why is it useful?

Ans:-
Event Delegation means adding one event listener to a parent instead of many child elements.

Instead of adding event to very child,
we add event to the parent
add use bubbling to detect which child was clicked.




5. What is the difference between preventDefault() and stopPropagation() methods?

PreventDefault() :-
stops the default behavior of an element.

It stops the browser's normal action.
Normally  when we click on a link the link allow us to go the link's address but if we use the PreventDefault() It stop go to the browser's 

stopPropagation():--

It stop event Bubbling

EX:- Document.getElementByID("child").addEventListener("click", function(event) {
    event.stopProgram();
    console.log("Button clicked);
})

OUTPUT:-- Button clicked

parent will not run.



