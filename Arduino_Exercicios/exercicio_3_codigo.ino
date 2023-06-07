#include <Servo.h>

#define SERVO 10

Servo serv;

void setup()
{
  Serial.begin(9600);  
  serv.attach(SERVO);
  serv.write(180);
}

void loop()
{ 
  if(Serial.available()){
  	String s;
    int vs;
    
  	s = Serial.readString();
  	Serial.println(s);
    vs = serv.read();
    
    if(s == "ant")
      for(int i = 1; i <= 180;i++){
         if(vs+i > 180) break;
         serv.write(vs+i);
         delay(100);
      }
    else if(s == "hor")
      for(int i = 1; i <= 180;i++){
      	 if(vs-i < 0) break;
         serv.write(vs-i);
         delay(100);
      }
    else
      serv.write(90);  
  }
                   
}