// ค่าตั้งของ Cozy — แก้ไฟล์นี้ไฟล์เดียว ไม่ต้องแตะ index.html

// 1) ค่าเชื่อมต่อ Firebase ของโปรเจกต์ cozy-women
window.COZY_FIREBASE = {
  apiKey: "AIzaSyBD4SI9hXcBq-6TnaokljJbDsSR3ayVWhg",
  authDomain: "cozy-women.firebaseapp.com",
  projectId: "cozy-women",
  storageBucket: "cozy-women.firebasestorage.app",
  messagingSenderId: "193163794901",
  appId: "1:193163794901:web:1ccd1c841ff901d1f0855c",
  measurementId: "G-YXQ3RH9RR5"
};

// 2) ราคาแพ็กเกจ (บาท/เดือน) และจำนวนคนใน Family
window.COZY_PRICES = { plus: 59, premium: 149, family: 399, familySeats: 5 };

// 3) ของแลกด้วยโทเคน: ["ชื่อของ", จำนวนโทเคน]
window.COZY_REWARDS = [
  ["ผ้าอนามัย 1 ชิ้นจากตู้แลก Cozy", 5],
  ["ชุดตรวจการตั้งครรภ์", 20],
  ["ส่วนลดปรึกษาแพทย์ 100 บาท", 40]
];

// 4) อีเมลผู้ดูแลแอพ แสดงในนโยบายความเป็นส่วนตัว
window.COZY_CONTACT = "";
