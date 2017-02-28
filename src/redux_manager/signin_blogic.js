import {logInRequestSuccess, logInRequestFailed, logInRequestSuccessAsync} from './signin_action_creator'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Alert
} from 'react-native';

// sample user info
const userInfo = {
	trainee_id: 1,
	full_name: 'test',
	email: 'test@gmail.com',
	birthday: '1986-01-20',
	token: 'abcxyzwendsjkfjdsklfjkds'
};

export default function login(userCredentials) {
	if (userCredentials.username === 'Test' && userCredentials.password === '123') {
		return logInRequestSuccessAsync(userInfo);
	} else {
		return logInRequestFailed({message: 'Invalid user.'});
	}
}