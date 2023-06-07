#include <Servo.h>

#define SERVO1 11
#define SERVO2 10
#define SERVO3 9
#define SERVO4 6
#define SERVO5 5

Servo serv[5];

void setValues(int s1, int s2, int s3, int s4, int s5){
  serv[0].write(s1);
  serv[1].write(s2);
  serv[2].write(s3);
  serv[3].write(s4);
  serv[4].write(s5);
}

void setup()
{   
  serv[0].attach(SERVO1);
  serv[1].attach(SERVO2);
  serv[2].attach(SERVO3);
  serv[3].attach(SERVO4);
  serv[4].attach(SERVO5);
}

void loop()
{ 
  //fechando e abrindo a mão
  setValues(0,0,0,0,0);
  delay(1500);
  setValues(90,90,90,90,90);
  delay(1500);
  setValues(180,180,180,180,180);
  delay(1500);
  setValues(90,90,90,90,90);
  delay(1500); 
  setValues(0,0,0,0,0);
  delay(1500);
  
  //fazendo joinha
  setValues(180,180,180,180,0);
  delay(2000);
  
  //abrindo a mão
  setValues(0,0,0,0,0);
  delay(2000);
  
  //Expressão hang loose
  setValues(0,180,180,180,0);
  delay(4000);
}