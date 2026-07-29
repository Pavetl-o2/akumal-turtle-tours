/* Akumal Turtle Co. — translations + language switcher.
   Elements opt in with data-i18n="key" (text) or data-i18n-attr="attr:key"
   (attributes, e.g. placeholder or alt). Keys marked in HTML_KEYS may contain
   markup; everything else is inserted as plain text. */
(function () {
  'use strict';

  var LANGS = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    it: 'Italiano',
    de: 'Deutsch'
  };

  var HTML_KEYS = { 'hero.title': 1 };

  var T = {
    en: {
      'meta.title': 'Akumal Turtle Co. — Swim with sea turtles in Akumal, Mexico',
      'meta.desc': 'Small-group snorkeling tours in Akumal Bay, Riviera Maya — the bay the Maya named "the place of the turtles." Certified guides, max 6 guests, gear and bay fee included.',
      'skip': 'Skip to content',
      'nav.menu': 'Menu',
      'nav.tours': 'Tours', 'nav.gallery': 'Gallery', 'nav.faq': 'FAQ',
      'nav.contact': 'Contact', 'nav.book': 'Book Now', 'nav.lang': 'Language',
      'hero.badge': 'Akumal · Riviera Maya',
      'hero.title': 'Swim with<br>sea turtles',
      'hero.lede': 'Small-group snorkeling tours in the bay the Maya named “the place of the turtles.”',
      'stats.label': 'At a glance',
      'stats.1': 'years guiding the bay',
      'stats.2': 'guests max per group',
      'stats.3': 'reef-safe & certified',
      'tours.title': 'Pick your tour',
      'tours.sub': 'Prices per person unless noted · gear & bay fee included',
      'tour.1.badge': '2 hrs · group', 'tour.1.name': 'Morning Snorkel',
      'tour.1.desc': 'Calm water, best light, full gear and reef briefing.',
      'tour.2.badge': '3 hrs · private ★', 'tour.2.name': 'Private Encounter',
      'tour.2.desc': 'Your party only, dedicated guide, photos throughout.',
      'tour.3.badge': '4 hrs · reef', 'tour.3.name': 'Reef Expedition',
      'tour.3.desc': 'Turtles, Yal-Kú reef and a coastal lunch stop.',
      'tour.book': 'Book',
      'gallery.title': 'From the water',
      'faq.title': 'Good to know',
      'faq.q1': 'Do I need to know how to swim?',
      'faq.a1': 'Basic comfort helps, but every guest wears a life vest and stays with a guide. Non-swimmers welcome.',
      'faq.q2': 'Are turtle sightings guaranteed?',
      'faq.a2': 'Akumal Bay is a resident feeding ground, so sightings are very common year-round. We never chase or touch the turtles.',
      'faq.q3': 'What’s included in the price?',
      'faq.a3': 'Mask, snorkel, fins, life vest, bay conservation fee and your certified guide. Bring reef-safe sunscreen.',
      'faq.q4': 'How do I get to Akumal?',
      'faq.a4': 'Akumal sits on the Cancún–Tulum highway, about 35 minutes south of Cancún airport. We’ll send exact meeting-point details after booking.',
      'cta.title': 'Ready to dive in?',
      'cta.lede': 'We confirm your spot within the hour. Tours run daily from 7 AM.',
      'cta.btn': 'Book your tour',
      'contact.title': 'Contact & booking',
      'contact.intro': 'Send us your preferred date and group size — we reply within the hour and confirm meeting point details.',
      'contact.name': 'Full name', 'contact.reach': 'Email or WhatsApp',
      'contact.details': 'Preferred date & group size', 'contact.submit': 'Request booking',
      'contact.whatsapp': 'WhatsApp', 'contact.email': 'Email',
      'contact.meeting': 'Meeting point',
      'contact.address': 'Carr. Cancún–Tulum, Akumal, Quintana Roo, Mexico',
      'footer.explore': 'Explore', 'footer.follow': 'Follow',
      'footer.rights': '© 2026 Akumal Turtle Co. — All rights reserved.',
      'form.need': 'Please add ', 'form.f.name': 'your name',
      'form.f.reach': 'an email or WhatsApp number',
      'form.f.details': 'a preferred date and group size',
      'form.wa': 'Opening WhatsApp with your request — press send to reach us.',
      'form.mail': 'Opening your email app with the request — press send to reach us.',
      'form.greeting': 'Hi! I’d like to book a turtle tour.',
      'form.l.name': 'Name', 'form.l.contact': 'Contact', 'form.l.details': 'Date & group size',
      'alt.tour1': 'A green sea turtle gliding over a sunlit seagrass meadow in shallow water',
      'alt.tour2': 'Two snorkelers swimming alongside a green sea turtle over the sandy bottom',
      'alt.tour3': 'A group of snorkelers floating above a shallow Caribbean reef',
      'alt.gal1': 'Close-up of a green sea turtle’s face underwater',
      'alt.gal2': 'Two snorkelers holding hands at the surface, seen from below',
      'alt.gal3': 'Two snorkelers at the surface of Akumal Bay, with the palm-lined shore and a tour boat behind them',
      'alt.gal4': 'A green sea turtle swimming over the sandy seabed'
    },

    es: {
      'meta.title': 'Akumal Turtle Co. — Nada con tortugas marinas en Akumal, México',
      'meta.desc': 'Tours de snorkel en grupos pequeños en la bahía de Akumal, Riviera Maya — la bahía que los mayas llamaron «el lugar de las tortugas». Guías certificados, máximo 6 personas, equipo y cuota de la bahía incluidos.',
      'skip': 'Saltar al contenido',
      'nav.menu': 'Menú',
      'nav.tours': 'Tours', 'nav.gallery': 'Galería', 'nav.faq': 'Preguntas',
      'nav.contact': 'Contacto', 'nav.book': 'Reservar', 'nav.lang': 'Idioma',
      'hero.badge': 'Akumal · Riviera Maya',
      'hero.title': 'Nada con<br>tortugas marinas',
      'hero.lede': 'Tours de snorkel en grupos pequeños en la bahía que los mayas llamaron «el lugar de las tortugas».',
      'stats.label': 'De un vistazo',
      'stats.1': 'años guiando en la bahía',
      'stats.2': 'personas máximo por grupo',
      'stats.3': 'respetuoso con el arrecife y certificado',
      'tours.title': 'Elige tu tour',
      'tours.sub': 'Precios por persona salvo indicación · equipo y cuota de la bahía incluidos',
      'tour.1.badge': '2 h · grupo', 'tour.1.name': 'Snorkel matutino',
      'tour.1.desc': 'Agua tranquila, la mejor luz, equipo completo y briefing del arrecife.',
      'tour.2.badge': '3 h · privado ★', 'tour.2.name': 'Encuentro privado',
      'tour.2.desc': 'Solo tu grupo, guía dedicado y fotos durante todo el tour.',
      'tour.3.badge': '4 h · arrecife', 'tour.3.name': 'Expedición al arrecife',
      'tour.3.desc': 'Tortugas, el arrecife de Yal-Kú y una parada para comer en la costa.',
      'tour.book': 'Reservar',
      'gallery.title': 'Desde el agua',
      'faq.title': 'Bueno saberlo',
      'faq.q1': '¿Necesito saber nadar?',
      'faq.a1': 'Ayuda sentirse cómodo en el agua, pero todas las personas llevan chaleco salvavidas y van acompañadas de un guía. Quienes no saben nadar son bienvenidos.',
      'faq.q2': '¿Están garantizados los avistamientos de tortugas?',
      'faq.a2': 'La bahía de Akumal es una zona de alimentación permanente, así que los avistamientos son muy frecuentes todo el año. Nunca perseguimos ni tocamos a las tortugas.',
      'faq.q3': '¿Qué incluye el precio?',
      'faq.a3': 'Visor, snorkel, aletas, chaleco salvavidas, la cuota de conservación de la bahía y tu guía certificado. Trae protector solar respetuoso con el arrecife.',
      'faq.q4': '¿Cómo llego a Akumal?',
      'faq.a4': 'Akumal está sobre la carretera Cancún–Tulum, a unos 35 minutos al sur del aeropuerto de Cancún. Te enviamos los detalles exactos del punto de encuentro después de reservar.',
      'cta.title': '¿Listo para lanzarte?',
      'cta.lede': 'Confirmamos tu lugar en menos de una hora. Los tours salen todos los días desde las 7 AM.',
      'cta.btn': 'Reserva tu tour',
      'contact.title': 'Contacto y reservas',
      'contact.intro': 'Envíanos tu fecha preferida y el tamaño del grupo — respondemos en menos de una hora y confirmamos los detalles del punto de encuentro.',
      'contact.name': 'Nombre completo', 'contact.reach': 'Email o WhatsApp',
      'contact.details': 'Fecha preferida y tamaño del grupo', 'contact.submit': 'Solicitar reserva',
      'contact.whatsapp': 'WhatsApp', 'contact.email': 'Email',
      'contact.meeting': 'Punto de encuentro',
      'contact.address': 'Carr. Cancún–Tulum, Akumal, Quintana Roo, México',
      'footer.explore': 'Explorar', 'footer.follow': 'Síguenos',
      'footer.rights': '© 2026 Akumal Turtle Co. — Todos los derechos reservados.',
      'form.need': 'Por favor añade ', 'form.f.name': 'tu nombre',
      'form.f.reach': 'un email o número de WhatsApp',
      'form.f.details': 'una fecha preferida y el tamaño del grupo',
      'form.wa': 'Abriendo WhatsApp con tu solicitud — pulsa enviar para contactarnos.',
      'form.mail': 'Abriendo tu app de correo con la solicitud — pulsa enviar para contactarnos.',
      'form.greeting': '¡Hola! Me gustaría reservar un tour de tortugas.',
      'form.l.name': 'Nombre', 'form.l.contact': 'Contacto', 'form.l.details': 'Fecha y tamaño del grupo',
      'alt.tour1': 'Una tortuga verde nadando sobre una pradera de pastos marinos iluminada por el sol',
      'alt.tour2': 'Dos personas haciendo snorkel junto a una tortuga verde sobre el fondo arenoso',
      'alt.tour3': 'Un grupo haciendo snorkel sobre un arrecife caribeño poco profundo',
      'alt.gal1': 'Primer plano del rostro de una tortuga verde bajo el agua',
      'alt.gal2': 'Dos personas tomadas de la mano en la superficie, vistas desde abajo',
      'alt.gal3': 'Dos personas en la superficie de la bahía de Akumal, con la costa de palmeras y una lancha detrás',
      'alt.gal4': 'Una tortuga verde nadando sobre el fondo arenoso'
    },

    fr: {
      'meta.title': 'Akumal Turtle Co. — Nagez avec les tortues marines à Akumal, Mexique',
      'meta.desc': 'Sorties snorkeling en petit groupe dans la baie d’Akumal, Riviera Maya — la baie que les Mayas ont nommée « le lieu des tortues ». Guides certifiés, 6 personnes maximum, équipement et taxe de baie inclus.',
      'skip': 'Aller au contenu',
      'nav.menu': 'Menu',
      'nav.tours': 'Sorties', 'nav.gallery': 'Galerie', 'nav.faq': 'FAQ',
      'nav.contact': 'Contact', 'nav.book': 'Réserver', 'nav.lang': 'Langue',
      'hero.badge': 'Akumal · Riviera Maya',
      'hero.title': 'Nagez avec<br>les tortues marines',
      'hero.lede': 'Sorties snorkeling en petit groupe dans la baie que les Mayas ont nommée « le lieu des tortues ».',
      'stats.label': 'En bref',
      'stats.1': 'ans à guider dans la baie',
      'stats.2': 'participants maximum par groupe',
      'stats.3': 'respectueux du récif et certifié',
      'tours.title': 'Choisissez votre sortie',
      'tours.sub': 'Prix par personne sauf indication · équipement et taxe de baie inclus',
      'tour.1.badge': '2 h · groupe', 'tour.1.name': 'Snorkeling matinal',
      'tour.1.desc': 'Eau calme, la plus belle lumière, équipement complet et briefing récif.',
      'tour.2.badge': '3 h · privé ★', 'tour.2.name': 'Rencontre privée',
      'tour.2.desc': 'Votre groupe uniquement, guide dédié, photos tout au long.',
      'tour.3.badge': '4 h · récif', 'tour.3.name': 'Expédition récif',
      'tour.3.desc': 'Tortues, récif de Yal-Kú et pause déjeuner sur la côte.',
      'tour.book': 'Réserver',
      'gallery.title': 'Depuis l’eau',
      'faq.title': 'Bon à savoir',
      'faq.q1': 'Dois-je savoir nager ?',
      'faq.a1': 'Être à l’aise dans l’eau aide, mais chaque participant porte un gilet de sauvetage et reste avec un guide. Les non-nageurs sont les bienvenus.',
      'faq.q2': 'Les tortues sont-elles garanties ?',
      'faq.a2': 'La baie d’Akumal est une zone d’alimentation permanente : les observations sont très fréquentes toute l’année. Nous ne poursuivons ni ne touchons jamais les tortues.',
      'faq.q3': 'Qu’est-ce qui est inclus dans le prix ?',
      'faq.a3': 'Masque, tuba, palmes, gilet de sauvetage, taxe de conservation de la baie et votre guide certifié. Prévoyez une crème solaire respectueuse du récif.',
      'faq.q4': 'Comment se rendre à Akumal ?',
      'faq.a4': 'Akumal se trouve sur la route Cancún–Tulum, à environ 35 minutes au sud de l’aéroport de Cancún. Nous vous envoyons le point de rendez-vous exact après la réservation.',
      'cta.title': 'Prêt à plonger ?',
      'cta.lede': 'Nous confirmons votre place dans l’heure. Départs tous les jours dès 7 h.',
      'cta.btn': 'Réservez votre sortie',
      'contact.title': 'Contact et réservation',
      'contact.intro': 'Envoyez-nous votre date souhaitée et la taille du groupe — nous répondons dans l’heure et confirmons le point de rendez-vous.',
      'contact.name': 'Nom complet', 'contact.reach': 'E-mail ou WhatsApp',
      'contact.details': 'Date souhaitée et taille du groupe', 'contact.submit': 'Demander une réservation',
      'contact.whatsapp': 'WhatsApp', 'contact.email': 'E-mail',
      'contact.meeting': 'Point de rendez-vous',
      'contact.address': 'Carr. Cancún–Tulum, Akumal, Quintana Roo, Mexique',
      'footer.explore': 'Explorer', 'footer.follow': 'Suivez-nous',
      'footer.rights': '© 2026 Akumal Turtle Co. — Tous droits réservés.',
      'form.need': 'Merci d’indiquer ', 'form.f.name': 'votre nom',
      'form.f.reach': 'un e-mail ou un numéro WhatsApp',
      'form.f.details': 'une date souhaitée et la taille du groupe',
      'form.wa': 'Ouverture de WhatsApp avec votre demande — appuyez sur envoyer.',
      'form.mail': 'Ouverture de votre messagerie avec la demande — appuyez sur envoyer.',
      'form.greeting': 'Bonjour ! Je souhaite réserver une sortie tortues.',
      'form.l.name': 'Nom', 'form.l.contact': 'Contact', 'form.l.details': 'Date et taille du groupe',
      'alt.tour1': 'Une tortue verte glissant au-dessus d’un herbier marin ensoleillé',
      'alt.tour2': 'Deux personnes en snorkeling aux côtés d’une tortue verte au-dessus du fond sableux',
      'alt.tour3': 'Un groupe en snorkeling au-dessus d’un récif caribéen peu profond',
      'alt.gal1': 'Gros plan du visage d’une tortue verte sous l’eau',
      'alt.gal2': 'Deux personnes se tenant la main à la surface, vues d’en dessous',
      'alt.gal3': 'Deux personnes à la surface de la baie d’Akumal, avec le rivage bordé de palmiers et un bateau derrière',
      'alt.gal4': 'Une tortue verte nageant au-dessus du fond sableux'
    },

    it: {
      'meta.title': 'Akumal Turtle Co. — Nuota con le tartarughe marine ad Akumal, Messico',
      'meta.desc': 'Snorkeling in piccoli gruppi nella baia di Akumal, Riviera Maya — la baia che i Maya chiamarono «il luogo delle tartarughe». Guide certificate, massimo 6 persone, attrezzatura e tassa della baia incluse.',
      'skip': 'Vai al contenuto',
      'nav.menu': 'Menu',
      'nav.tours': 'Tour', 'nav.gallery': 'Galleria', 'nav.faq': 'FAQ',
      'nav.contact': 'Contatti', 'nav.book': 'Prenota', 'nav.lang': 'Lingua',
      'hero.badge': 'Akumal · Riviera Maya',
      'hero.title': 'Nuota con<br>le tartarughe marine',
      'hero.lede': 'Snorkeling in piccoli gruppi nella baia che i Maya chiamarono «il luogo delle tartarughe».',
      'stats.label': 'In breve',
      'stats.1': 'anni come guide nella baia',
      'stats.2': 'persone massimo per gruppo',
      'stats.3': 'rispettoso della barriera e certificato',
      'tours.title': 'Scegli il tuo tour',
      'tours.sub': 'Prezzi a persona salvo diversa indicazione · attrezzatura e tassa della baia incluse',
      'tour.1.badge': '2 h · gruppo', 'tour.1.name': 'Snorkeling mattutino',
      'tour.1.desc': 'Acqua calma, luce migliore, attrezzatura completa e briefing sulla barriera.',
      'tour.2.badge': '3 h · privato ★', 'tour.2.name': 'Incontro privato',
      'tour.2.desc': 'Solo il tuo gruppo, guida dedicata, foto per tutta la durata.',
      'tour.3.badge': '4 h · barriera', 'tour.3.name': 'Spedizione alla barriera',
      'tour.3.desc': 'Tartarughe, la barriera di Yal-Kú e una sosta pranzo sulla costa.',
      'tour.book': 'Prenota',
      'gallery.title': 'Dall’acqua',
      'faq.title': 'Buono a sapersi',
      'faq.q1': 'Devo saper nuotare?',
      'faq.a1': 'Essere a proprio agio in acqua aiuta, ma ogni persona indossa un giubbotto salvagente e resta con una guida. I non nuotatori sono i benvenuti.',
      'faq.q2': 'L’avvistamento delle tartarughe è garantito?',
      'faq.a2': 'La baia di Akumal è un’area di alimentazione stabile, quindi gli avvistamenti sono molto frequenti tutto l’anno. Non inseguiamo né tocchiamo mai le tartarughe.',
      'faq.q3': 'Cosa è incluso nel prezzo?',
      'faq.a3': 'Maschera, boccaglio, pinne, giubbotto salvagente, tassa di conservazione della baia e la tua guida certificata. Porta una crema solare rispettosa della barriera.',
      'faq.q4': 'Come arrivo ad Akumal?',
      'faq.a4': 'Akumal si trova sulla strada Cancún–Tulum, a circa 35 minuti a sud dell’aeroporto di Cancún. Ti inviamo i dettagli esatti del punto d’incontro dopo la prenotazione.',
      'cta.title': 'Pronto a tuffarti?',
      'cta.lede': 'Confermiamo il tuo posto entro un’ora. Tour ogni giorno dalle 7:00.',
      'cta.btn': 'Prenota il tuo tour',
      'contact.title': 'Contatti e prenotazioni',
      'contact.intro': 'Inviaci la data preferita e il numero di partecipanti — rispondiamo entro un’ora e confermiamo il punto d’incontro.',
      'contact.name': 'Nome completo', 'contact.reach': 'Email o WhatsApp',
      'contact.details': 'Data preferita e numero di partecipanti', 'contact.submit': 'Richiedi prenotazione',
      'contact.whatsapp': 'WhatsApp', 'contact.email': 'Email',
      'contact.meeting': 'Punto d’incontro',
      'contact.address': 'Carr. Cancún–Tulum, Akumal, Quintana Roo, Messico',
      'footer.explore': 'Esplora', 'footer.follow': 'Seguici',
      'footer.rights': '© 2026 Akumal Turtle Co. — Tutti i diritti riservati.',
      'form.need': 'Aggiungi ', 'form.f.name': 'il tuo nome',
      'form.f.reach': 'un’email o un numero WhatsApp',
      'form.f.details': 'una data preferita e il numero di partecipanti',
      'form.wa': 'Apertura di WhatsApp con la tua richiesta — premi invia per contattarci.',
      'form.mail': 'Apertura dell’app email con la richiesta — premi invia per contattarci.',
      'form.greeting': 'Ciao! Vorrei prenotare un tour delle tartarughe.',
      'form.l.name': 'Nome', 'form.l.contact': 'Contatto', 'form.l.details': 'Data e numero di partecipanti',
      'alt.tour1': 'Una tartaruga verde che nuota sopra una prateria di posidonia illuminata dal sole',
      'alt.tour2': 'Due persone in snorkeling accanto a una tartaruga verde sul fondo sabbioso',
      'alt.tour3': 'Un gruppo in snorkeling sopra una barriera caraibica poco profonda',
      'alt.gal1': 'Primo piano del muso di una tartaruga verde sott’acqua',
      'alt.gal2': 'Due persone che si tengono per mano in superficie, viste dal basso',
      'alt.gal3': 'Due persone in superficie nella baia di Akumal, con la costa di palme e una barca alle spalle',
      'alt.gal4': 'Una tartaruga verde che nuota sopra il fondo sabbioso'
    },

    de: {
      'meta.title': 'Akumal Turtle Co. — Schwimm mit Meeresschildkröten in Akumal, Mexiko',
      'meta.desc': 'Schnorcheltouren in kleinen Gruppen in der Bucht von Akumal, Riviera Maya — die Bucht, die die Maya „den Ort der Schildkröten“ nannten. Zertifizierte Guides, max. 6 Gäste, Ausrüstung und Buchtgebühr inklusive.',
      'skip': 'Zum Inhalt springen',
      'nav.menu': 'Menü',
      'nav.tours': 'Touren', 'nav.gallery': 'Galerie', 'nav.faq': 'FAQ',
      'nav.contact': 'Kontakt', 'nav.book': 'Jetzt buchen', 'nav.lang': 'Sprache',
      'hero.badge': 'Akumal · Riviera Maya',
      'hero.title': 'Schwimm mit<br>Meeres&shy;schildkröten',
      'hero.lede': 'Schnorcheltouren in kleinen Gruppen in der Bucht, die die Maya „den Ort der Schildkröten“ nannten.',
      'stats.label': 'Auf einen Blick',
      'stats.1': 'Jahre Erfahrung in der Bucht',
      'stats.2': 'Gäste maximal pro Gruppe',
      'stats.3': 'riffschonend & zertifiziert',
      'tours.title': 'Wähle deine Tour',
      'tours.sub': 'Preise pro Person, sofern nicht anders angegeben · Ausrüstung und Buchtgebühr inklusive',
      'tour.1.badge': '2 Std. · Gruppe', 'tour.1.name': 'Morgen-Schnorcheln',
      'tour.1.desc': 'Ruhiges Wasser, bestes Licht, komplette Ausrüstung und Riff-Briefing.',
      'tour.2.badge': '3 Std. · privat ★', 'tour.2.name': 'Private Begegnung',
      'tour.2.desc': 'Nur eure Gruppe, eigener Guide, Fotos während der ganzen Tour.',
      'tour.3.badge': '4 Std. · Riff', 'tour.3.name': 'Riff-Expedition',
      'tour.3.desc': 'Schildkröten, das Yal-Kú-Riff und ein Mittagsstopp an der Küste.',
      'tour.book': 'Buchen',
      'gallery.title': 'Aus dem Wasser',
      'faq.title': 'Gut zu wissen',
      'faq.q1': 'Muss ich schwimmen können?',
      'faq.a1': 'Sicherheit im Wasser hilft, aber jeder Gast trägt eine Schwimmweste und bleibt bei einem Guide. Nichtschwimmer sind willkommen.',
      'faq.q2': 'Sind Schildkrötensichtungen garantiert?',
      'faq.a2': 'Die Bucht von Akumal ist ein festes Nahrungsgebiet, Sichtungen sind daher das ganze Jahr über sehr häufig. Wir verfolgen und berühren die Tiere nie.',
      'faq.q3': 'Was ist im Preis enthalten?',
      'faq.a3': 'Maske, Schnorchel, Flossen, Schwimmweste, die Naturschutzgebühr der Bucht und dein zertifizierter Guide. Bring riffsicheres Sonnenschutzmittel mit.',
      'faq.q4': 'Wie komme ich nach Akumal?',
      'faq.a4': 'Akumal liegt an der Straße Cancún–Tulum, etwa 35 Minuten südlich des Flughafens Cancún. Den genauen Treffpunkt schicken wir dir nach der Buchung.',
      'cta.title': 'Bereit einzutauchen?',
      'cta.lede': 'Wir bestätigen deinen Platz innerhalb einer Stunde. Touren täglich ab 7 Uhr.',
      'cta.btn': 'Tour buchen',
      'contact.title': 'Kontakt & Buchung',
      'contact.intro': 'Schick uns dein Wunschdatum und die Gruppengröße — wir antworten innerhalb einer Stunde und bestätigen den Treffpunkt.',
      'contact.name': 'Vollständiger Name', 'contact.reach': 'E-Mail oder WhatsApp',
      'contact.details': 'Wunschdatum & Gruppengröße', 'contact.submit': 'Buchung anfragen',
      'contact.whatsapp': 'WhatsApp', 'contact.email': 'E-Mail',
      'contact.meeting': 'Treffpunkt',
      'contact.address': 'Carr. Cancún–Tulum, Akumal, Quintana Roo, Mexiko',
      'footer.explore': 'Entdecken', 'footer.follow': 'Folgen',
      'footer.rights': '© 2026 Akumal Turtle Co. — Alle Rechte vorbehalten.',
      'form.need': 'Bitte ergänze ', 'form.f.name': 'deinen Namen',
      'form.f.reach': 'eine E-Mail oder WhatsApp-Nummer',
      'form.f.details': 'ein Wunschdatum und die Gruppengröße',
      'form.wa': 'WhatsApp wird mit deiner Anfrage geöffnet — zum Senden antippen.',
      'form.mail': 'Deine E-Mail-App wird mit der Anfrage geöffnet — zum Senden antippen.',
      'form.greeting': 'Hallo! Ich möchte eine Schildkröten-Tour buchen.',
      'form.l.name': 'Name', 'form.l.contact': 'Kontakt', 'form.l.details': 'Datum & Gruppengröße',
      'alt.tour1': 'Eine grüne Meeresschildkröte gleitet über eine sonnendurchflutete Seegraswiese',
      'alt.tour2': 'Zwei Schnorchelnde neben einer grünen Meeresschildkröte über sandigem Grund',
      'alt.tour3': 'Eine Gruppe schnorchelt über einem flachen karibischen Riff',
      'alt.gal1': 'Nahaufnahme des Kopfes einer grünen Meeresschildkröte unter Wasser',
      'alt.gal2': 'Zwei Schnorchelnde halten an der Oberfläche Händchen, von unten gesehen',
      'alt.gal3': 'Zwei Schnorchelnde an der Oberfläche der Bucht von Akumal, dahinter die Palmenküste und ein Boot',
      'alt.gal4': 'Eine grüne Meeresschildkröte schwimmt über sandigem Grund'
    }
  };

  function pick() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q && T[q]) return q;
    try {
      var saved = localStorage.getItem('lang');
      if (saved && T[saved]) return saved;
    } catch (e) { /* private mode */ }
    var nav = (navigator.languages || [navigator.language || 'en']);
    for (var i = 0; i < nav.length; i++) {
      var code = String(nav[i]).slice(0, 2).toLowerCase();
      if (T[code]) return code;
    }
    return 'en';
  }

  function apply(lang) {
    var dict = T[lang] || T.en;
    var fallback = T.en;

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = dict[key] !== undefined ? dict[key] : fallback[key];
      if (val === undefined) return;
      if (HTML_KEYS[key]) el.innerHTML = val;
      else el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        var bits = pair.split(':');
        var attr = bits[0].trim(), key = bits[1].trim();
        var val = dict[key] !== undefined ? dict[key] : fallback[key];
        if (val !== undefined) el.setAttribute(attr, val);
      });
    });

    document.title = dict['meta.title'] || fallback['meta.title'];
    var d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute('content', dict['meta.desc'] || fallback['meta.desc']);
    var ogt = document.querySelector('meta[property="og:title"]');
    if (ogt) ogt.setAttribute('content', dict['meta.title'] || fallback['meta.title']);
    var ogd = document.querySelector('meta[property="og:description"]');
    if (ogd) ogd.setAttribute('content', dict['meta.desc'] || fallback['meta.desc']);
    var ogl = document.querySelector('meta[property="og:locale"]');
    if (ogl) ogl.setAttribute('content', lang);

    window.__t = function (key) { return dict[key] !== undefined ? dict[key] : fallback[key]; };
    window.__lang = lang;
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  var current = pick();
  apply(current);

  document.addEventListener('DOMContentLoaded', function () {
    apply(current);

    var select = document.getElementById('lang-select');
    if (!select) return;
    Object.keys(LANGS).forEach(function (code) {
      var o = document.createElement('option');
      o.value = code;
      o.textContent = LANGS[code];
      if (code === current) o.selected = true;
      select.appendChild(o);
    });

    select.addEventListener('change', function () {
      current = select.value;
      try { localStorage.setItem('lang', current); } catch (e) { /* private mode */ }
      // Keep the choice in the URL so the page can be shared in that language.
      var url = new URL(location.href);
      url.searchParams.set('lang', current);
      history.replaceState(null, '', url);
      apply(current);
    });
  });
})();
