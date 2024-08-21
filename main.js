console.clear();
let messages1 = [
  "Hello !!!",
  "Hi!",
  "Chuss!",
  "Good Morning!",
  "Good Night...",
  "Good day!",
  "Who are you?",
];
let messages2 = [
  "Why are you here?",
  "What is time now?",
  "When is you Birthday?",
  "Are you Still Sleeping?",
  "What is going on with you?",
];
let messages3 = [
  "I was waiting for you.",
  "I love you.",
  "I wish best for you.",
  "Hopefully, you will realize that what had you done.",
];
let index1 = Math.floor(Math.random() * messages1.length);
console.log(messages1[index1]);
let index2 = Math.floor(Math.random() * messages2.length);
console.log(messages2[index2]);
let index3 = Math.floor(Math.random() * messages3.length);
console.log(messages3[index3]);
