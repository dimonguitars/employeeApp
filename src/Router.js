import React from 'react';
import { Actions, Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';


const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar initial>
        <Scene key='auth' >
          <Scene key="login" component={LoginForm} title="PLease Login" />
        </Scene>
        <Scene key='main'>
          <Scene
          key="employeeList"
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          component={EmployeeList}
          title="Employee List"
          />
        </Scene>
        <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
        <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
