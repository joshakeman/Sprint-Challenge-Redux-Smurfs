1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Array.from(), map(), filter(). 
    We can use map to do that.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The store is used to hold all the important data that other components in the redux app may need. In order to make state changes predictable, you can only change the state in your redux store by dispatching actions. Those actions are taken in as arguments by a reducer along with the current state, and the reducer will return a new state based on whatever that action type is meant to do.
    The idea of the 'single source of truth' in redux is that all shared data is kept in this one source that can only be manipulated with the specific action -> dispatch -> reducer pattern.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is the type of state data that we are likely to want to share with other components throughout the app. Component state is for state data that isn't needed anywhere except the component it is used in. We've been using component state for forms, so you can track what's being typed in and create a new object that's sent along to the application state with an action. The state created by that form isn't needed anywhere else in the app, so it can be kept within the form component.

4.  What is middleware?

    Middleware is used in redux to add some extra features to our actions. In our case we used middleware so that we could use thunks in our actions, which were needed to make api calls to the server.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Typically action-creators have to return an action. Redux-thunks allow our action creators to return functions that then dispatch actions to the reducer.

6.  Which `react-redux` method links up our `components` with our `redux store`?

    connect()