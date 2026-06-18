# Guía de Copy — Amor Conyugal

> Proyecto: **AG9 — Amor Conyugal App**
> Versión: 0.1.0 (prototipo)
> Última actualización: 2026-06-17

---

## 1. Principios fundamentales

### 1.1 Original, sobrio, fiel

- **Original:** El copy debe ser redacción propia, no una copia textual de fuentes salvo que se cite expresamente con su atribución. Está permitido parafrasear la Sagrada Escritura, el Catecismo de la Iglesia Católica (CIC) y documentos pontificios, siempre indicando la referencia (cf. CIC n. XXX; cita: Amoris Laetitia n. XXX).
- **Sobrio:** Lenguaje claro, sin grandilocuencia, sin adjetivos vacíos. Preferir la sencillez a la pompa. El tono es sereno, respetuoso, con la gravedad que merece el sacramento del matrimonio sin caer en rigidez.
- **Fiel:** Todo contenido debe ser conforme a la doctrina católica tal como la enseña el Magisterio. No innovar, no especular, no añadir opiniones personales. Cuando se presente una enseñanza, citar la fuente magisterial correspondiente.

### 1.2 No inventar doctrina

- No se debe redactar como si se estuviera enseñando doctrina nueva. El papel de la aplicación es **divulgar y hacer accesible** la enseñanza existente de la Iglesia sobre el matrimonio y la familia.
- Cualquier afirmación teológica o moral debe poder rastrearse hasta una fuente magisterial: Catecismo de la Iglesia Católica, documentos del Concilio Vaticano II, encíclicas papales, exhortaciones apostólicas, el Código de Derecho Canónico, o el Magisterio ordinario.
- Si una afirmación no tiene una fuente clara, preguntar: "¿Puedo atribuir esto al Magisterio?" Si la respuesta es no, no debe incluirse.

### 1.3 No apropiarse autoría

- Toda referencia directa a la Escritura, al Catecismo o a documentos de la Iglesia debe ir acompañada de su atribución explícita (p. ej., *cf. CIC n. 1601*; *Amoris Laetitia n. 13*; *Génesis 2, 24*).
- Las citas textuales van entre comillas (" ") con su referencia al final. Las paráfrasis llevan «cf.» antes de la referencia.
- Reconocimiento explícito en el pie de página o en una sección de "Fuentes" cuando se haya utilizado material documental.

---

## 2. Tono y voz

### 2.1 Espiritual-matrimonial

- **Tono:** Cercano, cálido, orante. Como quien escribe una carta a una pareja de esposos que busca vivir su fe. No es un tratado teológico frío, pero tampoco un texto de autoayuda genérico.
- **Voz:** Primera persona del plural ("descubrimos", "estamos llamados") para incluir al lector como parte de la misma comunidad de fieles. Segunda persona del plural ("ustedes") cuando se habla directamente a los esposos.
- **Registro:** Estándar–formal. Sin jerga técnica innecesaria; cuando se use un término teológico (p. ej., "esponsal", "sacramento", "gracia sacramental"), debe explicarse o contextualizarse.

### 2.2 Vocabulario guía

| Preferir | Evitar |
|-----------|--------|
| vocación matrimonial | el matrimonio como institución |
| amor esponsal | amor romántico |
| camino de santidad | vida perfecta |
| gracia del sacramento | magia del matrimonio |
| entrega mutua | sacrificio (como término aislado) |
| comunión de personas | unión de almas |
| plan de Dios | destino |

### 2.3 Afirmaciones que no deben aparecer

- "El matrimonio es fácil" — la experiencia real incluye cruz y redención.
- "Solo para católicos practicantes" — la misericordia de Dios es para todos; el lenguaje debe ser acogedor.
- Juicios sobre divorciados vueltos a casar, personas en situación irregular, etc. Remitir siempre al tono de *Amoris Laetitia*: acompañar, integrar, discernir.

---

## 3. SEO y metadatos

