#define LED_AZUL 3
#define LED_VERDE 4
#define LED_VERM 5
#define SEN_TEMP A5

void setup(){
  pinMode(LED_AZUL, OUTPUT);
  pinMode(LED_VERDE, OUTPUT);
  pinMode(LED_VERM, OUTPUT);
  //Serial.begin(9600);
}

void loop(){
  int temp = 0;
  
  temp = analogRead(SEN_TEMP);
  temp = map(temp, 20, 358, -40, 120);
  
  //Serial.println(temp);
  
  //acendendo led azul para temp < 10
  if(temp < 10) 
    digitalWrite(LED_AZUL, HIGH);
  else
  	digitalWrite(LED_AZUL, LOW);
  
  //acendendo led verde para temp [10,30)
  if((temp >= 10)&&(temp < 30))
 	 digitalWrite(LED_VERDE, HIGH);
  else
  	digitalWrite(LED_VERDE, LOW);
  
  //acendendo led vermelho para temp >= 30
  if(temp >= 30)
  	digitalWrite(LED_VERM, HIGH);
  else
  	digitalWrite(LED_VERM, LOW);

}
