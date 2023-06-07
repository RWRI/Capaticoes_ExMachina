#define LED_AZUL 3
#define LED_VERDE 4
#define LED_VERM 5

void setup(){
  pinMode(LED_AZUL, OUTPUT);
  pinMode(LED_VERDE, OUTPUT);
  pinMode(LED_VERM, OUTPUT);
}

void loop(){
  digitalWrite(LED_AZUL, HIGH);
  delay(1000);
  digitalWrite(LED_AZUL, LOW);
 
  digitalWrite(LED_VERDE, HIGH);
  delay(1000);
  digitalWrite(LED_VERDE, LOW);
  
  digitalWrite(LED_VERM, HIGH);
  delay(1000);
  digitalWrite(LED_VERM, LOW);

}
