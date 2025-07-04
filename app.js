// Firebase設定（あなたの設定に置き換え済み）
const firebaseConfig = {
  apiKey: "AIzaSyDr7fAr7rHrFCV4KLtN9e1Tp_PaKrQwHeM",
  authDomain: "ruoru-app.firebaseapp.com",
  projectId: "ruoru-app",
  storageBucket: "ruoru-app.appspot.com",
  messagingSenderId: "47883274795",
  appId: "1:47883274795:web:1a9be782e3ee4612beb86e",
  measurementId: "G-7S2QVZN25X"
};

// 初期化
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ログイン
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("ログイン成功！");
      // TODO: ルオルの育成画面へ遷移
    })
    .catch((error) => {
      alert("ログイン失敗：" + error.message);
    });
}

// 新規登録
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("アカウント作成成功！");
    })
    .catch((error) => {
      alert("登録失敗：" + error.message);
    });
}
