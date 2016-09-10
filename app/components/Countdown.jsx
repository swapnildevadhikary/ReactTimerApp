var React=require('react');
var Clock=require('Clock');
var CountdownForm=require('CountdownForm');
var Controls = require('Controls');

var Countdown=React.createClass({
  getInitialState:function(){
    return {
      count:0,
      countDownStatus:'stopped'
    };
  },
  componentDidUpdate:function(prevProps,prevState){
    if(this.state.countDownStatus !== prevState.countDownStatus){
      switch(this.state.countDownStatus){
        case 'started' :
             this.startTimer();
             break;
        case 'stopped' :
             this.setState({count:0});
        case 'paused' :
             clearInterval(this.Timer);
             this.Timer = undefined;
             break;
      }
    }
  },

  componentWillUnmount : function(){
    clearInterval(this.Timer);
    this.Timer = undefined;
  },
  startTimer:function(){
    this.Timer = setInterval(()  => {
      var newCount = this.state.count - 1 ;
      this.setState({
        count : newCount >= 0 ? newCount : 0
      });
      if(newCount === 0){
        this.setState({countDownStatus: 'stopped'});
      }

    },1000);
  },
  handleSetCountdown:function(seconds){
    this.setState({
      count:seconds,
      countDownStatus:'started'
    });
  },
  handleStatusChange : function(newStatus){
    this.setState({countDownStatus:newStatus});
  },
  render:function(){
    var {count,countDownStatus}=this.state;
    var renderControlArea = () =>{
      if(countDownStatus !== 'stopped'){
        return <Controls countDownStatus={countDownStatus} onStatusChange={this.handleStatusChange}/>
      }else{
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    };
    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
      )
  }
});

module.exports=Countdown;
