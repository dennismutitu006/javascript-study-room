Skip to main content
Skip to search
Skip to select language

OPEN MAIN MENU

Standard built-in objects
Set


Filter sidebar
Filter
In this article
Description
Constructor
Static properties
Instance properties
Instance methods
Examples
Specifications
Browser compatibility
See also
Standard built-in objects
Set
Constructor
Set() constructor
Static properties
Set[@@species]
Instance methods
Set.prototype[@@iterator]()
Set.prototype.add()
Set.prototype.clear()
Set.prototype.delete()
Set.prototype.difference()
Set.prototype.entries()
Set.prototype.forEach()
Set.prototype.has()
Set.prototype.intersection()
Set.prototype.isDisjointFrom()
Set.prototype.isSubsetOf()
Set.prototype.isSupersetOf()
Set.prototype.keys()
Set.prototype.symmetricDifference()
Set.prototype.union()
Set.prototype.values()
Instance properties
Set.prototype.size
Inheritance
Object/Function
Static methods
Static properties
Instance methods
Instance properties
Set
Baseline Widely available
The Set object lets you store unique values of any type, whether primitive values or object references.

Description
Set objects are collections of values. A value in the set may only occur once; it is unique in the set's collection. You can iterate through the elements of a set in insertion order. The insertion order corresponds to the order in which each element was inserted into the set by the add() method successfully (that is, there wasn't an identical element already in the set when add() was called).

The specification requires sets to be implemented "that, on average, provide access times that are sublinear on the number of elements in the collection". Therefore, it could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N).

Value equality
Value equality is based on the SameValueZero algorithm. (It used to use SameValue, which treated 0 and -0 as different. Check browser compatibility.) This means NaN is considered the same as NaN (even though NaN !== NaN) and all other values are considered equal according to the semantics of the === operator.

Performance
The has method checks if a value is in the set, using an approach that is, on average, quicker than testing most of the elements that have previously been added to the set. In particular, it is, on average, faster than the Array.prototype.includes method when an array has a length equal to a set's size.

Set composition
The Set object provides some methods that allow you to compose sets like you would with mathematical operations. These methods include:

Method	Return type	Mathematical equivalent	Venn diagram
A.difference(B)	Set	
𝐴
∖
𝐵
A Venn diagram where two circles overlap. The difference of A and B is the part of A that is not overlapping B.
A.intersection(B)	Set	
𝐴
∩
𝐵
A Venn diagram where two circles overlap. The intersection of A and B is the part where they overlap.
A.symmetricDifference(B)	Set	
(
𝐴
∖
𝐵
)
∪
(
𝐵
∖
𝐴
)
A Venn diagram where two circles overlap. The symmetric difference of A and B is the region contained by either circle but not both.
A.union(B)	Set	
𝐴
∪
𝐵
A Venn diagram where two circles overlap. The symmetric difference of A and B is the region contained by either or both circles.
A.isDisjointFrom(B)	Boolean	
𝐴
∩
𝐵
=
∅
A Venn diagram with two circles. A and B are disjoint because the circles have no region of overlap.
A.isSubsetOf(B)	Boolean	
𝐴
⊆
𝐵
A Venn diragram with two circles. A is a subset of B because A is completely contained in B.
A.isSupersetOf(B)	Boolean	
𝐴
⊇
𝐵
A Venn diagram with two circles. A is a superset of B because B is completely contained in A.
To make them more generalizable, these methods don't just accept Set objects, but anything that's set-like.

Set-like objects
All set composition methods require this to be an actual Set instance, but their arguments just need to be set-like. A set-like object is an object that provides the following:

A size property that contains a number.
A has() method that takes an element and returns a boolean.
A keys() method that returns an iterator of the elements in the set.
For example, Map objects are set-like because they also have size, has(), and keys(), so they behave just like sets of keys when used in set methods:

JS
Copy to Clipboard
const a = new Set([1, 2, 3]);
const b = new Map([
  [1, "one"],
  [2, "two"],
  [4, "four"],
]);
console.log(a.union(b)); // Set(4) {1, 2, 3, 4}
Note: The set-like protocol invokes the keys() method instead of [@@iterator]() to produce elements. This is to make maps valid set-like objects, because for maps, the iterator produces entries but the has() method takes keys.

