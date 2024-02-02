<template lang="">
    <head><link rel="stylesheet"href="https://fonts.googleapis.com/css?family=Kanit"></head>
    <div class="forquestion">
        <div class="card">
            <div class="container">
                <h5><b>Q {{step}}</b></h5>
                <p>{{currentQuestion.question}}</p>
            </div>
            <div class="answer">
                <button class="button-74" @click="saveAnswer(currentQuestion.option1.point)">{{currentQuestion.option1.answer}}</button>
            </div>
            <div class="answer">
                <button class="button-74" @click="saveAnswer(currentQuestion.option2.point)">{{currentQuestion.option2.answer}}</button>
            </div>
            <div class="answer">
                <button class="button-74" @click="saveAnswer(currentQuestion.option3.point)">{{currentQuestion.option3.answer}}</button>
            </div>
        </div>
        <form>
    <label class="next">
      <input type="button" class="nextbutton" value = "ต่อไป" @click="nextQuestion">
    </label>
    <label class="back">
      <input type="button" class="backbutton" value = "กลับ" @click="this.step--">
    </label>
  </form>
    </div>
</template>
<script>
export default {
  methods: {
    saveAnswer(point) {
      const selectedPoint = this.userPoint.find(
        (f) => f.questionId == this.step
      );
      if (selectedPoint) {
        selectedPoint.point = point;
      }
      console.log(this.userPoint);
      if (this.step < this.questions.length) {
        this.step++;
      } else {
        this.calculateTotalScore();
        // เพิ่มเงื่อนไขตามคะแนนที่ได้รับ
        const totalScore = this.userPoint.reduce((total, question) => {
          return total + question.point;
        }, 0);

        if (totalScore >= 131 && totalScore <= 180) {
          // Redirect ไปยัง GradualView.vue
          this.$router.push("/gradual");
        } else if (totalScore >= 91 && totalScore <= 130) {
          // Redirect ไปยัง EnthusView.vue
          this.$router.push("/enthus");
        } else if (totalScore >= 60 && totalScore <= 90) {
          // Redirect ไปยัง HobbyishView.vue
          this.$router.push("/hobbyish");
        }
      }
    },
    calculateTotalScore() {
      const totalScore = this.userPoint.reduce((total, question) => {
        return total + question.point;
      }, 0);
    },
    nextQuestion() {
      
    },
  },
  data() {
    return {
      step:1,
      questions: [
        {
          questionId: 1,
          question: "ถ้าวันนี้เป็นวันหยุดคุณจะ...",
          option1: {
            answer: "นอนเล่น พักผ่อน",
            point: 10,
          },
          option2: {
            answer: "ดูหนัง ดูซีรีย์ เล่นเกม",
            point: 20,
          },
          option3: {
            answer: "เรียนรู้อะไรใหม่ๆ",
            point: 30,
          },
        },
        {
          questionId: 2,
          question: "คุณต้องการพัฒนาภาษาอังกฤษเพื่ออะไร?",
          option1: {
            answer: "การทำงาน",
            point: 30,
          },
          option2: {
            answer: "เที่ยวต่างประเทศ",
            point: 10,
          },
          option3: {
            answer: "ใช้ในชีวิตประจำวัน",
            point: 20,
          },
        },
        {
          questionId: 3,
          question: "สไตล์การเรียนภาษาอังกฤษของคุณเป็นแบบไหน?",
          option1: {
            answer: "เรียนคอร์สออนไลน์ / โรงเรียนสอนภาษา",
            point: 30,
          },
          option2: {
            answer: "เรียนด้วยตนเอง เช่น อ่านหนังสือ ดูหนัง ฟังเพลง",
            point: 20,
          },
          option3: {
            answer: "คุยกับเพื่อนต่างชาติ / ไปเที่ยวต่างประเทศ",
            point: 10,
          },
        },
        {
          questionId: 4,
          question: "คุณใช้ภาษาอังกฤษบ่อยแค่ไหน?",
          option1: {
            answer: "เป็นประจำทุกวัน",
            point: 30,
          },
          option2: {
            answer: "เป็นบางครั้ง",
            point: 10,
          },
          option3: {
            answer: "นาน ๆ ที / ไม่ได้ใช้เลย",
            point: 20,
          },
        },
        {
          questionId: 5,
          question: "คุณอยากพัฒนาสกิลภาษาอังกฤษสกิลไหนมากที่สุด?",
          option1: {
            answer: "การฟัง",
            point: 20,
          },
          option2: {
            answer: "การพูด",
            point: 10,
          },
          option3: {
            answer: "การเขียน",
            point: 30,
          },
        },
        {
          questionId: 6,
          question: "อยากเรียนภาษาอังกฤษ แต่...",
          option1: {
            answer: "ไม่มีเวลา",
            point: 20,
          },
          option2: {
            answer: "เนื้อหาไม่น่าสนใจ / สอนไม่สนุก",
            point: 10,
          },
          option3: {
            answer: "ไม่มั่นใจ",
            point: 30,
          },
        },
      ],
      userPoint: [
        {
          questionId: 1,
          point: 0,
        },
        {
          questionId: 2,
          point: 0,
        },
        {
          questionId: 3,
          point: 0,
        },
        {
          questionId: 4,
          point: 0,
        },
        {
          questionId: 5,
          point: 0,
        },
        {
          questionId: 6,
          point: 0,
        },
      ],
    };
  },
  computed: {
    // find question
    currentQuestion() {
      return this.questions.find((q) => q.questionId == this.step);
    },
  },
};
</script>
<style lang="">
</style>