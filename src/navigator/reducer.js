import { ActionConst, Reducer } from 'react-native-router-flux';

export default function (params) {
    const defaultReducer = new Reducer(params);

    return (state, action) => {

        console.log('ACTION:', action);
        return defaultReducer(state, action);
    };
};