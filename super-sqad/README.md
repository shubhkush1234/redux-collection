super squad is a redux application.

first create data, then reducer then store

action.js

actionjs file contains action creators. these are uppercase string values.

actions are series of functions.

infact they're called action creators that return actions, which actually be js object with the "type" property. they also contain some relavent data.

```
export function addCharacterById(id){
    const action = {
        type: ADD_CHARACTER,
        id
    }
```

We now have a better sense of how actions will modify aur reducers.

```
switch(action.type){

        case ADD_CHARACTER:
            let Characters = state.filter(item => item.id !== action.id);
            return Characters;

        default:
            return state;
    }

```

subscribe is an event listener which fires whenever the store gets updated.

whatever is present in the "store", it will be available as "state" to the component.

mapStateToProps::

Its a function that takes redux state and map it to props object within our component.
That way what ever we have returned from the redux state will then become accessible to the component via props.

It gives us our actual state from redux (store) as props on our component.

mapDispatchToProps ::

It binds action creators to the props in our component so that our component can call action creators, activate reducer and update the store.

