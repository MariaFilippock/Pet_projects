// import taskListReducer from "./task-list-reducer";
//
// let Store = {
//     _state: {
//         tasks: [
//         ],
//         taskText: '',
//     },
//     getState() {
//         return this._state;
//     },
//     callSubscriber() {
//         console.log('State changed');
//     },
//     subscribe(observer) {
//         this.callSubscriber = observer;
//     },
//     dispatch(action) {
//         this._state = taskListReducer(this._state, action);
//         this.callSubscriber();
//     }
// }
//
//
// export default Store;