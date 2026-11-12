// ค่าตั้งของ Cozy — แก้ไฟล์นี้ไฟล์เดียว ไม่ต้องแตะ index.html

// 1) ค่าเชื่อมต่อ Firebase ของโปรเจกต์ cozy-women
//    ค่าเหล่านี้ไม่ใช่ความลับ ความปลอดภัยของข้อมูลมาจากกฎในไฟล์ firestore.rules
window.COZY_FIREBASE = {
  apiKey: "AIzaSyBD4SI9hXcBq-6TnaokljJbDsSR3ayVWhg",
  authDomain: "cozy-women.firebaseapp.com",
  projectId: "cozy-women",
  storageBucket: "cozy-women.firebasestorage.app",
  messagingSenderId: "193163794901",
  appId: "1:193163794901:web:1ccd1c841ff901d1f0855c",
  measurementId: "G-YXQ3RH9RR5"
};

// 2) ข้อความราคา Cozy Plus ที่แสดงในแอพ (ตอนนี้ยังไม่มีระบบเก็บเงินจริง)
window.COZY_PLUS = { price: "59 บาท / เดือน" };

// 3) อีเมลผู้ดูแลแอพ แสดงในนโยบายความเป็นส่วนตัว
window.COZY_CONTACT = "";