Arrays are not set-like because they don't have a has() method or the size property, and their keys() method produces indices instead of elements. WeakSet objects are also not set-like because they don't have a keys() method.

Set-like browser APIs
Browser Set-like objects (or "setlike objects") are Web API interfaces that behave in many ways like a Set.

Just like Set, elements can be iterated in the same order that they were added to the object. Set-like objects and Set also have properties and methods that share the same name and behavior. However unlike Set they only allow a specific predefined type for each entry.

The allowed types are set in the specification IDL definition. For example, GPUSupportedFeatures is a Set-like object that must use strings as the key/value. This is defined in the specification IDL below:

WEBIDL
Copy to Clipboard
interface GPUSupportedFeatures {
  readonly setlike<DOMString>;
};
Set-like objects are either read-only or read-writable (see the readonly keyword in the IDL above).

Read-only Set-like objects have the property size, and the methods: entries(), forEach(), has(), keys(), values(), and @@iterator.
Writeable Set-like objects additionally have the methods: clear(), delete(), and add().
The methods and properties have the same behavior as the equivalent entities in Set, except for the restriction on the types of the entry.

The following are examples of read-only Set-like browser objects:

GPUSupportedFeatures
XRAnchorSet
The following are examples of writable Set-like browser objects:

CustomStateSet
FontFaceSet
Highlight
Constructor
Set()
Creates a new Set object.

Static properties
Set[@@species]
The constructor function that is used to create derived objects.

Instance properties
These properties are defined on Set.prototype and shared by all Set instances.

Set.prototype.constructor
The constructor function that created the instance object. For Set instances, the initial value is the Set constructor.

Set.prototype.size
Returns the number of values in the Set object.

Set.prototype[@@toStringTag]
The initial value of the @@toStringTag property is the string "Set". This property is used in Object.prototype.toString().

Instance methods
Set.prototype.add()
Inserts a new element with a specified value in to a Set object, if there isn't an element with the same value already in the Set.

Set.prototype.clear()
Removes all elements from the Set object.

Set.prototype.delete()
Removes the element associated to the value and returns a boolean asserting whether an element was successfully removed or not. Set.prototype.has(value) will return false afterwards.

Set.prototype.difference()
Takes a set and returns a new set containing elements in this set but not in the given set.

Set.prototype.entries()
Returns a new iterator object that contains an array of [value, value] for each element in the Set object, in insertion order. This is similar to the Map object, so that each entry's key is the same as its value for a Set.

Set.prototype.forEach()
Calls callbackFn once for each value present in the Set object, in insertion order. If a thisArg parameter is provided, it will be used as the this value for each invocation of callbackFn.

Set.prototype.has()
Returns a boolean asserting whether an element is present with the given value in the Set object or not.

Set.prototype.intersection()
Takes a set and returns a new set containing elements in both this set and the given set.

Set.prototype.isDisjointFrom()
Takes a set and returns a boolean indicating if this set has no elements in common with the given set.

Set.prototype.isSubsetOf()
Takes a set and returns a boolean indicating if all elements of this set are in the given set.

Set.prototype.isSupersetOf()
Takes a set and returns a boolean indicating if all elements of the given set are in this set.

Set.prototype.keys()
An alias for Set.prototype.values().

Set.prototype.symmetricDifference()
Takes a set and returns a new set containing elements which are in either this set or the given set, but not in both.

Set.prototype.union()
Takes a set and returns a new set containing elements which are in either or both of this set and the given set.

Set.prototype.values()
Returns a new iterator object that yields the values for each element in the Set object in insertion order.

Set.prototype[@@iterator]()
Returns a new iterator object that yields the values for each element in the Set object in insertion order.

Examples
Using the Set object
JS
Copy to Clipboard
const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

mySet1.has(1); // true
mySet1.has(3); // false, since 3 has not been added to the set
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has("Some Text".toLowerCase()); // true
mySet1.has(o); // true

mySet1.size; // 5

