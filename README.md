# 🚀 Portfolio-SantiDev

**Portfolio personale sviluppato con React, Vite e Tailwind CSS**, progettato per presentare competenze, progetti, tecnologie utilizzate e percorso professionale nel settore dello sviluppo web.

Il progetto nasce con l’obiettivo di creare una presenza online moderna, responsive e facilmente consultabile, utile per valorizzare il profilo professionale e mostrare i principali lavori realizzati.

> 🚧 **Stato del progetto:** In sviluppo

---

## 📌 Indice

* [Panoramica](#-panoramica)
* [Caratteristiche principali](#-caratteristiche-principali)
* [Tecnologie utilizzate](#-tecnologie-utilizzate)
* [Architettura del progetto](#-architettura-del-progetto)
* [Struttura delle cartelle](#-struttura-delle-cartelle)
* [Installazione](#-installazione)
* [Comandi disponibili](#-comandi-disponibili)
* [Responsive Design](#-responsive-design)
* [Obiettivi del progetto](#-obiettivi-del-progetto)
* [Sviluppi futuri](#-sviluppi-futuri)
* [Autore](#-autore)

---

## 🌐 Panoramica

Portfolio-SantiDev è un sito portfolio personale pensato per raccontare il percorso di uno sviluppatore web attraverso una presentazione chiara e professionale.

Il sito permette di organizzare e valorizzare:

* Presentazione personale;
* Competenze tecniche;
* Tecnologie conosciute;
* Progetti realizzati;
* Informazioni professionali;
* Collegamenti ai repository GitHub;
* Possibili contatti e riferimenti esterni.

L’interfaccia è sviluppata come applicazione React utilizzando **Vite** per il processo di sviluppo e **Tailwind CSS** per la gestione dello stile.

---

## ✨ Caratteristiche principali

| Funzionalità                 | Descrizione                                                  | Stato |
| ---------------------------- | ------------------------------------------------------------ | :---: |
| **Personal Portfolio**       | Presentazione del profilo e del percorso professionale | 🟢 |
| **Hero Section**             | Sezione introduttiva con identità e ruolo professionale | 🟢 |
| **Skills e strumenti**       | Competenze e strumenti, organizzati per categorie | 🟢 |
| **Progetti**                 | Elenco dei progetti e pagine di dettaglio | 🟢 |
| **Navigazione responsive**   | Menu adattato alle dimensioni dello schermo | 🟢 |
| **React Components**         | Suddivisione dell’interfaccia in componenti riutilizzabili | 🟢 |
| **Routing**                  | Navigazione tra pagine tramite React Router | 🟢 |
| **Icone**                    | Utilizzo di SVG e React Icons | 🟢 |
| **Styling con Tailwind CSS** | Gestione delle classi e del layout tramite utility CSS | 🟢 |

> Il portfolio è in evoluzione: contenuti, progetti e interfaccia possono essere aggiornati nel tempo.

### Legenda

* 🟢 Disponibile nella struttura del progetto
* 🟡 In sviluppo o da completare
* ⚪ Pianificato

---

## 🛠️ Tecnologie utilizzate

### Frontend

| Tecnologia           | Utilizzo                                       |
| -------------------- | ---------------------------------------------- |
| **React**            | Sviluppo dell’interfaccia utente               |
| **React DOM**        | Rendering dell’applicazione nel browser        |
| **React Router DOM** | Gestione della navigazione e delle rotte       |
| **Tailwind CSS**     | Styling e progettazione del layout             |
| **React Icons**      | Integrazione di icone nei componenti           |
| **Vite**             | Ambiente di sviluppo e build dell’applicazione |

### Strumenti di sviluppo

| Strumento            | Utilizzo                                             |
| -------------------- | ---------------------------------------------------- |
| **JavaScript / JSX** | Logica e struttura dei componenti                    |
| **ESLint**           | Analisi statica e controllo della qualità del codice |
| **npm**              | Gestione delle dipendenze                            |
| **Git e GitHub**     | Versionamento e gestione del progetto                |

---

## 🧩 Architettura del progetto

L’applicazione segue un’architettura frontend basata su componenti React.

```text
                    ┌──────────────────────┐
                    │       Browser        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      React App       │
                    └──────────┬───────────┘
                               │
             ┌─────────────────┼─────────────────┐
             ▼                 ▼                 ▼
      ┌────────────┐   ┌────────────┐   ┌────────────┐
      │   Navbar   │   │    Hero    │   │   Skills   │
      └────────────┘   └────────────┘   └────────────┘
             │                 │                 │
             └─────────────────┼─────────────────┘
                               ▼
                    ┌──────────────────────┐
                    │      Projects        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Contact / Footer   │
                    └──────────────────────┘
```

---

## 📁 Struttura delle cartelle

```text
Portfolio-SantiDev/
│
├── public/
│   └── assets pubblici
│
├── src/
│   ├── components/       # Sezioni e componenti riutilizzabili
│   ├── data/             # Dati JSON di progetti, esperienze e tecnologie
│   ├── layout/           # Layout, navigazione e componenti condivisi
│   ├── pages/            # Pagine collegate tramite React Router
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── public/
│   └── project/          # Immagini pubbliche dei progetti
├── src/assets/
│   ├── icons/            # Icone SVG
│   └── img/              # Immagini usate dall'applicazione
├── UX/                   # Materiali e riferimenti UX/UI
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── skills-lock.json
├── vite.config.js
└── README.md
```

I contenuti di progetti, esperienze, competenze e strumenti sono gestiti nei file JSON dentro `src/data/`, separandoli dalla presentazione dei componenti.

---

## ⚙️ Installazione

### 1. Clonare il repository

```bash
git clone https://github.com/santie96/Portfolio-SantiDev.git
```

### 2. Entrare nella cartella del progetto

```bash
cd Portfolio-SantiDev
```

### 3. Installare le dipendenze

```bash
npm ci
```

`npm ci` installa le versioni definite in `package-lock.json`. In alternativa, è possibile usare `npm install`.

### 4. Avviare il server di sviluppo

```bash
npm run dev
```

L’applicazione sarà disponibile all’indirizzo indicato da Vite, generalmente:

```text
http://localhost:5173
```

---

## 📜 Comandi disponibili

| Comando           | Descrizione                                  |
| ----------------- | -------------------------------------------- |
| `npm install`     | Installa tutte le dipendenze del progetto    |
| `npm run dev`     | Avvia il server di sviluppo                  |
| `npm run build`   | Crea la build ottimizzata per la produzione  |
| `npm run preview` | Visualizza localmente la build di produzione |
| `npm run lint`    | Esegue i controlli ESLint sul codice         |

---

## 🤖 File di configurazione delle skill

`skills-lock.json` registra le skill utilizzate dal progetto e i relativi riferimenti e hash. È versionato per condividere questa configurazione.

La directory `.agents/` contiene i file locali delle skill ed è esclusa dal repository tramite `.gitignore`; il lockfile non include il contenuto delle skill.

---

## 📱 Responsive Design

Il portfolio è progettato per adattarsi a diverse dimensioni dello schermo:

* Desktop;
* Laptop;
* Tablet;
* Smartphone.

Particolare attenzione può essere dedicata a:

* Navigazione mobile;
* Spaziature responsive;
* Dimensioni tipografiche;
* Disposizione delle sezioni;
* Leggibilità dei contenuti;
* Usabilità dei pulsanti e dei collegamenti;
* Visualizzazione delle card dei progetti.

---

## 🎨 UX/UI

La cartella `UX` raccoglie materiali e riferimenti utili alla progettazione dell’interfaccia.

L’obiettivo è mantenere un’esperienza utente:

* Chiara;
* Coerente;
* Moderna;
* Accessibile;
* Orientata alla presentazione professionale;
* Ottimizzata per la navigazione da dispositivi differenti.

---

## 🎯 Obiettivi del progetto

Gli obiettivi principali di Portfolio-SantiDev sono:

1. Creare un portfolio personale moderno e professionale.
2. Presentare in modo chiaro competenze e tecnologie.
3. Mostrare i progetti sviluppati durante il percorso formativo e professionale.
4. Migliorare l’organizzazione e la riusabilità dei componenti React.
5. Applicare principi di responsive design e user experience.
6. Consolidare l’utilizzo di React, Vite e Tailwind CSS.
7. Creare una base facilmente estendibile e aggiornabile nel tempo.

---

## 🚧 Sviluppi futuri

Tra i possibili sviluppi del progetto:

* [ ] Completamento di tutte le sezioni del portfolio;
* [ ] Ottimizzazione della Hero Section;
* [ ] Miglioramento della sezione Skills;
* [ ] Implementazione definitiva della sezione Projects;
* [ ] Miglioramento dell’esperienza mobile;
* [ ] Aggiunta di animazioni e micro-interazioni;
* [ ] Ottimizzazione dell’accessibilità;
* [ ] Miglioramento delle performance;
* [ ] Collegamento ai repository GitHub e alle demo online;
* [ ] Pubblicazione della versione definitiva;
* [ ] Aggiornamento periodico dei progetti e delle competenze.

---

## 📊 Stato attuale

Portfolio-SantiDev è un portfolio frontend realizzato con React, Vite e Tailwind CSS. Include pagine per la presentazione personale, le competenze, i progetti e i contatti, con contenuti gestiti tramite file JSON.

Il progetto continua a evolvere e rappresenta uno spazio di lavoro per:

* Component-based development;
* Responsive design;
* UI/UX;
* Organizzazione del codice;
* Presentazione professionale dei progetti;
* Miglioramento continuo delle competenze frontend.

---

## 👤 Autore

**SantiDev**

* GitHub: [santie96](https://github.com/santie96)
* Repository: [Portfolio-SantiDev](https://github.com/santie96/Portfolio-SantiDev)
