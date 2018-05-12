# Asynchronous Redux Actions, not only change store of redux but also firebase

!!components not connected with firebase!!
firebase functions will live in the actions related file (actions/expenses for connecting the expenses to the db)

normal beheviour :
//component calls action generator
//action generator return object
//component dispatches object
//redux store changes

dispatch function instead of object to do something else except of change store , like changing the data base, this is why we need trunk.
//component calls action generator
//action generator return function
//component dispaches function (?) -- need trunk
//function runs (has the ability to dispatch other actions and do whatever it wants)



