#include <LiquidCrystal.h>
#define IR 9
#define led 10

LiquidCrystal lcd(12, 11, 5, 4, 3, 2); 
  
void setup()
{ 
  Serial.begin(9600);
  lcd.begin(16, 2);
 
  lcd.setCursor(0,0);
  lcd.print("Objeto");
  
  pinMode(IR, INPUT);
  pinMode(led, OUTPUT);
  
}

void loop()
{ 
  
  bool presenca = digitalRead(IR);
  
  digitalWrite(led, presenca);
  
  String txt = presenca ? "detectado    " : "nao detectado";
  
  lcd.setCursor(0,1);
  lcd.print(txt);
  
  Serial.println("Objeto "+txt);
  
} 