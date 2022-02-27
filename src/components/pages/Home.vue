<template>
  <div class="main">
    <base-card class="BaseInfo">
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
            <base-button>Zaloguj</base-button>
            <base-button>Dołącz do nas</base-button>
          </div>
        </div>
        <div img2>
          <img src="../../img/LearnPhoto.jpg" class="responsive" alt="" />
        </div>
      </div>
    </base-card>
    <h1 id="title">Zobacz jak wygląda nasz serwis!</h1>
    <div class="text">
      <h3>
        Zdjęcia pokazją wygląd komponentu osbługującego wybór tematy fiszek,
        które chcesz rozwiązywać. Poprzez kliknięcie w temat przechodzimy do
        rozwiązywania
      </h3>
    </div>
    <img
      id="img1"
      ref="sectionFirst"
      class="img left sectionFirst responsive"
      src="../../img/TopicDisplay.jpg"
    />
    <img
      id="img4"
      class="img right sectionFirst responsive"
      src="../../img/TopicMobileDisplay.jpg"
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
      ref="sectionSecond"
      class="img left sectionSecond responsive"
      src="../../img/AnswerDisplay.jpg"
    />

    <img
      id="img5"
      class="img right sectionSecond responsive"
      src="../../img/AnswerMobileDisplay.jpg"
    />
    <div id="desc3" class="text sectionThird">
      <h3>
        Aplikacja polega na samodzielnym dodwaniu Tematów oraz słow i tłumaczeń.
        Taki model pozwala użytkownikowi na perfekcyjne dopasowanie zawartości
        do poziomu. Można dowolnie konfigurować oraz zmieniać zawartość tematów
        w każym momencie
      </h3>
    </div>

    <img
      id="img3"
      class="img left sectionThird responsive"
      ref="sectionThird"
      src="../../img/FlashcardsDisplay.jpg"
    />
    <img
      id="img6"
      class="img right sectionThird responsive"
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
};
</script>
<style scoped>
.main {
  color: #ce7b91;
  display: grid;
  margin: 7rem 5rem 5rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: calc(100vh -5rem);
  /* background-color: #6b705c; */
  align-items: center;
  justify-items: center;
  justify-content: center;
  grid-row-gap: 4rem;
  grid-column-gap: 4rem;
}
/* .text {
  transform: translateY(-5vh);
} */
.img {
  border: 1.5px solid black;
  border-radius: 4px;
  padding: 8px;
  background: white;
}
.img2 {
  width: 100%;
  height: 100%;
}
.responsive {
  max-width: 100%;
  height: auto;
}
.BaseInfo {
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
/* .right {
  transform: translateY(10vh);
} */
#img1 {
  grid-column: 1/2;
  grid-row: 3;
}
#desc1 {
  grid-row: 3;
  grid-column: 2/3;
}
#img2 {
  grid-row: 4;
  grid-column: 1/2;
}
#desc2 {
  grid-row: 4;
  grid-column: 2/3;
}
#img3 {
  grid-column: 1/2;
  grid-row: 5;
}
#desc3 {
  grid-column: 2/3;
}
#img4 {
  grid-row: 3;
  grid-column: 3/4;
}
#desc4 {
  grid-column: 1/2;
  grid-row: 5;
}
#img5 {
  grid-column: 3/4;
  grid-row: 4;
}
#desc5 {
  grid-column: 2/3;
}
#img6 {
  grid-column: 3/4;

  grid-row: 5;
}
#desc6 {
  grid-column: 1/2;
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
    margin: auto;
  }
  .text {
    margin: 0 10vw;
  }
  .card {
    height: auto;
  }
}
</style>