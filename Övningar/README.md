# Övningar

## API Bootcamp
Länk til API Bootcamp [hittar du här](https://docs.google.com/document/d/1kiUFMnI0J1KZLKlLIKFV4vynfDh_DmxOrm0mpk--Jxw/edit#heading=h.208073216sxn)

## Node Bootcamp
Länk til Node Bootcamp [hittar du här](https://docs.google.com/document/d/1qLUyM83X_MUmC0QoHZrsYw4UTxd41yAv1yE-vx8DZGQ/edit?usp=sharing)

## Loginsida

I denna övning ska du bygga ett API som ska kunna användas till inloggning och skapa en konto.
När man registrerar  ett konto ska andvändaren ange användarnamn, lösenord och e-postadress. Det ska inte vara möjligt att registerera sig med ett användarnamn eller en e-post som redan finns. När en användare försöker logga in ska användarnamn och lösenord kontrolleras det som finns sparat.

### Instruktioner
1. Skapa två endpoints i din Node.JS - fil som heter **/api/login** och **/api/signup**.
    * **/api/login** - tar användarnamn och lösenord som har skickats in och kollar om det finns samt är samma som i arrayen med användarkonton. Endpoint:en ska returnera ett objekt med egenskapen **success** som antingen är true eller false till klienten.

    * **/api/signup** -  tar emot användarnamn, lösenord, och e-post och kontrollerar så att användarnamn och e-post inte redan finns. Endpoint:en ska returnera ett objekt med egenskaparna: **success**, **usernameExists** och **emailExists**. Alla egenskapar är antingen true eller false.
2. Allt kan sparas i variabel på din server.

## Todo App

Du ska i denna övning bygga ett API för en todo-app. Du kan i denna övning spara din todos i en array i en variabel.

Det ska kunna gå att:
* Hämta alla todos
* Lägga till en ny todo
* Ta bort en todo

### Instruktioner

1. Skapa en mapp för ditt projekt.

2. Skapa en package.json med `npm init -y`.

3. Installera **express** med `npm install express`.

4. Skapa en index.js där din kod ska ligga.

### Endpoints

URL: `/api/todo` - Hämta alla todos

Method: `GET`

---

URL: `/api/todo` - Lägg till en todo

Method: `POST`

Body: `{todo: '', id: nummer, done: false }`

---

URL: `/api/todo/:id` - Ta bort en todo

Method: `DELETE`

### Level ups

#### Level up 1

Lägg till fält på varje Todo Items som är när den skapades och när den uppdaterades. `createdAt`  läggs till på servern alltså skickas inte med i body från Insomnia. Tips! Använde date-objektet https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

```js
{
    todo : String,
    id: Number,
    done: Boolean,
    createdAt: Date
}
```

#### Level up 2

Lägg på *pagination* på routen som hämtar alla Todos.

**Exempel**

Om det finns 50st todos (gud förbjude) i din array så ska routen som hämtar alla todos endast hämta de 10 senaste. Men med en query parameter ska man kunna välja nästa 10 todos.

