#include <Servo.h>

#define POT A2
#define SERVO 10

Servo serv;

void setup()
{
  //Serial.begin(9600);  
  serv.attach(SERVO);
}

void loop()
{
  int ang = analogRead(POT);
  //Serial.print(ang);
  //Serial.print(" - ");
  ang = map(ang,0,1023,0,180);
  serv.write(ang);
  //Serial.println(ang);                  
}