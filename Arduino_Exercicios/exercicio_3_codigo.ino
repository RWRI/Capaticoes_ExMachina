#include <Servo.h>

#define SERVO 10

Servo servo;

void setup()
{
  Serial.begin(9600);  
  servo.attach(SERVO);
  servo.write(180);
}

void loop()
{ 
  if(Serial.available()){
  	String input;
    int valorServo;
    
  	input = Serial.readString();
  	Serial.println(input);
    valorServo = servo.read();
    
    if(input == "ant")
      for(int i = 1; i <= 180;i++){
         if(valorServo+i > 180) break;
         servo.write(valorServo+i);
         delay(100);
      }
    else if(input == "hor")
      for(int i = 1; i <= 180;i++){
      	 if(valorServo-i < 0) break;
         servo.write(valorServo-i);
         delay(100);
      }
    else
      servo.write(90);  
  }
                   
}