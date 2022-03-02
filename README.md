# Profil Daten Validieren

Die Route `POST /profiles` soll ein JSON Objekt mit user daten bekommen.
z.B.:  
```
{
    userId: 5,
    hobbies: ['football', 'reading'],
    pets: [
        {
            name: 'Fluffy',
            kind: 'Dog',
            age: 3,
        }
    ],
    favorites: {
        food: 'Pizza',
        movie: "Matrix 1",
        series: "Dr. Who"
    },
}
```
### Validierung
Der Server soll testen ob die Daten den vorgegebenen Regeln entsprechen.

* Der Server soll mit **Success** antworten, wenn alles in Ordnung ist.  
* Wenn es invalide Daten gibt, sollen alle Fehler-Meldungen zurückgegeben werden.

### Regeln
#### userId
* Required
* Nur Ganze Zahlen
* Größer oder gleich 0
#### hobbies
* Required
* Ein Array
* Mindestens ein Hobby
* Hobbies sind Strings
#### pets
* NICHT Required
* Ein Array
* Pets sind Objekte mit:
    * name: Required, String
    * kind: Required, String
    * age: Required, Integer
#### Favorites
* NICHT Required
* Favorites ist ein Objekt mit diesen (optionalen) Properties:
    * food: String, 5-30 Zeichen
    * movie: String, 5-30 Zeichen
    * series: Integer, 5-30 Zeichen