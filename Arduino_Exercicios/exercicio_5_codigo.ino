// dados para LCD:
// lcd.setCursor(0, 0); --> coloca o cursor na (coluna 0, linha 0)

#include <LiquidCrystal.h>
#define IR 9
#define led 10

LiquidCrystal lcd(12, 11, 5, 4, 3, 2); 
  
void setup()
{ 
  Serial.begin(9600);
  lcd.begin(16, 2); //inicia lcd
  
  //imprimindo Objeto no Lcd
  lcd.setCursor(0,0);
  lcd.print("Objeto");
  
  pinMode(IR, INPUT);
  pinMode(led, OUTPUT);
  
}

void loop()
{ 
  
  bool val = digitalRead(IR);
  
  digitalWrite(led, val);
  
  String txt = val ? "detectado    " : "nao detectado";
  
  lcd.setCursor(0,1);//colocando lcd segunda 
  lcd.print(txt);
  
  Serial.println("Objeto "+txt);
  
} 