### 3.1 Metadatos por página

Cada ruta de la aplicación tiene su propio objeto `Metadata` en `src/app/metadata.ts`, con:

| Propiedad | Regla |
|-----------|-------|
| `title` | Único por página. Máximo 60 caracteres. Incluye el nombre de la sección + "| Amor Conyugal". |
| `description` | Entre 120–160 caracteres. Oración completa que describa el contenido concreto de la página. |
| `openGraph` | Hereda del base. Título y descripción pueden personalizarse si el contenido lo justifica. |
| `twitter` | Igual que Open Graph. |
| `alternates.canonical` | Siempre presente, apunta a la URL canónica de la página. |
| `other.application-disclaimer` | Presente en el metadata base: NO ELIMINAR. |

### 3.2 Palabras clave (long tail)

Las descripciones deben integrar de forma natural términos como:

- espiritualidad matrimonial
- amor conyugal católico
- vocación matrimonial
- santidad en el matrimonio
- gracia sacramental del matrimonio
- familia católica

No forzar palabras clave. La prioridad es la legibilidad humana.

### 3.3 Estructura de títulos

- `h1`: Uno por página. Debe contener la frase clave principal de la ruta.
- `h2`: Subtemas dentro de la página. Máximo 3–4.
- `h3` y inferiores: Desarrollo detallado.

---

## 4. Disclaimer

Todas las páginas deben incluir, en el pie o en un apartado visible, el siguiente aviso:

> **Prototipo no oficial.** Esta aplicación es un proyecto independiente de divulgación espiritual. No está afiliada ni representa a la Santa Sede, a ninguna diócesis, parroquia o institución eclesiástica. Para el magisterio oficial de la Iglesia sobre el matrimonio, consúltese el *Catecismo de la Iglesia Católica* y la exhortación apostólica *Amoris Laetitia* del Papa Francisco.

El disclaimer de metadatos (`application-disclaimer`) ya está incluido en el metadata base (`src/app/metadata.ts`).

---

## 5. Atribución de fuentes

Formato estándar para citas:

- **Catecismo de la Iglesia Católica:** `CIC n. 1601` (o `cf. CIC n. 1601–1606` para paráfrasis).
- **Sagrada Escritura:** `Gn 2, 24`; `Ef 5, 25–33`; `Mc 10, 6–9`.
- **Documentos pontificios:** Título abreviado + número: `Amoris Laetitia n. 13`; `Familiaris Consortio n. 11`.
- **Concilio Vaticano II:** `Gaudium et Spes n. 48`.
- **Derecho Canónico:** `CIC can. 1055`.

Para referencias generales al Magisterio que no sean citas textuales: `cf. [fuente]`.

---

## 6. Control de calidad

Antes de publicar cualquier texto nuevo:

- [ ] ¿Es fiel a la doctrina católica? ¿Tiene fuente magisterial?
- [ ] ¿Están atribuidas todas las citas y paráfrasis?
- [ ] ¿El tono es espiritual-matrimonial (cercano pero reverente)?
- [ ] ¿Cumple con los límites de SEO (título ≤ 60, descripción 120–160)?
- [ ] ¿Incluye el disclaimer de prototipo no oficial?
- [ ] ¿La redacción es original? No hay copia literal sin atribución.

---

## 7. Referencias

- Catecismo de la Iglesia Católica (CIC), nn. 1601–1666 (El sacramento del Matrimonio).
- Concilio Vaticano II, Constitución Pastoral *Gaudium et Spes*, nn. 47–52.
- Papa Francisco, Exhortación Apostólica *Amoris Laetitia* (2016).
- Papa Juan Pablo II, Exhortación Apostólica *Familiaris Consortio* (1981).
- Papa Juan Pablo II, *Teología del Cuerpo* (catequesis 1979–1984).
- Pablo VI, Encíclica *Humanae Vitae* (1968).
- Código de Derecho Canónico, cánones 1055–1165.
