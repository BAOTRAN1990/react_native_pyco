import {REQUEST, SUCCESS, FAILED} from './signin_action_creator';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Alert
} from 'react-native';

// Reducer
const INITIAL_STATE = {
    error: '',
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case REQUEST:
            return {
                loading: true,
                error: ''
            };
        case SUCCESS:
            return {
                loading: false,
                error: '',
                user: action.payload
            };
        case FAILED:
            return {
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}