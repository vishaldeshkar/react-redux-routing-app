// import { createStore } from "redux";
// import rootReducer from "../reducers/rootReducer";

// export default function configureStore(preloadedState) {
//     return createStore(
//         rootReducer,
//         preloadedState,
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );
// }

// // 2. Thunk middleware
// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "../reducers/rootReducer";
// import thunk from 'redux-thunk';

// export default function configureStore(preloadedState) {
//     return createStore(
//         rootReducer,
//         preloadedState,
//         applyMiddleware(thunk)
//     );
// }

// 3. Thunk middleware with Dev Tools
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import rootReducer from "../reducers/rootReducer";

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk))
    );
}