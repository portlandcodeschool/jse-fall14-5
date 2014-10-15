
var makeUser = (function(){
  var systemLog = {};
  var privateUser = function(name,pwd) {
    function returnName(){
      return name;
    };
    
    var userName = {
      name:returnName, 
      validate:function(str){
          var hiddenPW = {pass:pwd};
          if(str == pwd){return true}else{return false}
        },
      record:function(message){
        if(message == 'string' || message != undefined){
          if(typeof systemLog[name] != "object"){
            systemLog[name] = [];
            systemLog[name].push(message);
            return true;
          }else{
            systemLog[name].push(message);
            return true;
          }
          
        }else{
          return false;
        }
      },
      getLog:function(username){
        var x =""
        if(username == undefined){
          var i = 1;
          for(var key in systemLog){
              key += ":" + "\n "+systemLog[key][i];
              console.log(key);
              i++;
            }
        }else{
          for(var i = 0; i < systemLog[username].length; i++){
            x += username+":" + "\n "+systemLog[username][i];
            console.log(x);
          }
        }
        return x;
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

var userLog = makeUser().getLog('notGreg')
//var fullLog = makeUser().getLog()





