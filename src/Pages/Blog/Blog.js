import React from 'react';

const Blog = () => {
   
    return (
        <div>
           <div className='w-10/12 mx-auto py-5 md:grid grid-cols-2'>
            <div className='bg-slate-300 p-5 mr-5 rounded-md my-5'>
            <h2 className='text-2xl text-green-600 shadow shadow-green-700/40 mb-5'>What are the different ways to manage a state in a React application?</h2>
            <p>React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, useReducerHook, MobX, and the built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers' expertise.
            </p>
            </div>
           <div className='bg-slate-300 p-5 mr-5 rounded-md my-5'>
           <h2 className='text-2xl text-green-600 shadow shadow-green-700/40 mb-5'> How does prototypical inheritance work?</h2>
            <p>Prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
           </div>
            <div className='bg-slate-300 p-5 mr-5 rounded-md my-5'>
            <h2 className='text-2xl text-green-600 shadow shadow-green-700/40 mb-5'>What is a unit test? Why should we write unit tests?</h2>
            <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process,because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.Unit tests save time and money.Well-written unit tests act as documentation for your code.It simplifies the debugging process.
            Unit testing is an integral part of extreme programming</p>
            </div>
            <div className='bg-slate-300 p-5 mr-5 rounded-md my-5'>
            <h2 className='text-2xl text-green-600 shadow shadow-green-700/40 mb-5'>React vs. Angular vs. Vue?</h2>
            <p>Angular js has two way data binding where react has one way and vue has two way.Angular is written in TypeScript, which means you need some time to learn it to work with this framework.

React uses JSX and native Javascript developers are familiar with it. The training period is easier and does not require that much preparation.

Vue.js makes use of an HTML-based template syntax that allows you to link the displayed DOM to the data of the base element instance declaratively</p>
            </div>
        </div>
        </div>
    );
};

export default Blog;