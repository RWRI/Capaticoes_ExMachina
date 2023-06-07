#include <Servo.h>

#define POTENCIOMETRO A2
#define SERVO 10

Servo servo;

void setup()
{  
  servo.attach(SERVO);
}

void loop()
{
  int angulo = analogRead(POTENCIOMETRO);
  angulo = map(angulo,0,1023,0,180);
  servo.write(angulo);
}