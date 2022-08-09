---  
title: Come aggiungere la localizzazione (i18n) nelle applicazioni Ionic create con Angular  
tags:
- Front-end
- Ionic
- Angular
- i18n  
date: Agosto 2022  
image: blog-img/ionic-translate/post-image.png
---  
# Introduzione
In questa guida affronteremo il problema della localizzazione in una applicazione Ionic.  
Ionic è un tookit UI open source per la creazione di applicazioni per diversi ambienti utilizzando framework come React, Angular e Vue.  
Nello sviluppo di applicazioni, è spesso fondamentale avere la possibilità di supportare più lingue o locale diversi.

In questo articolo, *creeremo un nuovo progetto* con **Ionic 6** e **Angular**. In seguito, v*errà aggiunto il supporto alla localizzazione* tramite la libreria **ngx-translate**.  
Modificheremo infine il progetto per *avere automaticamente la stessa lingua del dispositivo dell'utente*, o in caso la lingua non sia supportata dalla nostra applicazione, *un locale di default* (inglese).


## Creazione del progetto Ionic
Innanzitutto, creiamo un nuovo progetto Ionic. Per farlo, è possibile utilizzare il comodo generatore fornito da Ionic qui, specificando come tecnologia Angular e la navigazione a tab, ed eventuali altre nostre preferenze:   [Ionic project generator](https://ionicframework.com/start#basics)
E' necessario collegare il proprio account Github o simili e verrà automaticamente creata la repository con il codice generato.

In alternativa, è possibile creare un progetto utilizzando il CLI.
```bash
    # Installare globalmente il CLI di ionic se non lo si era fatto prima
    npm  install  -g  @ionic/cli
    # Creiamo un nuovo progetto
    ionic start
    # Rispondiamo alle domande poste
    # Use the app creation wizard? No
    # Framework: Angular
    # Project name: sample
    # Starter template: tabs
```


Verifichiamo il funzionamento del progetto: entriamo nella cartella del progetto ed avviamolo:
```bash
    ionic serve
```

## Aggiungiamo il supporto i18n
Ora che abbiamo il nostro progetto, possiamo aggiungere il supporto alla localizzazione.
Per farlo, aggiungiamo la libreria **ngx-translate** al nostro progetto:

```bash
npm install @ngx-translate/core @ngx-translate/http-loader --save
```
Apriamo il progetto con il nostro editor di fiducia e importiamo il modulo nell'NgModule principale dell'applicazione (nel nostro caso contenuto nel file *src/app/app.module.ts*)
Il corpo del modulo (tralasciando gli import sopra), prima delle modifiche, si presenta così:
```ts
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
Modifichiamolo per aggiungere all'import il modulo TranslateModule. In aggiunta, andiamo a creare un custom TranslateLoader per cercare i nostri file di localizzazione dentro alla cartella *src/assets* invece che nella cartella *i18n/*, questo è un prerequisito di Ionic.
Il codice completo si presenta ora cosi:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
Cosa abbiamo fatto:

- Abbiamo aggiunto il modulo TranslateModule
- Abbiamo specificato nelle impostazioni di utilizzare un TranslateLoader specifico
- Abbiamo creato una funzione factory per il nostro TranslateLoader per far si che i file possano essere inseriti nella cartella *assets/i18n/*
- Abbiamo importato il modulo HttpClientModule, per poter utilizzare l'oggetto HttpClient nella funzione

## Aggiunta dei file di traduzione
Possiamo ora aggiungere i file relativi alla localizzazione, un .json per ogni lingua.
Creiamo una cartella dentro *src/assets* chiamata i18n, e a sua volta andiamo a creare due file .json, uno chiamato 'en.json' e uno 'it.json':
![File tree](/blog-img/ionic-translate/tree.png)

All'interno di entrambi i file, andiamo a dichiarare un semplice oggetto json contenente una stringa, ovviamente tradotta nel rispettivo linguaggio:
```json
en.json
{
  "title": "Hello world"
}
```
```json 
it.json
{
  "title": "Ciao mondo"
}
```

Ora che abbiamo la nostra traduzione, possiamo usare la **TranslatePipe** fornita dalla libreria per far riferimento alla stringa tradotta nel nostro template del componente.
Apriamo il componente "Explore-container" generato da Ionic nella fase di creazione progetto e inseriamo la pipe nel codice html:
```html
<strong>{{ 'title' : translate }}</strong>
```
Ricordiamoci di importare il TranslateModule nel modulo nel caso non lo facesse in automatico il nostro IDE.

Prima di verificare il funzionamento, dobbiamo impostare una lingua predefinita. Andiamo nel codice dell'app.component:
```ts 
  // Inseriamo tramite Dependency injection il TranslateService
 constructor(private translate: TranslateService) {
  // Settiamo l'inglese come linguaggio predefinito
  this.translate.setDefaultLang('en');
}
```
Finalmente siamo pronti per verificare il funzionamento! Avviamo la nostra app e controlliamo il contenuto al centro dello schermo: verrà mostrato ora il nostro "Hello world"!

Verifichiamo che cambiando la lingua specificata nella funzione in 'it' e aggiornando la pagina, venga mostrato anche in italiano:
![Rendered localization](/blog-img/ionic-translate/trad.png)

## Utilizzare il linguaggio preferito dall'utente
Ora che abbiamo il sistema di localizzazione attivo, non ci rimane che ottenere la lingua del browser utilizzata dall'utente, in modo da impostare in automatico la lingua utilizzata dalla nostra app.
Modifichiamo il file _app.component.ts_ :

```ts 
  constructor(private translate: TranslateService) {
  this.initializeLanguageProperties();
}

initializeLanguageProperties(): void
  {
    // Settiamo l'inglese come linguaggio predefinito
    this.translate.setDefaultLang('en');

    //Se l'API è disponibile, otteniamo il linguaggio usato dall'utente e utilizziamolo
    if (window.Intl && typeof window.Intl === 'object') {
      this.translate.use(navigator.language.slice(0,2));
    }

}
```
Spiegazione:
Per le versioni più vecchie di Ionic, veniva consigliato l'utilizzo di un plugin esterno, ma oggigiorno questo non è più necessario.

Possiamo infatti far uso di una API fornita dal browser che ci permette di ottenere la lingua. Mi riferisco alla proprietà _navigator.language_ , ormai supportata da tempo dalla maggior parte dei browser.
Maggiori informazioni [qui](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language).

Questa api ritorna la lingua utilizzata nel formato  "en-us", "it-it" etc, per cui per abbinarla ai nostri file 'en','it', è necessario prelevare solo i primi due caratteri della stringa.


## Conclusione
Abbiamo ottenuto ciò che volevamo: un progetto Ionic, creato con Angular, in grado di supportare più lingue.
Abbiamo introdotto il supporto all'inglese e italiano, e ottenuto dal browser la lingua da utilizzare come principale. In caso la lingua utilizzata dall'utente non sia supportata, verrà usato l'inglese come lingua fallback.

Grazie per aver letto la guida, alla prossima 😉!