mySet1.delete(5); // removes 5 from the set
mySet1.has(5); // false, 5 has been removed

mySet1.size; // 4, since we just removed one value

mySet1.add(5); // Set(5) { 1, 'some text', {...}, {...}, 5 } - a previously deleted item will be added as a new item, it will not retain its original position before deletion

console.log(mySet1); // Set(5) { 1, "some text", {…}, {…}, 5 }
Iterating sets
The iteration over a set visits elements in insertion order.

JS
Copy to Clipboard
for (const item of mySet1) {
  console.log(item);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

for (const item of mySet1.keys()) {
  console.log(item);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

for (const item of mySet1.values()) {
  console.log(item);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// key and value are the same here
for (const [key, value] of mySet1.entries()) {
  console.log(key);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// Convert Set object to an Array object, with Array.from
const myArr = Array.from(mySet1); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}, 5]

// the following will also work if run in an HTML document
mySet1.add(document.body);
mySet1.has(document.querySelector("body")); // true

// converting between Set and Array
const mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2.size); // 4
console.log([...mySet2]); // [1, 2, 3, 4]

// intersect can be simulated via
const intersection = new Set([...mySet1].filter((x) => mySet2.has(x)));

// difference can be simulated via
const difference = new Set([...mySet1].filter((x) => !mySet2.has(x)));

// Iterate set entries with forEach()
mySet2.forEach((value) => {
  console.log(value);
});
// 1
// 2
// 3
// 4
Implementing basic set operations
JS
Copy to Clipboard
function isSuperset(set, subset) {
  for (const elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

function union(setA, setB) {
  const _union = new Set(setA);
  for (const elem of setB) {
    _union.add(elem);
  }
  return _union;
}

function intersection(setA, setB) {
  const _intersection = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

function symmetricDifference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}

function difference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

// Examples
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // returns true
union(setA, setC); // returns Set {1, 2, 3, 4, 5, 6}
intersection(setA, setC); // returns Set {3, 4}
symmetricDifference(setA, setC); // returns Set {1, 2, 5, 6}
difference(setA, setC); // returns Set {1, 2}
Relation to arrays
JS
Copy to Clipboard
const myArray = ["value1", "value2", "value3"];

// Use the regular Set constructor to transform an Array into a Set
const mySet = new Set(myArray);

mySet.has("value1"); // returns true

// Use the spread syntax to transform a set into an Array.
console.log([...mySet]); // Will show you exactly the same Array as myArray
Remove duplicate elements from an array
JS
Copy to Clipboard
// Use to remove duplicate elements from an array
const numbers = [2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5];

console.log([...new Set(numbers)]); // [2, 13, 4, 5, 6, 7, 32]
Relation to strings
JS
Copy to Clipboard
// Case sensitive (set will contain "F" and "f")
new Set("Firefox"); // Set(7) [ "F", "i", "r", "e", "f", "o", "x" ]

// Duplicate omission ("f" occurs twice in the string but set will contain only one)
new Set("firefox"); // Set(6) [ "f", "i", "r", "e", "o", "x" ]
Use a set to ensure the uniqueness of a list of values
JS
Copy to Clipboard
const array = Array.from(document.querySelectorAll("[id]")).map((e) => e.id);

const set = new Set(array);
console.assert(set.size === array.length);
Specifications
Specification
ECMAScript Language Specification
# sec-set-objects
Browser compatibility
Report problems with this compatibility data on GitHub
desktop	mobile	server
Chrome
Edge
Firefox
Opera
Safari
Chrome Android
Firefox for Android
Opera Android
Safari on iOS
Samsung Internet
WebView Android
Deno
Node.js
Set

38
Toggle history	
12
Toggle history	
13
Toggle history	
25
Toggle history	
8
Toggle history	
38
Toggle history	
14
Toggle history	
25
Toggle history	
8
Toggle history	
3.0
Toggle history	
38
Toggle history	
1.0
Toggle history	
0.12.0
Toggle history
@@iterator

43
Toggle history	
12
Toggle history	
36
more
Toggle history	
30
Toggle history	
9
Toggle history	
43
Toggle history	
36
more
Toggle history	
30
Toggle history	
9
Toggle history	
4.0
Toggle history	
43
Toggle history	
1.0
Toggle history	
0.12.0
Toggle history
@@species

51
Toggle history	
13
Toggle history	
41
Toggle history	
38
Toggle history	
10
Toggle history	
51
Toggle history	
41
Toggle history	
41
Toggle history	
10
Toggle history	
5.0
Toggle history	
51
Toggle history	
1.0
Toggle history	
6.5.0
Toggle history
Set() constructor

38
Toggle history	
12
Toggle history	
13
Toggle history	
25
Toggle history	
8
Toggle history	
38
Toggle history	
14
Toggle history	
25
Toggle history	
8
Toggle history	
3.0
Toggle history	
38
Toggle history	
1.0
Toggle history	
0.12.0
Toggle history
new Set(iterable)

38
Toggle history	
12
Toggle history	
13
Toggle history	
25
Toggle history	
9
Toggle history	
38
Toggle history	
14
Toggle history	
25
Toggle history	
9
Toggle history	
3.0
Toggle history	
38
Toggle history	
1.0
Toggle history	
0.12.0
Toggle history
new Set(null)

38
Toggle history	
12
Toggle history	
37
Toggle history	
25
Toggle history	
9
Toggle history	
38
Toggle history	
37
Toggle history	
25
Toggle history	
9
Toggle history	
3.0
Toggle history	
38
Toggle history	
1.0
Toggle history	
0.12.0
Toggle history
add

38
Toggle history	
12
Toggle history	
13
Toggle history	
25
Toggle history	
8
Toggle history	
38
Toggle history	
14
Toggle history	
25
Toggle history	
8
Toggle history	
3.0
Toggle history	
38
Toggle history	
1.0
Toggle history	
0.12.0
Toggle history
clear

38
Toggle history	
12
Toggle history	
19
Toggle history	
25
Toggle history	
8
Toggle history	
38
Toggle history	
19
Toggle history	
25
Toggle history	
8
Toggle history	
3.0
Toggle history	
38
Toggle history	
1.0
Toggle history	
0.12.0
Toggle history
delete

38
Toggle history	
12
Toggle history	
13
Toggle history	
25
Toggle history	
8
Toggle history	
38
Toggle history	
14
Toggle history	
25
Toggle history	
8
Toggle history	
3.0
Toggle history	
38
Toggle history	
1.0
Toggle history	
0.12.0
Toggle history
difference

122
Toggle history	
122
Toggle history	
127
Toggle history	
108
Toggle history	
17
Toggle history	
122
Toggle history	
127
Toggle history	
81
Toggle history	
17
Toggle history	
No
Toggle history	
122
Toggle history	
1.42
Toggle history	
22.0.0
Toggle history
entries

38
Toggle history	
12
Toggle history	
24
Toggle history	
25
Toggle history	
8
Toggle history	
38
Toggle history	
24
Toggle history	
25
Toggle history	
8
Toggle history	
3.0
Toggle history	
38
Toggle history	
1.0
Toggle history	
0.12.0
Toggle history
forEach

38
Toggle history	
12
Toggle history	
25
Toggle history	
25
Toggle history	
8
Toggle history	
38
Toggle history	
25
Toggle history	
25
Toggle history	
8
Toggle history	
3.0
Toggle history	
38
Toggle history	
1.0
Toggle history	
0.12.0
Toggle history
has

38
Toggle history	
12
Toggle history	
13
Toggle history	
25
Toggle history	
8
Toggle history	
38
Toggle history	
14
Toggle history	
25
Toggle history	
8
Toggle history	
3.0
Toggle history	
38
Toggle history	
1.0
Toggle history	
0.12.0
Toggle history
intersection

122
Toggle history	
122
Toggle history	
127
Toggle history	
108
Toggle history	
17
Toggle history	
122
Toggle history	
127
Toggle history	
81
Toggle history	
17
Toggle history	
No
Toggle history	
122
Toggle history	
1.42
Toggle history	
22.0.0
Toggle history
isDisjointFrom

122
Toggle history	
122
Toggle history	
127
Toggle history	
108
Toggle history	
17
Toggle history	
122
Toggle history	
127
Toggle history	
81
Toggle history	
17
Toggle history	
No
Toggle history	
122
Toggle history	
1.42
Toggle history	
22.0.0
Toggle history
isSubsetOf

122
Toggle history	
122
Toggle history	
127
Toggle history	
108
Toggle history	
17
Toggle history	
122
Toggle history	
127
Toggle history	
81
Toggle history	
17
Toggle history	
No
Toggle history	
122
Toggle history	
1.42
Toggle history	
22.0.0
Toggle history
isSupersetOf

122
Toggle history	
122
Toggle history	
127
Toggle history	
108
Toggle history	
17
Toggle history	
122
Toggle history	
127
Toggle history	
81
Toggle history	
17
Toggle history	
No
Toggle history	
122
Toggle history	
1.42
Toggle history	
22.0.0
Toggle history
Key equality for -0 and 0

38
Toggle history	
12
Toggle history	
29
Toggle history	
25
Toggle history	
9
Toggle history	
38
Toggle history	
29
Toggle history	
25
Toggle history	
9
Toggle history	
3.0
Toggle history	
38
Toggle history	
1.0
Toggle history	
4.0.0
Toggle history
keys

38
Toggle history	
12
Toggle history	
24
Toggle history	
25
Toggle history	
8
Toggle history	
38
Toggle history	
24
Toggle history	
25
Toggle history	
8
Toggle history	
3.0
Toggle history	
38
Toggle history	
1.0
Toggle history	
0.12.0
Toggle history
size

38
Toggle history	
12
Toggle history	
19
footnote
Toggle history	
25
Toggle history	
8
Toggle history	
38
Toggle history	
19
footnote
Toggle history	
25
Toggle history	
8
Toggle history	
3.0
Toggle history	
38
Toggle history	
1.0
Toggle history	
0.12.0
Toggle history
symmetricDifference

122
Toggle history	
122
Toggle history	
127
Toggle history	
108
Toggle history	
17
Toggle history	
122
Toggle history	
127
Toggle history	
81
Toggle history	
17
Toggle history	
No
Toggle history	
122
Toggle history	
1.42
Toggle history	
22.0.0
Toggle history
union

122
Toggle history	
122
Toggle history	
127
Toggle history	
108
Toggle history	
17
Toggle history	
122
Toggle history	
127
Toggle history	
81
Toggle history	
17
Toggle history	
No
Toggle history	
122
Toggle history	
1.42
Toggle history	
22.0.0
Toggle history
values

38
Toggle history	
12
Toggle history	
24
Toggle history	
25
Toggle history	
8
Toggle history	
38
Toggle history	
24
Toggle history	
25
Toggle history	
8
Toggle history	
3.0
Toggle history	
38
Toggle history	
1.0
Toggle history	
0.12.0
Toggle history
Legend
Tip: you can click/tap on a cell for more information.

Full support
Full support
In development. Supported in a pre-release version.
In development. Supported in a pre-release version.
No support
No support
See implementation notes.
Uses a non-standard name.
Has more compatibility info.
See also
Polyfill of Set in core-js
Map
WeakMap
WeakSet
Help improve MDN

Was this page helpful to you?

Yes

No
Learn how to contribute.
This page was last modified on Jan 31, 2024 by MDN contributors.

View this page on GitHub • Report a problem with this content
Your blueprint for a better internet.

MDN on Mastodon
MDN on X (formerly Twitter)
MDN on GitHub
MDN Blog RSS Feed
MDN
About
Blog
Careers
Advertise with us
Support
Product help
Report an issue
Our communities
MDN Community
MDN Forum
MDN Chat
Developers
Web Technologies
Learn Web Development
MDN Plus
Hacks Blog
Website Privacy Notice
Cookies
Legal
Community Participation Guidelines
Visit Mozilla Corporation’s not-for-profit parent, the Mozilla Foundation.
Portions of this content are ©1998–2024 by individual mozilla.org contributors. Content available under a Creative Commons license.




