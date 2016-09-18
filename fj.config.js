/**
 * Created by crystal on 16/9/18.
 */

module.exports=function(config){
  //define multi rules
  //the later rule will override the before rule
  config.rules=[{
        url:'/^\/api\/(.*)$/',
        rewrite:'$1',
        proxy:'http://localhost:5080/BookForumApi/',
        cookie:{
          path:'api',
          domain:'localhost'
        },
    delay:500},
  {
    url:'^/api/readers' ,
      delay:0
  }];

  //custom middware will prior to the default
  config.middlewares=[
    function(req,res,next){
      next();
  }
  ];

}
