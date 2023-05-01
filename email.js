const nodemailer=require('nodemailer');

var transporte=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'yourEmailId@gmail.com',
        pass:'yourPassword'
    }
});

var maiOptions={
    from:'yourEmailId@gmail.com',
    to:'yourfriendEmailID@gmail.com,yourOtherfriendEmailId@gmail.com',
    subject:'Sending mail using Node.js',
    html:'<h1>Hey..! Just Trying sending Email through Node.js</h1>',
    text:'That was easy !'
};
transporte.sendMail(maiOptions,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email Sent :'+info.response);
    }
});
