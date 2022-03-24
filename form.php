<?php 

$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$city = $_POST['city'];

$subject = 'vlad.krakhmalev@gmail.com';
$title = "Заявка с сайта";
$message = "";

if ($name) {
  $message = $message . 'Имя: ' . $name . "\r\n";
}
if ($tel) {
  $message = $message . 'Телефон: ' . $tel . "\r\n";
}
if ($email) {
  $message = $message . 'Email: ' . $email . "\r\n";
}
if ($city) {
  $message = $message . 'Город: ' . $city . "\r\n";
}

if(mail($subject, $title, $message)) {
  echo json_encode(array('success' => 1));
} else {
  echo json_encode(array('success' => 0));
}



?>