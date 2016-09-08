var React =require('react');
var ReactDOM = require('react-dom');
var expect =require('expect');
var $ = require('jQuery');
var TestUtils =require('react-addons-test-utils');

var Countdown=require('Countdown');

describe('Countdown',() => {
  it('Countdown should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown',() => {
    it('shuld set state to started and countdown',(done) =>{
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countDownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      },1001);
    });

    it('shuld never set count less than zero',(done) =>{
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);


      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      },3001);
    });

  });
});
