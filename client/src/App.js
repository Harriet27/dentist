import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Welcome, Carousel } from './Pages';
import {
  TableList,
  MondayTable,
  TuesdayTable,
  WednesdayTable,
  ThursdayTable,
  FridayTable,
  SaturdayTable,
  SundayTable,
} from './Tables';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/welcome' component={Welcome} />
        <Route path='/carousel' component={Carousel} />
        <Route path='/list' component={TableList} />
        <Route path='/monday' component={MondayTable} />
        <Route path='/tuesday' component={TuesdayTable} />
        <Route path='/wednesday' component={WednesdayTable} />
        <Route path='/thursday' component={ThursdayTable} />
        <Route path='/friday' component={FridayTable} />
        <Route path='/saturday' component={SaturdayTable} />
        <Route path='/sunday' component={SundayTable} />
      </Switch>
    </div>
  );
};

export default App;
