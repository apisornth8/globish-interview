<template lang="">
    <div class="forquestion">
        <div class="card">
            <div class="container">
                <h4><b>Q 7</b></h4>
                <p>{{currentQuestion.question}}</p>
            </div>
            <div class="answer">
                <button @click="saveAnswer(currentQuestion.option1.point)">{{currentQuestion.option1.answer}}</button>
            </div>
            <div class="answer">
                <button @click="saveAnswer(currentQuestion.option2.point)">{{currentQuestion.option2.answer}}</button>
            </div>
            <div class="answer">
                <button @click="saveAnswer(currentQuestion.option3.point)">{{currentQuestion.option3.answer}}</button>
            </div>
        </div>
        <form>
    <label class="next">
      <input type="button" value = "ต่อไป" @click="">
    </label>
    <label class="back">
      <input type="button" value = "กลับ" @click="this.step--">
    </label>
  </form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      step: 1,
      questions: [
        {
          questionId: 1,
          question: "คุณรู้จัก Globish ผ่านช่องทางใด(เลือกได้มากกว่า 1 ข้อ)",
          option1: {
            answer: "Instagram",
          },
          option2: {
            answer: "Facebook",
          },
          option3: {
            answer: "อื่นๆ(โปรดระบุ)",
          },
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