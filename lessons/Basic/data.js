//Dates in JavaScripts
// typeof Date is object

let  today = new Date();
console.log(today);
// let use some methods
console.log(today.toString());
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.getDate());

let search = new Date(2002,8,4);
console.log(search.toLocaleString("en-IN"));
console.log(search.getTime());

let time = Date.now()
console.log(time);

console.log(Math.floor(Date.now()/1000))

// methods of Date
/*1. getDate()
2. getDay()
3. getFullYear()
4. getHours()
5. getMilliseconds()
6. getMinutes()
7. getMonth()
8. getSeconds()
9. getTime()
10. getTimezoneOffset()
11. getUTCDate()
12. getUTCDay()
13. getUTCFullYear()
14. getUTCHours()
15. getUTCMilliseconds()
16. getUTCMinutes()
17. getUTCMonth()
18. getUTCSeconds()
19. setDate()
20. setFullYear()
21. setHours()
22. setMilliseconds()
23. setMinutes()
24. setMonth()
25. setSeconds()
26. setTime()
27. setUTCDate()
28. setUTCFullYear()
29. setUTCHours()
30. setUTCMilliseconds()
31. setUTCMinutes()
32. setUTCMonth()
33. setUTCSeconds()
34. toDateString()
35. toISOString()
36. toJSON()
37. toLocaleDateString()
38. toLocaleString()
39. toLocaleTimeString()
40. toString()
41. toTimeString()
42. toUTCString()
*/