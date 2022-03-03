<template>
  <div class="main">
    <base-card class="baseInfo">
      <div class="baseCardContent">
        <div>
          <ul>
            <h1>Dołącz do nas juz dzisiaj!</h1>
            <li><h3>90% użytkowników poprawia swoje wyniki w nauce</h3></li>
            <li>
              <h3>
                Poprzez naukę systemem powtórek zapamiętujemy nowe słowa
                szybciej i na dłużej!
              </h3>
            </li>
            <li><h3>Bardzo prosta obsługa aplikacji</h3></li>
            <li>
              <h3>
                Dostępność na różnych urządzeniach zsynchronizowanych z twoim
                kontem pozwala rozpocząć naukę w domu przy komputerze i
                kontynuować ją np. za pomocą aplikacji mobilnej w czasie podróży
                autobusem
              </h3>
            </li>
          </ul>
          <div class="joinButtons">
            <base-button @click="login">Zaloguj</base-button>
            <base-button @click="register">Dołącz do nas</base-button>
          </div>
        </div>
        <div>
          <img src="../../img/LearnPhoto.jpg" class="responsive" alt="" />
        </div>
      </div>
    </base-card>
    <h1 id="title">Zobacz jak wygląda nasz serwis!</h1>
    <img
      id="topicDisplay"
      ref="sectionFirst"
      class="img left sectionFirst"
      src="../../img/TopicDisplay.jpg"
    />
    <div class="text sectionFirst" id="topicDesc">
      <h3>
        Zdjęcia pokazją wygląd komponentu osbługującego wybór tematu fiszek,
        które chcesz rozwiązywać. Poprzez kliknięcie w temat przechodzimy do
        rozwiązywania
      </h3>
    </div>
    <img
      id="topicMobileDisplay"
      class="img right sectionFirst"
      src="../../img/TopicMobileDisplay.jpg"
    />
    <img
      id="AnswerDisplay"
      ref="sectionSecond"
      class="img left sectionSecond"
      src="../../img/AnswerDisplay.jpg"
    />
    <div id="desc2" class="text sectionSecond">
      <h3>
        Po wyborze tematu przechodzimy do rozwiązywania. Jest to bajecznie
        proste, wystarczy wpisać swoją odpowiedź i kliknąć dalej. Jeśli
        odpowiedź jest błędna aplikacja nas o tym powiadomi, a gdy nie znamy
        odpowiedzi możemy zobaczyć tłumaczenie. Po przejściu przez wszystkie
        słowa w temacie dostaniemy wynik, który powie nam ile słów znaliśmy
      </h3>
    </div>
    <img
      id="AnswerMobileDisplay"
      class="img right sectionSecond"
      src="../../img/AnswerMobileDisplay.jpg"
    />
    <img
      id="flashcardsDisplay"
      class="img left sectionThird"
      ref="sectionThird"
      src="../../img/FlashcardsDisplay.jpg"
    />
    <div id="flashcardsDesc" class="text sectionThird">
      <h3>
        Aplikacja polega na samodzielnym dodwaniu tematów oraz słów i tłumaczeń.
        Taki model pozwala użytkownikowi na perfekcyjne dopasowanie zawartości
        do poziomu. Można dowolnie konfigurować oraz zmieniać zawartość tematów
        w każym momencie
      </h3>
    </div>
    <img
      id="flashcardsMobileDisplay"
      class="img right sectionThird"
      src="../../img/FlashcardsMobileDisplay.jpg"
    />
  </div>
</template>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".sectionFirst", {
      scrollTrigger: { trigger: this.$refs.sectionFirst, start: "top 60%" },
      keyframes: [
        { opacity: 0, duration: 0 },
        { opacity: 100, duration: 100 },
      ],
    });
    gsap.to(".sectionSecond", {
      scrollTrigger: { trigger: this.$refs.sectionSecond, start: "top 60%" },
      keyframes: [
        { opacity: 0, duration: 0 },
        { opacity: 100, duration: 100 },
      ],
    });
    gsap.to(".sectionThird", {
      scrollTrigger: { trigger: this.$refs.sectionThird, start: "top 60%" },
      keyframes: [
        { opacity: 0, duration: 0 },
        { opacity: 100, duration: 100 },
      ],
    });
  },
  methods: {
    login() {
      this.$router.replace("login");
    },
    register() {
      this.$router.replace("register");
    },
  },
};
</script>

<style scoped>
.main {
  color: #ce7b91;
  display: grid;
  margin: 15vh auto;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  justify-content: center;
  grid-row-gap: 4rem;
  grid-column-gap: 4rem;
}
.img {
  border: 1.5px solid black;
  border-radius: 4px;
  padding: 8px;
  background: white;
}
.responsive {
  max-width: 100%;
  height: auto;
}
.baseInfo {
  margin-top: 5vh;
  margin-bottom: 0;
  width: 100vw;
  justify-self: center;
  grid-column: span 3;
  grid-row: 1;
  font-size: 120%;
}
.baseCardContent {
  display: flex;
}
.baseCardContent img {
  border-radius: 12px;
}
.baseCardContent > div {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
}
.joinButtons button {
  height: 5rem;
  margin: 1rem;
  width: 10rem;
  background: #ce7b91;
  color: turquoise;
  font-size: 1.3rem;
  font-weight: bold;
}
#title {
  grid-column: span 3;
  grid-row: 2;
}
#topicDisplay {
  grid-column: 1/2;
  grid-row: 3;
}
#topicDesc {
  grid-row: 3;
  grid-column: 2/3;
}
#topicMobileDisplay {
  grid-row: 3;
  grid-column: 3/4;
}
#AnswerDisplay {
  grid-row: 4;
  grid-column: 1/2;
}
#answerDesc {
  grid-row: 4;
  grid-column: 2/3;
}
#answerMobileDisplay {
  grid-column: 3/4;
  grid-row: 4;
}
#flashcardsDisplay {
  grid-column: 1/2;
  grid-row: 5;
}
#flashcardsDesc {
  grid-column: 2/3;
}
#flashcardsMobileDisplay {
  grid-column: 3/4;
  grid-row: 5;
}
@media (max-width: 1300px) {
  .baseCardContent {
    flex-direction: column;
    align-items: center;
  }
  .baseCardContent > div {
    width: 100%;
  }
  .main {
    display: flex;
    flex-flow: column;
    justify-items: center;
    margin: 15vh auto;
  }
  .text {
    margin: 0 10vw;
  }
  .card {
    height: auto;
  }
}
</style>