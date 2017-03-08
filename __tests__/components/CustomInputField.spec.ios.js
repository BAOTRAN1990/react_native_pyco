// Link.react-test.js
import React from 'react';
import InputFieldComponent from 'src/components/CustomInputField.ios.js';
import renderer from 'react-test-renderer';

import constVar from 'src/const/constant';

it('Test name input field', (done) => {
  const component = renderer.create(
    <InputFieldComponent 
        placeholder='User name'
        imageIcon={require('assets/images/user_name.png')}
        secureTextEntry={false} placeholderTextColor={constVar.colors.WHITE}
        onChangeText={(userName) => this.setState({userName})}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  done();
});