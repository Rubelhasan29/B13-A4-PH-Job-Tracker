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

