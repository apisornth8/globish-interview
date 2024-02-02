<template lang="">
    <head><link rel="stylesheet"href="https://fonts.googleapis.com/css?family=Kanit"></head>
    <div class="forquestion">
        <div class="card" id="summarystyle">
            <div class="container1">
                <h1>ผลลัพธ์ของคุณคือ</h1>
                <img src="../assets/image/Gradual.png">
                <h2>คุณรู้จัก Globish ผ่าน Instagram, เพื่อนแนะนำมา</h2>
            </div>
            
        </div>
        <form>
  </form>
    </div>
</template>
<script>
export default {
    mounted() {
    // อ่านคะแนนจาก localStorage เมื่อ component ถูก mounted
    const userPoints = JSON.parse(localStorage.getItem('userPoints'));

    // ตรวจสอบว่ามีคะแนนหรือไม่
    if (userPoints) {
      // ทำตามที่คุณต้องการกับข้อมูลคะแนนที่อ่านได้
      // อาจจะนำไปแสดงผลหรือประมวลผลต่อไปตามที่คุณต้องการ
      console.log(userPoints);
    } else {
      // ไม่พบคะแนน
      console.log('No user points found in localStorage');
    }
  },
};
</script>
<style lang="">
</style>