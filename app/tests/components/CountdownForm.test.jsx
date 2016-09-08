var expect =require('expect');
var React =require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils =require('react-addons-test-utils');

var CountdownForm=require('CountdownForm');

describe('CountdownForm',() => {

  it('CountdownForm Should Exist',()=>{
    expect(CountdownForm).toExist();

  });

  it('should call onSetCountdown if valid second entered',()=>{
   var spy = expect.createSpy();
   var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
   var $el=$(ReactDOM.findDOMNode(countdownForm));
   countdownForm.refs.seconds.value='109';
   TestUtils.Simulate.submit($el.find('form')[0]);
   expect(spy).toHaveBeenCalledWith(109);

  });

  it('should not call onSetCountdown if invalid second entered',()=>{
   var spy = expect.createSpy();
   var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
   var $el=$(ReactDOM.findDOMNode(countdownForm));
   countdownForm.refs.seconds.value='109b';
   TestUtils.Simulate.submit($el.find('form')[0]);
   expect(spy).toNotHaveBeenCalled(109);

  });
});
