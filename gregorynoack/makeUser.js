var systemLog = {};
var makeUser = (function(){
  var privateUser = function(name,pwd) {
    function returnName(){
      return name;
    };
    var userName = {
      name:returnName, 
      validate:function validate(str){
          var hiddenPW = {pass:pwd};
          if(str == pwd){return true}else{return false}
        },
      record:function record(message){
        if(message == 'string' || message != undefined){
          systemLog[name] = [];
          systemLog[name].push(systemLog[name][message]);
          return true;
        }else{
          return false;
        }
      },
    };
  return userName;
  userName.returnName(name);
  userName.validate(str);
  userName.record(message);
  };
return privateUser;

})();
var user = makeUser('greg', 'test');
var user1 = makeUser('notGreg', 'pass');
user.name();
user.validate('test');
user.record('hello world');
user1.record('hello underworld');
user1.record('hello underworld');
user1.record('hello adsf');
user1.record();