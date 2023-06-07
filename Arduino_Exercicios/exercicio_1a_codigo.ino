#define LED_AZUL 3
#define LED_VERDE 4
#define LED_VERM 5

void setup(){
  pinMode(LED_AZUL, OUTPUT);
  pinMode(LED_VERDE, OUTPUT);
  pinMode(LED_VERM, OUTPUT);
}

void loop(){
  //acendendo led azul
  digitalWrite(LED_AZUL, HIGH);
  //mantendo aceso por 1 s
  delay(1000);
  //apagando led azul
  digitalWrite(LED_AZUL, LOW);
  
  //acendendo led verde
  digitalWrite(LED_VERDE, HIGH);
  //mantendo aceso por 1 s
  delay(1000);
  //apagando led verde
  digitalWrite(LED_VERDE, LOW);
  
  //acendendo led vermelho
  digitalWrite(LED_VERM, HIGH);
  //mantendo aceso por 1 s
  delay(1000);
  //apagando led vermelho
  digitalWrite(LED_VERM, LOW);

}
