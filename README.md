# 🛠️ Project Setup

_**In order to get the app running with the expected behaviour you'll need these:**_

## 🦕 Deno

Works as runtime for TypeScript.

You can [get it here](https://deno.land/manual/getting_started/installation).

---

## 📑 Configuration

Duplicate the `.env.example` file and rename the copy to `.env`, then fill the variables with the corresponding values.

---

## ⚡ Start the app

You can run the app by using:

```shell
deno task start
```

---

# 🧠 Proccess

- The most important aspect I took into account was one of the requirements:
  > "We expect the problem to be a little over-engineered, take a little time to show off what you know. But this should
  > be done to a reasonable amount, don't go overboard."

- Most decisions were arbitrary (with some thought beforehand ofc), I just went with what I thought would be the best
  approach for the problem at hand. There's a lot of room for improvement, and also with some second opinions would have
  a better result.
- I didn't have to think much about the language to use as TypeScript usually is my go-to language for any project.
- I chose Deno as the runtime because it's way easier to setup and work with than Node, basically no external
  dependencies are needed to work with TypeScript, it just works.
- I had to decide between using classes or functions, I usually go with functions but I thought it would be a good
  opportunity to use classes and try to make the code more object-oriented.
- I had to think about the architecture of the app, it took me a while thinking about it while taking into account the
  requirements and the time I had to work on it. I ended up with a simple architecture that I think it's good enough
  (and maybe over-engineered?) for the problem at hand. (Explanation below)

---

# 🏗️ Architecture

- I decided to have a separation between the domain and the "infrastructure" `/api`, so I thought about a DTO-like
  solution since most of the app is just data manipulation and api calls.

- Folder Structure:
  - `/api`:
    - `/Client`: Contains the `ApiClient` which is an abstraction of fetch, it's used to have more control over the
      requests and responses as well as more type safety. The client is going to be extended by the other api services
      from within the app.
    - `/[folder-name]`: The rest of folders are specific services that extend the `ApiClient` and are use to receive
      external data or send it, also after receiving external data these services will only expose it to the app already
      mapped complying with the domain interfaces (sadly, there's just 1 use case for this (`IApiMegaverse`)).
  - `/model`: It has just one file that represents the "domain types" used from within the app.
  - `/modules`: Domain modules that represents the use cases of the app.
  - Note: `Index.ts` files are used to re-export from folders, this way we can have a cleaner import syntax.

- Not everything in the code has an use case (`delete` specifically) since the opportunity to use it didn't present
  itself, but it's there just in case (also so it doesn't looks so empty lol).

---

# 💭 Final Thoughts

So far it was challenging, fun and very creative. I spend most of the time thinking about the architecture and how to
approach the project. I'm happy with the result, but I'm sure there's a lot of room for improvement.
