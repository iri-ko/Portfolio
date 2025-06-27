import { Component } from '@angular/core';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
  currentLang: 'EN' | 'DE' = 'EN';

  text!: {
    header: string;
    preambleTitle: string;
    preambleParagraph1: string;
    preambleParagraph2: string;
    versionDate: string;
    controllerTitle: string;
    controllerAddress: string;
    controllerEmail: string;
    overviewTitle: string;
    overviewIntro: string;
    dataType1: string;
    dataType2: string;
    dataType3: string;
    dataType4: string;
    dataType5: string;
    dataType6: string;
    subject1: string;
    subject2: string;
    purpose1: string;
    purpose2: string;
    purpose3: string;
    purpose4: string;
    purpose5: string;
    purpose6: string;
    overviewDataHeading: string;
    overviewSubjectsHeading: string;
    overviewPurposesHeading: string;
    legalBasisTitle: string;
    legalBasisIntro: string;
    legalItem1: string;
    legalItem2: string;
    nationalLawNote: string;
    swissNote: string;
    securityTitle: string;
    securityParagraph1: string;
    securityParagraph2: string;
    securityParagraph3: string;
    storageTitle: string;
    storageParagraph1: string;
    storageParagraph2: string;
    storageParagraph3: string;
    storageParagraph4: string;
    storageParagraph5: string;
    storageItem1: string;
    storageItem2: string;
    storageItem3: string;
    storageItem4: string;
    rightsTitle: string;
    rightsIntro: string;
    right1: string;
    right2: string;
    right3: string;
    right4: string;
    right5: string;
    right6: string;
    right7: string;
    hostingTitle: string;
    hostingIntro: string;
    hostingDataTypes: string;
    hostingSubjects: string;
    hostingPurposes: string;
    hostingRetention: string;
    hostingLegal: string;
    hostingNoteTitle: string;
    hostingAccessLogs: string;
    hostingStrato: string;
    contactTitle: string;
    contactIntro: string;
    contactDataTypes: string;
    contactSubjects: string;
    contactPurposes: string;
    contactRetention: string;
    contactLegal: string;
    contactNoteTitle: string;
    contactFormInfo: string;
  };

  constructor(private languageService: LanguageService) {
    this.languageService.currentLang.subscribe(lang => {
      this.currentLang = lang;

      this.text = lang === 'DE'
        ? {
          header: 'Datenschutzerklärung',
          preambleTitle: 'Präambel',
          preambleParagraph1:
            'Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als "Onlineangebot").',
          preambleParagraph2: 'Die verwendeten Begriffe sind nicht geschlechtsspezifisch.',
          versionDate: 'Stand: 26. Juni 2025',
          controllerTitle: 'Verantwortlicher',
          controllerAddress: 'Irene Kober\nRäcknitzhöhe 41\n01217 Dresden',
          controllerEmail: 'irene.kober@gmx.net',
          overviewTitle: 'Übersicht der Verarbeitungen',
          overviewIntro: 'Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.',
          dataType1: 'Bestandsdaten',
          dataType2: 'Kontaktdaten',
          dataType3: 'Inhaltsdaten',
          dataType4: 'Nutzungsdaten',
          dataType5: 'Meta-, Kommunikations- und Verfahrensdaten',
          dataType6: 'Protokolldaten',
          subject1: 'Kommunikationspartner',
          subject2: 'Nutzer',
          purpose1: 'Kommunikation',
          purpose2: 'Sicherheitsmaßnahmen',
          purpose3: 'Organisations- und Verwaltungsverfahren',
          purpose4: 'Feedback',
          purpose5: 'Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit',
          purpose6: 'Informationstechnische Infrastruktur',
          overviewDataHeading: 'Arten der verarbeiteten Daten',
          overviewSubjectsHeading: 'Kategorien betroffener Personen',
          overviewPurposesHeading: 'Zwecke der Verarbeitung',
          legalBasisTitle: 'Maßgebliche Rechtsgrundlagen',
          legalBasisIntro:
            'Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.',
          legalItem1:
            'Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO) – Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.',
          legalItem2:
            'Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO) – Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und Grundfreiheiten der betroffenen Person nicht überwiegen.',
          nationalLawNote:
            'Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Bundesdatenschutzgesetz (BDSG), das unter anderem Spezialregelungen zum Auskunftsrecht, zur Löschung oder zur automatisierten Entscheidungsfindung enthält.',
          swissNote:
            'Diese Datenschutzhinweise dienen sowohl dem Schweizer DSG als auch der DSGVO. Begriffe wie "Verarbeitung" oder "personenbezogene Daten" folgen der DSGVO, ihre Bedeutung richtet sich jedoch weiterhin nach dem Schweizer DSG.',
          securityTitle: 'Sicherheitsmaßnahmen',
          securityParagraph1:
            'Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.',
          securityParagraph2:
            'Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten sowie des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Darüber hinaus haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf Datengefährdungen sicherstellen. Der Datenschutz wird bereits bei der Auswahl von Hardware, Software und Verfahren berücksichtigt – gemäß dem Prinzip "Datenschutz durch Technikgestaltung" und durch datenschutzfreundliche Voreinstellungen.',
          securityParagraph3:
            'Sicherung von Online-Verbindungen durch TLS-/SSL-Verschlüsselungstechnologie (HTTPS): Um die Daten der Nutzer, die über unsere Online-Dienste übertragen werden, vor unerlaubten Zugriffen zu schützen, setzen wir auf die TLS-/SSL-Verschlüsselungstechnologie. Diese Technologien verschlüsseln die Informationen, die zwischen der Website oder App und dem Browser des Nutzers (oder zwischen zwei Servern) übertragen werden, wodurch die Daten vor unbefugtem Zugriff geschützt sind. TLS als sicherere Weiterentwicklung von SSL gewährleistet dabei höchste Sicherheitsstandards. Ein SSL-/TLS-Zertifikat ist in der Regel durch das HTTPS-Symbol in der Adresszeile Ihres Browsers erkennbar.',
          storageTitle: 'Allgemeine Informationen zur Datenspeicherung und Löschung',
          storageParagraph1:
            'Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den gesetzlichen Bestimmungen, sobald die zugrundeliegenden Einwilligungen widerrufen werden oder keine weiteren rechtlichen Grundlagen für die Verarbeitung bestehen. Dies betrifft Fälle, in denen der ursprüngliche Verarbeitungszweck entfällt oder die Daten nicht mehr benötigt werden. Ausnahmen bestehen, wenn gesetzliche Pflichten oder besondere Interessen eine längere Aufbewahrung erfordern.',
          storageParagraph2:
            'Insbesondere müssen Daten, die aus handels- oder steuerrechtlichen Gründen aufzubewahren sind oder deren Speicherung zur Rechtsverfolgung bzw. zum Schutz Dritter erforderlich ist, entsprechend archiviert werden.',
          storageParagraph3:
            'Unsere Datenschutzhinweise enthalten weitere Informationen zur Aufbewahrung und Löschung von Daten, die für bestimmte Verarbeitungsprozesse gelten.',
          storageParagraph4:
            'Bei mehreren Fristen gilt stets die längste. Daten, die nicht mehr dem ursprünglichen Zweck dienen, aber aus gesetzlichen Gründen aufbewahrt werden, verarbeiten wir nur zu diesen Archivierungszwecken.',
          storageParagraph5:
            'Die folgenden allgemeinen Fristen gelten für die Aufbewahrung und Archivierung nach deutschem Recht:',
          storageItem1:
            '10 Jahre – Bücher, Jahresabschlüsse, Inventare, Lageberichte, Eröffnungsbilanzen, Arbeitsanweisungen usw. (§ 147 AO, § 14b UStG, § 257 HGB)',
          storageItem2:
            '8 Jahre – Buchungsbelege wie Rechnungen und Kostenbelege (§ 147 AO, § 257 HGB)',
          storageItem3:
            '6 Jahre – Geschäftsbriefe, interne Aufzeichnungen, Kalkulationen usw. (§ 147 AO, § 257 HGB)',
          storageItem4:
            '3 Jahre – Daten zur Geltendmachung potenzieller Ansprüche (gesetzliche Verjährungsfrist, §§ 195, 199 BGB)',

          rightsTitle: 'Rechte der betroffenen Personen',
          rightsIntro:
            'Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:',
          right1:
            'Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.',
          right2: 'Widerrufsrecht bei Einwilligungen: Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.',
          right3: 'Auskunftsrecht: Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.',
          right4: 'Recht auf Berichtigung: Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.',
          right5: 'Recht auf Löschung und Einschränkung der Verarbeitung: Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.',
          right6: 'Recht auf Datenübertragbarkeit: Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.',
          right7: 'Beschwerde bei Aufsichtsbehörde: Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.',
          hostingTitle: 'Bereitstellung des Onlineangebots und Webhosting',
          hostingIntro:
            'Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät zu übermitteln.',
          hostingDataTypes:
            'Verarbeitete Datenarten: Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, verwendete Gerätetypen), Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben), Protokolldaten (z. B. Logins oder Zugriffszeiten).',
          hostingSubjects:
            'Betroffene Personen: Nutzer (z. B. Webseitenbesucher, Nutzer von Online-Diensten).',
          hostingPurposes:
            'Zwecke der Verarbeitung: Bereitstellung unseres Onlineangebots und Nutzerfreundlichkeit; informationstechnische Infrastruktur; Sicherheitsmaßnahmen.',
          hostingRetention:
            'Aufbewahrung und Löschung: gemäß Angaben im Abschnitt „Allgemeine Informationen zur Datenspeicherung und Löschung“.',
          hostingLegal:
            'Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO).',
          hostingNoteTitle: 'Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:',
          hostingAccessLogs:
            'Erhebung von Zugriffsdaten und Logfiles: Beim Aufruf unseres Onlineangebots werden sogenannte Server-Logfiles erfasst. Diese enthalten u. a. die abgerufene Adresse und Datei, Datum/Uhrzeit, Datenmenge, Erfolgsmeldung, Browsertyp/-version, Betriebssystem, Referrer-URL, IP-Adresse und Provider. Diese Daten dienen der Sicherheit (z. B. Schutz vor DDoS-Attacken) und der Stabilität des Dienstes. Rechtsgrundlage: berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO). Löschung: nach max. 30 Tagen, außer zur Beweissicherung bei Vorfällen.',
          hostingStrato:
            'STRATO: Bereitstellung technischer Infrastruktur (z. B. Hosting, Serverleistungen). Anbieter: STRATO AG, Pascalstraße 10, 10587 Berlin. Website: https://www.strato.de – Datenschutzerklärung: https://www.strato.de/datenschutz/. Auftragsverarbeitungsvertrag wird bereitgestellt. Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 S. 1 lit. f DSGVO).',
          contactTitle: 'Kontakt- und Anfrageverwaltung',
          contactIntro:
            'Bei der Kontaktaufnahme mit uns (z. B. per Post, Formular, E-Mail, Telefon oder soziale Medien) sowie im Rahmen bestehender Nutzer- oder Geschäftsbeziehungen verarbeiten wir die Angaben der anfragenden Personen, soweit dies zur Bearbeitung erforderlich ist.',
          contactDataTypes:
            'Verarbeitete Datenarten: Bestandsdaten (z. B. Name, Adresse, Kundennummer), Kontaktdaten (Post- und E-Mail-Adressen, Telefonnummern), Inhaltsdaten (z. B. Nachrichten), Nutzungsdaten (z. B. Seitenaufrufe, Klickpfade), Meta- und Kommunikationsdaten (IP-Adressen, Zeitangaben).',
          contactSubjects: 'Betroffene Personen: Kommunikationspartner.',
          contactPurposes:
            'Zwecke der Verarbeitung: Kommunikation, Organisation, Feedback (z. B. Umfragen), Bereitstellung unseres Onlineangebots und Nutzerfreundlichkeit.',
          contactRetention:
            'Aufbewahrung und Löschung: entsprechend Angaben im Abschnitt „Allgemeine Informationen zur Datenspeicherung und Löschung“.',
          contactLegal:
            'Rechtsgrundlagen: berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO), Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b DSGVO).',
          contactNoteTitle: 'Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:',
          contactFormInfo:
            'Kontaktformular: Bei Nutzung des Formulars, per E-Mail oder anderen Wegen, verarbeiten wir die übermittelten Daten ausschließlich zur Bearbeitung der Anfrage. Dazu zählen in der Regel Name, Kontaktdaten und ggf. weitere Informationen. Rechtsgrundlagen: Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO), berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO).',
        }
        : {
          header: 'Privacy Policy',
          preambleTitle: 'Preamble',
          preambleParagraph1:
            'This privacy policy informs you about the types of personal data (hereinafter referred to as "data") we process, for what purposes, and to what extent. It applies to all data processing operations we carry out, both in the course of providing our services and across our websites, mobile apps, and external online presences such as social media profiles (hereafter collectively referred to as our "online offering").',
          preambleParagraph2: 'All terms used are intended to be gender-neutral.',
          versionDate: 'Last updated: June 26, 2025',
          controllerTitle: 'Controller',
          controllerAddress: 'Irene Kober\nRäcknitzhöhe 41\n01217 Dresden',
          controllerEmail: 'irene.kober@gmx.net',
          overviewTitle: 'Overview of Processing Activities',
          overviewIntro: 'The following section summarizes the types of data processed, their purposes, and the categories of individuals concerned.',
          dataType1: 'Account data',
          dataType2: 'Contact data',
          dataType3: 'Content data',
          dataType4: 'Usage data',
          dataType5: 'Meta, communication, and procedural data',
          dataType6: 'Log data',
          subject1: 'Communication partners',
          subject2: 'Users',
          purpose1: 'Communication',
          purpose2: 'Security measures',
          purpose3: 'Organizational and administrative procedures',
          purpose4: 'Feedback',
          purpose5: 'Provision of our online offering and user-friendliness',
          purpose6: 'Information technology infrastructure',
          overviewDataHeading: 'Types of Data Processed',
          overviewSubjectsHeading: 'Categories of Data Subjects',
          overviewPurposesHeading: 'Purposes of Processing',
          legalBasisTitle: 'Relevant Legal Bases',
          legalBasisIntro:
            'Below is an overview of the legal bases under the GDPR that we rely on to process personal data. Please note that national data protection laws may apply depending on the country in which you or we are based. We will inform you if more specific legal grounds apply in individual cases.',
          legalItem1:
            'Performance of a contract and pre-contractual requests (Art. 6(1)(b) GDPR) – Processing is necessary to fulfill a contract or to take steps prior to entering into a contract at your request.',
          legalItem2:
            'Legitimate interests (Art. 6(1)(f) GDPR) – Processing is necessary for the purposes of the legitimate interests pursued by us or a third party, provided those interests are not overridden by your rights and freedoms.',
          nationalLawNote:
            'In addition to the GDPR, national data protection laws may apply in Germany, such as the Federal Data Protection Act (BDSG), which includes specific rules around access rights, deletion, objections, special categories of data, and automated decisions.',
          swissNote:
            'These privacy notices are intended to meet the requirements of both the Swiss DPA and the GDPR. For consistency, terminology from the GDPR is used (e.g., "processing", "personal data"), but the legal meaning of terms under Swiss law is preserved where applicable.',
          securityTitle: 'Security Measures',
          securityParagraph1:
            'We implement technical and organizational security measures in accordance with legal requirements, taking into account the state of the art, implementation costs, the nature, scope, and purpose of processing, as well as the varying likelihood and severity of risks to the rights and freedoms of natural persons.',
          securityParagraph2:
            'These measures include ensuring confidentiality, integrity, and availability of data through control over physical and electronic access, input, transfer, availability safeguards, and separation. We’ve also established procedures for upholding data subject rights, ensuring proper deletion, and responding to data risks. Data protection is considered from the earliest stages of selecting hardware, software, and internal practices — following the principle of privacy by design and default.',
          securityParagraph3:
            'Securing online connections using TLS/SSL encryption (HTTPS): To protect user data transmitted via our online services, we rely on TLS/SSL encryption. These technologies encrypt communications between a website/app and a browser (or between two servers), ensuring unauthorized access is prevented. TLS, the modern successor to SSL, ensures data transfers meet the highest security standards. HTTPS in your browser’s URL bar indicates a secured connection.',

          storageTitle: 'General Information on Data Storage and Deletion',
          storageParagraph1:
            'We delete personal data we process in accordance with legal requirements, once the underlying consent is withdrawn or there is no other legal basis for processing. This applies when the original purpose ceases or data is no longer needed. Exceptions apply when statutory obligations or legitimate interests require longer retention.',
          storageParagraph2:
            'Data that must be retained under commercial or tax law, or where storage is necessary for legal claims or rights of others, will be appropriately archived.',
          storageParagraph3:
            'Our privacy notice includes more specific information on retention and deletion applicable to certain processing operations.',
          storageParagraph4:
            'Where multiple retention periods exist, the longest period applies. Data that is no longer needed for its original purpose but must be stored for legal reasons will be processed solely for those justifications.',
          storageParagraph5:
            'The following general retention periods apply under German law:',
          storageItem1:
            '10 years – ledgers, annual reports, inventories, opening balances, and related documentation (e.g. § 147 AO, § 14b UStG, § 257 HGB)',
          storageItem2:
            '8 years – accounting records like invoices and cost receipts (§ 147 AO, § 257 HGB)',
          storageItem3:
            '6 years – business letters, working papers, calculations, payroll files, etc. (§ 147 AO, § 257 HGB)',
          storageItem4:
            '3 years – data relevant to potential warranty or compensation claims, stored per statutory limitation period (§§ 195, 199 BGB)',
          rightsTitle: 'Rights of the Data Subject',
          rightsIntro:
            'Under the GDPR, data subjects have a number of rights arising in particular from Articles 15 to 21:',
          right1:
            'Right to object: You have the right to object at any time, on grounds relating to your particular situation, to the processing of personal data concerning you that is based on Article 6(1)(e) or (f) of the GDPR; this includes profiling. If your personal data is processed for direct marketing purposes, you have the right to object at any time to such processing, including related profiling.',
          right2: 'Right to withdraw consent: You have the right to withdraw consent at any time.',
          right3: 'Right of access: You have the right to request confirmation of whether data concerning you is being processed, to receive information about that data, and to obtain a copy in accordance with legal requirements.',
          right4: 'Right to rectification: You have the right, as provided by law, to request the completion or correction of data concerning you.',
          right5: 'Right to erasure and restriction of processing: You have the right, in accordance with legal provisions, to request the erasure of your data or alternatively, to request restriction of processing.',
          right6: 'Right to data portability: You have the right to receive the data you have provided to us in a structured, commonly used, machine-readable format, and to request its transfer to another controller.',
          right7: 'Right to lodge a complaint: Without prejudice to any other administrative or judicial remedy, you have the right to lodge a complaint with a supervisory authority if you believe the processing of your personal data violates the GDPR.',
          hostingTitle: 'Provision of Online Services and Web Hosting',
          hostingIntro:
            'We process user data in order to provide our online services. This includes processing IP addresses to deliver content and functionality to users’ browsers or devices.',
          hostingDataTypes:
            'Types of data processed: usage data (e.g. page views, duration, device types), metadata and communication data (e.g. IP address, timestamps), log data (e.g. login records, access times).',
          hostingSubjects:
            'Data subjects: users (e.g. website visitors, app users).',
          hostingPurposes:
            'Purposes of processing: delivery of our online services and usability; IT infrastructure; security measures.',
          hostingRetention:
            'Retention and deletion: according to details described under “General Information on Data Storage and Deletion.”',
          hostingLegal:
            'Legal basis: legitimate interests (Art. 6(1)(f) GDPR).',
          hostingNoteTitle: 'Additional Information on Related Processes and Services:',
          hostingAccessLogs:
            'Access data and server log files: Our online services record server logs that include page and file names, timestamps, transferred data volume, success codes, browser type/version, OS, referring URL, IP address, and provider. These logs are used for security purposes (e.g. DDoS prevention) and server performance. Legal basis: legitimate interest (Art. 6(1)(f) GDPR). Retention: max. 30 days, or longer if needed for evidence.',
          hostingStrato:
            'STRATO: IT infrastructure services (e.g. hosting, server resources). Provider: STRATO AG, Pascalstraße 10, 10587 Berlin. Website: https://www.strato.de – Privacy policy: https://www.strato.de/datenschutz/. Data processing agreement provided. Legal basis: legitimate interest (Art. 6(1)(f) GDPR).',
          contactTitle: 'Contact and Request Management',
          contactIntro:
            'When users contact us (e.g. by post, contact form, email, phone, or social media), or within existing user or business relationships, we process the personal data they provide insofar as necessary to respond and fulfill any requested actions.',
          contactDataTypes:
            'Types of data processed: identity data (e.g. full name, address, customer number), contact data (e.g. postal or email address, phone number), content data (e.g. messages), usage data (e.g. page views, interaction), and metadata (e.g. IP addresses, timestamps).',
          contactSubjects: 'Data subjects: communication partners.',
          contactPurposes:
            'Purposes of processing: communication, organizational and administrative procedures, feedback collection (e.g. forms), provision of our services and user-friendliness.',
          contactRetention:
            'Retention and deletion: see "General Information on Data Storage and Deletion" section.',
          contactLegal:
            'Legal bases: legitimate interests (Art. 6(1)(f) GDPR), contract fulfillment and pre-contractual requests (Art. 6(1)(b) GDPR).',
          contactNoteTitle: 'Additional Notes on Processing Procedures and Services:',
          contactFormInfo:
            'Contact form: When contacting us via form, email, or other channels, we process the personal data provided solely for responding to the inquiry. Typically includes name, contact information, and any other necessary details. Legal basis: contract performance (Art. 6(1)(b) GDPR), legitimate interest (Art. 6(1)(f) GDPR).',


        };
    });
  }
}
