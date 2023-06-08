#include <LiquidCrystal.h>

#define LED_VERDE 2
#define LED_AMARELO 3
#define LED_VERMELHO 4
#define NUM_LEDS 3
#define BUZZER 13
#define	SENSOR_TEMP A2

//Cria uma variável do tipo LiquidCrystal para manipulação do LCD
LiquidCrystal telinha(6, 7, 8, 9, 10, 11);

//Lista dos LEDs
const char LED_LIST[NUM_LEDS] = {LED_VERDE, LED_AMARELO, LED_VERMELHO};

//Protótipo da função para atualizar o sistema de acordo com a temperatura 
void atualizaSistema(void);

void setup()
{
	telinha.begin(16, 2);	//Inicializa o LCD
  
  	//Configuração dos pinos:
  	for(char i = 0; i < NUM_LEDS; i++) pinMode(LED_LIST[i], OUTPUT);	
  	pinMode(BUZZER, OUTPUT);
  	pinMode(SENSOR_TEMP, INPUT);
  
  	//Escreve a temperatura no LCD
	telinha.print("Temperatura ");
  
}

int temp = -50, tempAnterior;

void loop(){  	
  	tempAnterior = temp;
    
    //Atribue a temperatura já convertida em °C 
  	temp = ((analogRead(SENSOR_TEMP)-20)*0.4881656805)-40;
    
  	//Só atualiza se a temperatura mudou
  	if(temp != tempAnterior){
      atualizaSistema(temp);
    }
  
  	delay(10);	//Delay de 10ms adicionado para não sobrecarregar o simulador
}

void atualizaSistema(int temp){
 /* Ctrl_LED[0] Controlará o estado do LED_VERDE
    Ctrl_LED[1] Controlará o estado do LED_AMARELO
    Ctrl_LED[2] Controlará o estado do LED_VERMELHO */
  	char Ctrl_LED[NUM_LEDS] = {LOW, LOW, LOW};	//Inicializa o array de controle dos LEDs
  
  	//imprime valor temperatura
  	telinha.setCursor(12,0);
    telinha.print("    "); //clear
  	telinha.setCursor(12,0);
    telinha.print(temp);
  	
  	//linha para imprimir o estado
    telinha.setCursor(0,1);
  
  	//Tomada de decição apartir do valor da temperatura
    if (temp <= 0){
      	Ctrl_LED[0] = HIGH;
      	telinha.print("               ");
      	noTone(BUZZER);
    }
    if (temp > 0 && temp < 5){
        Ctrl_LED[1] = HIGH;	
    	telinha.print("Estado Moderado");
      	noTone(BUZZER);
    }
    if (temp >= 5){
      	Ctrl_LED[2] = HIGH;
    	telinha.print("Estado Critico ");
      	tone(BUZZER, 0.5);
  	}	
      
  	//Atualiza o estado dos LEDs
  	for(char i = 0; i < NUM_LEDS; i++)	digitalWrite(LED_LIST[i], Ctrl_LED[i]);
}